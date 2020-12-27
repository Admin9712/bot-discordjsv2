const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async(client, oldEmoji, newEmoji) => {
if(!oldEmoji.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 let tEmoji = newEmoji.animated ? 'Animado' : 'No Animado';
oldEmoji.guild.fetchAuditLogs().then(logs => { 
  let userID = logs.entries.first().executor.id;
  let embedemac = new Discord.MessageEmbed() 
    .setTitle('**[EMOJI ACTUALIZADO]**')
    .setColor(config.colorEmbeds)
    .setThumbnail(newEmoji.url)
    .addField("Nombre Anterior de el Emoji:", oldEmoji.name, true)
    .addField("Nombre Nuevo de el Emoji:", newEmoji.name, true)
    .addField("ID De el Emoji:", `**\`${newEmoji.id}\`**`, false)
    .addField("Tipo de Emoji:", `\`${tEmoji}\``, false)
    .addField("Emoji Editado por:", `**__<@!${userID}>__**`, true)
    .addField("ID de el que ha Editado el Emoji", `**\`${userID}\`**`, true)
    .setTimestamp()
    .setFooter(config.textoFooter)
       let canalLogs = client.channels.cache.get(config.idCanalLogs);
       canalLogs.send(embedemac);
 })
}