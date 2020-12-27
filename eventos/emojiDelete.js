const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async(client, emoji) => {
if(!emoji.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 let tEmoji = emoji.animated ? 'Animado' : 'No Animado';
 emoji.guild.fetchAuditLogs().then(logs => { 
  let userID = logs.entries.first().executor.id;
  let embedbrem = new Discord.MessageEmbed() 
    .setTitle('**[EMOJI ELIMINADO]**')
    .setColor(config.colorEmbeds)
    .setThumbnail(emoji.url)
    .addField("Nombre de el Emoji:", emoji.name, true)
    .addField("ID De el Emoji:", `**\`${emoji.id}\`**`, true)
    .addField("Tipo de Emoji:", `\`${tEmoji}\``, false)
    .addField("Emoji Creado por:", `**__<@!${userID}>__**`, true)
    .addField("ID Creador de el Emoji", `**\`${userID}\`**`, true)
    .setTimestamp()
    .setFooter(config.textoFooter)
       let canalLogs = client.channels.cache.get(config.idCanalLogs);
       canalLogs.send(embedbrem);
   
 })
}