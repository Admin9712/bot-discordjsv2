const Discord = require("discord.js");
const config = require('../config.json');

exports.run = (client, message, args) => {
 const canal = message.mentions.channels.first() || message.channel;
 if (canal.topic === null) canal.topic = "No tiene Descripcion";
const embedInfoCanal = new Discord.MessageEmbed()
    .setDescription(`**__Info de el Canal ${canal} solicitado por ${message.author}__**`)
    .setColor(config.colorEmbeds)
    .addField(`Nombre de el Canal:`, `**${canal.name}** [**__${canal}__**]`, true)
    .addField(`ID:`, `**\`${canal.id}\`**`, true)
    .addField(`Descripcion de el Canal:`, `${canal.topic}`)
    .addField(`Tipo de Canal`, `${canal.type ? 'Canal de Texto' : 'Canal de Voz'}`)
    .addField(`Canal NSFW?`, `${canal.nsfw ? 'Si' : 'No'}`)
    .addField(`Categoria:`, `${canal.parent.name}`)
    .setFooter(config.textoFooter)
message.reply(embedInfoCanal);

}