const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');
const pokemon = require('pokemontcgsdk');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('drop')
        .setDescription('Forces a card to drop (Admin only).'),
    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
            return await interaction.reply({ content: 'Admin only.', ephemeral: true });
        }
        try {
            const cards = await pokemon.card.all();
            const card = cards[Math.floor(Math.random() * cards.length)];
            if (card) {
                await interaction.channel.send(`A wild ${card.name} appeared!`);
                await interaction.channel.send({ files: [card.images.small] });
                await interaction.reply({ content: 'A card has dropped!', ephemeral: true });
            } else {
                await interaction.reply({ content: 'Failed to fetch a card.', ephemeral: true });
            }
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Error dropping a card.' });
        }
    },
};
