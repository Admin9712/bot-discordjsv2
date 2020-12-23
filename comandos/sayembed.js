const Discord = require("discord.js");
const config = require('../config.json');

exports.run = (client, message, args) => {
	if (message.author.id !== config.ownerBotID) return message.reply("No eres el Owner de el bot")
	let texto = args.join(" ");
	if (!texto) return message.reply("No has escrito el mensaje a Enviar")
	message.delete()
 const sayembed = new Discord.MessageEmbed()   
	.setAuthor(message.author.tag) 
	.setDescription(texto)
	.setTimestamp()
	.setFooter(config.footer)
	.setColor(`#ff0000`)
  message.channel.send(sayembed);
}
