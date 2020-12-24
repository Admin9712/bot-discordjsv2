const Discord = require("discord.js");
const config = require('../config.json');

exports.run = (client, message, args) => {
 var server = message.guild;
const embedInfoServer = new Discord.MessageEmbed()
    .setTitle(`Info de el Servidor`)
    .addField("**❯ Nombre de el Servidor**", `**${server.name}**`, true)
    .addField('**❯ ID**', `\`${server.id}\``, true)
    .addField('**❯ Region**', server.region, false)
    .addField('**❯ Dueño del Servidor**', `**${server.owner.user.tag}** [**__${server.owner.user}__**] (**\`${server.owner.user.id}\`**)`)
    .addField('**❯ Miembros**', server.memberCount, true)
    .addField('**❯ Creado el**', server.createdAt.toDateString(), false)
    .setColor(config.colorEmbeds)
    .setFooter(config.textoFooter)
message.channel.send(embedInfoServer);
}