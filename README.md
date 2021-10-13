# DevProjects - Discord bot: QR code generator

This is an open source project from [DevProjects](http://www.codementor.io/projects). Feedback and questions are welcome!
Find the project requirements here: [Discord bot: QR code generator](https://www.codementor.io/projects/tool/discord-bot-qr-code-generator-cgkm8b16qf)

## Tech/framework used
Built with dotenv, discord.js, @discordjs/builders, @discordjs/rest, discord-api-types

## Installation
This bot is not hosted so if you want to use it you have to do some setting up of your own.

#### Step 1:
Create a bot from the Discord Developer Portal and invite the bot into a server

#### Step 2:
Create a `.env` file at the root of the project and put the following in it
```
DISCORD_TOKEN=yourtokenhere
GUILD_ID=yourguildid
CLIENT_ID=yourclientid
```

#### Step 3:
Install the dependencies
```
npm install
```

#### Step 4:
Run the bot
```
npm run dev
```

#### Step 5:
Run deploy-commands.js to register commands in your server
```
node deploy-command.js
```

#### Step 5:
Use the bot on discord by sending a message
```
/generate [data] [color] [image-width] [image-height]
```
data - data to encode

color - embed color in hex format (optional)

image-width, image height - image size (optional)

## License
[MIT](https://choosealicense.com/licenses/mit/)
Most open source projects use the MIT license. Feel free to choose whichever license you prefer.
