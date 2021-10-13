const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder().setName('generate')
    .setDescription('Generate QR code')
    .addStringOption(option => 
      option.setName('data')
        .setDescription('The data to encode')
        .setRequired(true)
    )
    .addStringOption(option => 
      option.setName('color')
        .setDescription('Embed color in hex format (default: #0000ff)')
        .setRequired(false)
    )
    .addIntegerOption(option => 
      option.setName('image-width')
        .setDescription('Image width (default: 150)')  
        .setRequired(false)
    )
    .addIntegerOption(option => 
      option.setName('image-height')
        .setDescription('Image height (default: 150)')  
        .setRequired(false)
    ),
  async execute(interaction) {
    const options = {
      data: interaction.options.getString('data'),
      color: interaction.options.getString('color') || '#0000ff',
      imageWidth: interaction.options.getInteger('image-width') || 150,
      imageHeight: interaction.options.getInteger('image-height') || 150,
    };

    if (options.imageHeight * options.imageWidth > 300000) {
      await interaction.reply('Image is too big.');
      return;
    }
    
    const generatedURL = `https://chart.googleapis.com/chart?chs=${ options.imageWidth }x${ options.imageHeight }&cht=qr&chl=${ encodeURI(options.data) }&choe=UTF-8`;
    const embed = new MessageEmbed().setTitle('Generated QR code')
      .addFields({
        name: 'Requested by',
        value: interaction.user.tag
      },
      {
        name: 'Encoded text',
        value: options.data
      },
      {
        name: 'URL',
        value: generatedURL
      })
      .setColor(options.color)
      .setImage(generatedURL)
      .setTimestamp()
    await interaction.reply({ embeds: [embed] });
  }
};