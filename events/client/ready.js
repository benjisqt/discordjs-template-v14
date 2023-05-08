const { Client, ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',

    /**
     * 
     * @param {Client} client
     */

    async execute(client) {
        client.user.setActivity({
            name: `${client.guilds.cache.size} guilds!`,
            type: ActivityType.Watching,
        });

        console.log('Client Loaded!');
    }
}