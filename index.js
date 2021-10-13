const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
const dotenv = require('dotenv');
const { execute } = require('./events/ready');

dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Command Handler

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${ file }`);
  client.commands.set(command.data.name, command);
}

// Event Handler

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const event = require(`./events/${ file }`);
  if (event.once) client.once(event.name, (...args) => event.execute(...args));
  else client.on(event.name, (...args) => event.execute(...args));
}

client.login(process.env.DISCORD_TOKEN);

