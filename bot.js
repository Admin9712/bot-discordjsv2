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
        let commandName = file.split(".")[0];
        console.log(`Comando Cargado ${commandName} ✔️`)
        client.commands.set(commandName, props);
    });
console.log("Comandos Cargados " + files.length)
});
    
    fs.readdir('./eventos/', (err, files) => {
        if (err) console.log(err);
	   
        files.forEach(file => {
            let eventFunc = require(`./eventos/${file}`);
            let eventName = file.split(".")[0];
            console.log(`Evento cargado ${eventName} ✔️`)
            client.on(eventName, (...args) => eventFunc.run(client, ...args));
        });
console.log("Eventos Cargados " + files.length)
});

// AQUI PUEDES AÑADIR ALGUN EVENTO

client.login(config.token)
