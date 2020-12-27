const Discord = require("discord.js"),
      client = new Discord.Client(),
      fs = require("fs");
const config = require('./config.json');

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();
 let today = new Date();
 let data = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
 let tiempo = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
fs.readdir("./comandos/", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./comandos/${file}`);
        let commandName = file.split(".")[0];
        console.log(`[${data}][${tiempo}]Comando Cargado ${commandName} ✔️`)
        client.commands.set(commandName, props);
    });
console.log(`[${data}][${tiempo}]Comandos Cargados ` + files.length)
});

    fs.readdir('./eventos/', (err, files) => {
        if (err) console.log(err);
	   
        files.forEach(file => {
            let eventFunc = require(`./eventos/${file}`);
            let eventName = file.split(".")[0];
            console.log(`[${data}][${tiempo}]Evento cargado ${eventName} ✔️`)
            client.on(eventName, (...args) => eventFunc.run(client, ...args));
        });
console.log(`[${data}][${tiempo}]Eventos Cargados ` + files.length)
});

// AQUI PUEDES AÑADIR ALGUN EVENTO

client.login(config.token)
