## Introduction
This is an example bot for Discord.JS V14. Below are the proper steps you need to take to initialise this code.
Before you follow this guide, this bot requires [Node.JS](https://github.com/benjisqt/discordjs-template-v14#install-nodejs-and-npm) version 16.9.0 or higher and [npm](https://github.com/benjisqt/discordjs-template-v14#install-nodejs-and-npm) version 8 or higher. You can check your installed versions of both by running `npm version`

- `git clone https://github.com/benjisqt/discordjs-template-v14.git`
- `cd discordjs-template-v14`
- `npm install`

## Find your Bot Token

- Go to the [Discord Developer Portal](https://discord.com/developers/applications)
- Click on `New Application` (assuming you don't already have one), give your bot a name and click on `Create`
- On the left side, click on `Bot`
- Click on `Add Bot`
- Now, you should see a new `Build-A-Bot` section. In the `Token` section of this, click on `Copy`.

NOTE: Do NOT share this token with anyone!

If you have your token, go to [here](https://github.com/benjisqt/discordjs-template-v14#initialise-code)

## Invite your bot to your Discord server

In case you haven't already, adding your Discord bot to a server that you use, whether it be a test server or a public server, can be helpful for testing out new commands and systems you may add.
It can also just be used to make sure the bot works lol

- Go to the [Discord Developer Portal](https://discord.com/developers/applications)
- Click on your application
- On the left side, click on `OAuth2`, then `URL Generator`.
- For the scopes, select `application.commands` and `bot`.
- Permissions can vary. For simplicity, tick the `Administrator` box.
- Scroll down to find the invite link, click the copy button, then paste it into your browser to invite the bot.

## Install NodeJS and NPM on Windows and macOS

- Go to the [NodeJS Website](https://nodejs.org)
- Install the downloaded file.

*NOTE: For Apple Silicon macs, you may have to click the `Other Downloads` button and download the ARM64 version of Node.*

## Install NodeJS and NPM on Linux

- Update Linux
  `sudo apt-get update -y`
- Download node with curl
  `curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -`
  (change the 16 to a different version if you wish to install a version of node that is not v16)
- Install node
  `sudo apt install nodejs`
- Verify installation
  `node -v`

## Initialise Code

Once your bot token has been acquired, open the folder with the code in and rename `config-example.json` to `config.json`.
Open the newly renamed `config.json` file, and replace the token area with your bot token.
Once the bot token has been entered, go into a command prompt or terminal (in the bot folder) and run the following commands:

- `npm install` - gets all packages required for the bot to work
- `node .` or `node index.js` - runs the bot code.

if there are no errors, the terminal should output the following lines in any order:
`Commands Loaded!`
`Events Loaded!`
`Client Loaded!`
