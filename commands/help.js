const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Displays a list of available commands.'),
    async execute(interaction) {
        const commands = interaction.client.commands;
        let helpMessage = 'Here is a list of available commands:\n';

        commands.forEach(command => {
            helpMessage += `\`/${command.data.name}\`: ${command.data.description}\n`;
        });

        await interaction.reply({ content: helpMessage, ephemeral: true }); 
    },
};
