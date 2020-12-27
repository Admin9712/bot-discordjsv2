const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async(client, guild, user) => {
if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 guild.fetchAuditLogs().then(logs => { 
  let userID = logs.entries.first().executor.id;
 let embeusds = new Discord.MessageEmbed() 
    .setTitle('**[USUARIO DESBANEADO]**')
    .setColor(config.colorEmbeds)
    .addField("Usuario Desbaneado:", `<@${user.id}>`, true)
    .addField("ID Usuario Desbaneado:", `**\`${user.id}\`**`, true)
    .addField("Staff:", `<@${userID}>`, false)
    .addField("ID Staff:", `**\`${userID}\`**`, true)
    .setTimestamp()
    .setFooter(config.textoFooter)
       let canalLogs = client.channels.cache.get(config.idCanalLogs);
       canalLogs.send(embeusds);
 })
}
