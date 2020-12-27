const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async(client, message) => {
 if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 let embedmsgd = new Discord.MessageEmbed() 
    .setTitle(`**[MENSAJE ELIMINADO]**`)
    .setColor(config.colorEmbeds)
    .addField(`Contenido de el Mensaje Eliminado:`, message.content, true)
    .addField(`ID Mensaje:`, `\`${message.id}\``, true)
    .addField(`Canal:`, message.channel, false)
    .addField(`ID Canal:`, `**\`${message.channel.id}\`**`, false)
    .addField(`Mensaje de:`, `**__${message.author}__**`, true)
    .addField(`ID Author Mensaje:`, `**\`${message.author.id}\`**`, true)
    .setTimestamp()
    .setFooter(config.textoFooter)
       let canalLogs = client.channels.cache.get(config.idCanalLogs);
       canalLogs.send(embedmsgd);
}