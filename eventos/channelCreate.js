const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async(client, channel) => {
 if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
    if(!channel.guild) return;
    channel.guild.fetchAuditLogs().then(logs => { 
     let userID = logs.entries.first().executor.id;
 	let tcanal; 
        switch (channel.type) {
            case "text":
                tcanal = "De Texto";
                break;
            case "voice":
                tcanal = "De Voz";
                break;
        }
       let embedcrcan = new Discord.MessageEmbed() 
       .setTitle('**[CANAL CREADO]**')
       .setColor(config.colorEmbeds)
       .addField("Nombre de el Canal:", channel.name, true)
       .addField("ID De el Canal:", `**\`${channel.id}\`**`, true)
       .addField("Tipo de Canal:", `\`${tcanal}\``, false)
       .addField("Canal Creado por:", `**__<@!${userID}>__**`, true)
       .addField("ID Creador de el Canal", `**\`${userID}\`**`, true)
       .setTimestamp()
       .setFooter(config.textoFooter)
       let canalLogs = client.channels.cache.get(config.idCanalLogs);
       canalLogs.send(embedcrcan);
    })
}