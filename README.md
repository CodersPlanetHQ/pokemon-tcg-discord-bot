# Pokemon TCG Discord Bot

[![Discord](https://img.shields.io/discord/1130497386849413140?label=Discord&logo=discord)](https://discord.gg/UntpUqZkcU)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/CodersPlanetHQ/pokemon-tcg-discord-bot/graphs/commit-activity)

A Discord bot that allows users to interact with the Pokemon Trading Card Game (TCG) API, manage collections, trade cards, and open virtual packs.

## Table of Contents

*   [Features](#features)
*   [Setup](#setup)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
*   [Configuration](#configuration)
*   [Usage](#usage)
    *   [Commands](#commands)
*   [Contributing](#contributing)
*   [License](#license)
*   [Support](#support)
*   [Credits](#credits)

## Features

*   **Card Information:** Fetch detailed information about specific Pokemon cards using the `/cardinfo` command.
*   **Card Drops:** Participate in random card drops within your Discord server's channels.
*   **Collection Management:** Store and manage your virtual Pokemon TCG card collection.
*   **Trading:** Trade cards with other users in the server using the `/trade` command.
*   **Wishlist:** Add cards to your wishlist and get notified when they become available.
*   **Marketplace:** Buy and sell cards with other users on the virtual marketplace.
*   **Pack Openings:** Simulate opening virtual card packs and collect the cards you receive.
*   **Admin Commands:** Administrative commands to manage card drops and bot settings.

## Setup

### Prerequisites

*   [Node.js](https://nodejs.org/) (v16 or higher)
*   [npm](https://www.npmjs.com/) (Node Package Manager) or [Yarn](https://yarnpkg.com/)
*   [Discord Bot Token](https://discord.com/developers/applications)
*   [Pokemon TCG API Key](https://pokemontcg.io/) (or an API Key from TCGdex or another provider).
*   A Discord server where you have administrative permissions.
*   A database (e.g., MongoDB, PostgreSQL) - _(If you plan on implementing collection management, trading, and market features)_.

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/CodersPlanetHQ/pokemon-tcg-discord-bot.git
    cd pokemon-tcg-discord-bot
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install
    ```

## Configuration

1.  Create a `.env` file in the root directory of the project.
2.  Add the following environment variables to the `.env` file:

    ```
    TOKEN=YOUR_DISCORD_BOT_TOKEN
    POKEMON_API_KEY=YOUR_POKEMON_TCG_API_KEY
    CLIENT_ID=YOUR_DISCORD_APPLICATION_CLIENT_ID
    GUILD_ID=YOUR_DISCORD_SERVER_ID
    DATABASE_URL=YOUR_DATABASE_CONNECTION_STRING # (If using a database)
    ```

    *   Replace `YOUR_DISCORD_BOT_TOKEN` with your Discord bot token.
    *   Replace `YOUR_POKEMON_TCG_API_KEY` with your Pokemon TCG API key.
    *   Replace `YOUR_DISCORD_APPLICATION_CLIENT_ID` with your bot's client ID.
    *   Replace `YOUR_DISCORD_SERVER_ID` with your Discord server ID.
    *   Replace `YOUR_DATABASE_CONNECTION_STRING` with your database connection string (if applicable).

3.  Ensure your `config.json` (or equivalent) is properly set up if the bot relies on it for additional configuration.

## Usage

1.  Register slash commands:

    ```bash
    node deploy-commands.js
    ```

2.  Start the bot:

    ```bash
    node index.js
    ```

### Commands

*   `/help`: Displays a list of available commands.
*   `/cardinfo <card_name>`: Fetches and displays information about a specific Pokemon card.
*   `/drop`: (Admin) Forces a card to drop in the current channel.
*   `/collection`: Displays your card collection.
*   `/trade <user> <card1> <card2>`: Initiates a trade with another user.
*   `/wish <card_name>`: Adds a card to your wishlist.
*   `/market`: Shows cards for sale on the market.
*   `/buy <card_id>`: Buy a card from the current market
*   `/packs <card_id> <price>`: Sell a card on the current market.
*   `/sell`: Simulates the opening of a virtual card pack.

## Contributing

Contributions are welcome! Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise commit messages.
4.  Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

*   If you encounter any issues or have questions, please open an issue on [GitHub](https://github.com/CodersPlanetHQ/pokemon-tcg-discord-bot/issues).
*   Join our [Discord server](https://discord.gg/UntpUqZkcU) for support and discussions.

## Credits

*   This bot was created by [CodersPlanetHQ](https://github.com/CodersPlanetHQ).
*   Powered by the [Pokemon TCG API](https://pokemontcg.io/) and [discord.js](https://discord.js.org/).
