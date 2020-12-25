const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async(client, oldChannel, newChannel) => {
	if(!oldChannel.guild) return;
  	oldChannel.guild.fetchAuditLogs().then(logs => { 
       let userID = logs.entries.first().executor.id;
      if(oldChannel.name !== newChannel.name) {
      let embedcaned = new Discord.MessageEmbed()
      .setTitle('**[CANAL EDITADO]**')
      .setColor(config.colorEmbeds)
      .setDescription(`**Canal editado**\nNombre anterior: **${oldChannel.name}**\nNuevo nombre: **${newChannel.name}**\nCanal ID: **${oldChannel.id}**\nPor: <@${userID}> (ID: ${userID})`)
         .setTimestamp()
         .setFooter(config.textoFooter)
         let canalLogs = client.channels.cache.get(config.idCanalLogs);
         canalLogs.send(embedcaned);
      }
    })
}