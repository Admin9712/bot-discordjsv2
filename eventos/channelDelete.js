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
     let embedbrcan = new Discord.MessageEmbed() 
       .setTitle('**[CANAL ELIMINADO]**')
       .setColor(config.colorEmbeds)
       .addField("Canal Eliminado:", channel.name, true)
       .addField("ID Canal Eliminado:", `**\`${channel.id}\`**`, true)
       .addField("Tipo de Canal:", `${tcanal}`, false)
       .addField("Canal Eliminado Por:", `**__<@!${userID}>__**`, true)
       .addField("ID De el que ha borrado el Canal", `**\`${userID}\`**`, true)
       .setTimestamp()
       .setFooter(config.textoFooter)
       let canalLogs = client.channels.cache.get(config.idCanalLogs);
       canalLogs.send(embedbrcan);
    })
}