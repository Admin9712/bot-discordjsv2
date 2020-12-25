const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async(client, oldRole, newRole) => {
    if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
    oldRole.guild.fetchAuditLogs().then(logs => { 
     let userID = logs.entries.first().executor.id;
     if(oldRole.name !== newRole.name) {
      let embedacrol = new Discord.MessageEmbed() 
         .setTitle('**[NOMBRE DE ROL EDITADO]**')
         .setColor(config.colorEmbeds)
         .setDescription(`**Nombre del rol editado correctamente**\nNombre anterior: **${oldRole.name}**\nNuevo nombre: **${newRole.name}**\nID rol: **${oldRole.id}**\nPor: [<@${userID}>] (ID: **${userID}**)`)
         .setTimestamp()
         .setFooter(config.textoFooter)
         let canalLogs = client.channels.cache.get(config.idCanalLogs);
         canalLogs.send(embedacrol);
      }
    })
}