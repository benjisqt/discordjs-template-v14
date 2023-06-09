const fs = require('fs');

async function loadEvents(client) {
    const folders = fs.readdirSync(`./events`);

    for (const folder of folders) {
        const files = fs.readdirSync(`./events/${folder}`).filter((file) => file.endsWith(".js"));

        for (const file of files) {
            const event = require(`./events/${folder}/${file}`);

            if(event.rest) {
                if(event.once) client.rest.once(event.name, (...args) => event.execute(...args, client))
                else client.rest.on(event.name, (...args) => event.execute(...args, client))
            } else {
                if(event.once) client.once(event.name, (...args) => event.execute(...args, client))
                else client.on(event.name, (...args) => event.execute(...args, client))
            }
            continue;
        }
    }

    return console.log(`Events Loaded!`);
}

async function loadCommands(client) {
    const commandsArray = [];

    const folders = fs.readdirSync(`./commands`);

    for (const folder of folders) {
        const files = fs.readdirSync(`./commands/${folder}`).filter((file) => file.endsWith(".js"));

        for (const file of files) {
            const cmd = require(`./commands/${folder}/${file}`);

            client.commands.set(cmd.data.name, cmd);
            
            commandsArray.push(cmd.data.toJSON());


            continue;
        }
    }

    client.application.commands.set(commandsArray);

    return console.log(`Commands Loaded!`);
}

module.exports = { loadEvents, loadCommands };