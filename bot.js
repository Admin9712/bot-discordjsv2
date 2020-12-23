const Discord = require("discord.js"),
client = new Discord.Client(),
fs = require("fs");
const config = require('./config.json');
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./comandos/${file}`);
        console.log("Comando Cargado " + file)
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});
    //Events "handler"
    fs.readdir('./eventos/', (err, files) => {
        if (err) console.log(err);
        files.forEach(file => {
            let eventFunc = require(`./eventos/${file}`);
            console.log("Evento cargado " + file)
            let eventName = file.split(".")[0];
            client.on(eventName, (...args) => eventFunc.run(client, ...args));
        });
});

client.on("ready", () => console.log("Online!"));
client.login(config.token)
