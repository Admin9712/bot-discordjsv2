const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async(client, role) => {
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
    role.guild.fetchAuditLogs().then(logs => { 
     let userID = logs.entries.first().executor.id;
     let embedcrrol = new Discord.MessageEmbed() 
       .setTitle('**[ROL CREADO]**')
       .setColor(config.colorEmbeds)
       .addField("Nombre de el Rol:", role.name, true)
       .addField("ID De el Rol:", `\`${role.id}\``, false)
       .addField("Rol Creado por:", `**__<@!${userID}>__**`, true)
       .addField("ID Creador de el Rol", `\`${userID}\``, true)
       .setTimestamp()
       .setFooter(config.textoFooter)
       let canalLogs = client.channels.cache.get(config.idCanalLogs);
       canalLogs.send(embedcrrol);
    })
}