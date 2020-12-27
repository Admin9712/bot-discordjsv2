const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async(client, oldGuild, newGuild) => {
 if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 oldGuild.fetchAuditLogs().then(logs => { 
  let userID = logs.entries.first().executor.id;
  if(oldGuild.name !== newGuild.name) {
 let embesvac = new Discord.MessageEmbed() 
    .setTitle(`**[NOMBRE DE EL SERVIDOR ACTUALIZADO]**`)
    .setColor(config.colorEmbeds)
    .addField(`Nombre de el Servidor Anterior:`, oldGuild.name, true)
    .addField(`Nombre de el Servidor Ahora:`, newGuild.name, true)
    .addField("Staff:", `<@${userID}>`, false)
    .addField("ID Staff:", `**\`${userID}\`**`, true)
    .setTimestamp()
    .setFooter(config.textoFooter)
       let canalLogs = client.channels.cache.get(config.idCanalLogs);
       canalLogs.send(embesvac);
   }
 })
}