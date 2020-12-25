const Discord = require("discord.js");
const config = require('../config.json');

exports.run = (client, message, args) => {
	if (message.author.id !== config.ownerBotID) return message.reply("No eres el Owner de el bot")
 if(!args.slice(1).join(' '))return message.channel.send(`Ingresa un texto`)
 let usuario = message.mentions.users.first() || message.author;
 let nombre = usuario.username
 message.delete()
 message.channel.fetchWebhooks().then(async webhooks => {
 let encontrar = await webhooks.find(webhooks => webhooks.name === nombre)
   
 if(encontrar){
    encontrar.send(args.join(' '));
 }else{
    let creado = await message.channel.createWebhook(nombre,{ avatar: 
    usuario.displayAvatarURL() })
    creado.send(args.slice(1).join(' '))


     }
   })
}