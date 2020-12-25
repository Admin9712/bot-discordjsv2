const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async(client, channel) => {
channel.guild.fetchAuditLogs().then(logs => { 
  let userID = logs.entries.first().executor.id;
  let userAvatar = logs.entries.first().executor.avatarURL();

  let embedwebed = new Discord.MessageEmbed()
    .setTitle('**[ACTUALIZACIÓN DE WEBHOOK]**')
    .setColor(config.colorEmbeds)
    .setDescription(`**Webhook actualizado**\nCanal: **${channel.name}**\nPor: <@${userID}> (ID: ${userID})`)
    .setTimestamp()
    .setFooter(config.textoFooter)
    let canalLogs = client.channels.cache.get(config.idCanalLogs);
    canalLogs.send(embedwebed);
   
 })
}