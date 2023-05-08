const { Collection, Client, GatewayIntentBits, Partials } = require('discord.js');

const { Guilds, GuildMessages, GuildMembers, DirectMessages, GuildModeration, GuildInvites, GuildVoiceStates, GuildPresences, GuildWebhooks } = GatewayIntentBits
const { Channel, GuildMember, GuildScheduledEvent, Message, Reaction, ThreadMember, User } = Partials;

const client = new Client({
    intents: [Object.keys(GatewayIntentBits)],
    partials: [Object.keys(Partials)]
});

client.config = require('./config.json');
client.commands = new Collection();
const handlers = require('./handlers.js');

client.login(client.config.token).then(() => {
    handlers.loadCommands(client);
    handlers.loadEvents(client);
}).catch(err => {
    console.log(`There was an error loading the client:\n${err}`);
})