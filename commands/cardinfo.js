const { SlashCommandBuilder } = require('discord.js');
const pokemon = require('pokemontcgsdk');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cardinfo')
        .setDescription('Fetches information about a Pokemon card by name')
        .addStringOption(option =>
            option.setName('cardname')
                .setDescription('The name of the card')
                .setRequired(true)),
    async execute(interaction) {
        const cardName = interaction.options.getString('cardname');
        try {
            const cards = await pokemon.card.where({ name: cardName });

            if (cards && cards.length > 0) {
                const card = cards[0];
                await interaction.reply(`Card Name: ${card.name}\nArtist: ${card.artist}\nRarity: ${card.rarity}\nImage: ${card.images.small}`);
            } else {
                await interaction.reply(`No cards found with the name "${cardName}"`);
            }
        } catch (error) {
            console.error(error);
            await interaction.reply('An error occurred while fetching card information.');
        }
    },
};
