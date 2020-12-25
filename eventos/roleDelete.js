const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async(client, role) => {
 if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
    role.guild.fetchAuditLogs().then(logs => {
     let userID = logs.entries.first().executor.id;
       let embedbrrol = new Discord.MessageEmbed() 
       .setTitle('**[ROL ELIMINADO]**')
       .setColor(config.colorEmbeds)
       .addField("Rol Eliminado:", role.name, true)
       .addField("ID Rol Eliminado:", `\`${role.id}\``, false)
       .addField("Rol Eliminado Por:", `**__<@!${userID}>__**`, true)
       .addField("ID De el que ha borrado el Rol", `\`${userID}\``, true)
       .setTimestamp()
       .setFooter(config.textoFooter)
       let canalLogs = client.channels.cache.get(config.idCanalLogs);
       canalLogs.send(embedbrrol);
    })
}