const Discord = require("discord.js");
const config = require('../config.json');

exports.run = (client, message, args) => {
  const member = message.mentions.users.first() || message.author;
        let status; 
        switch (member.presence.status) {
            case "online":
                status = "🟢 En Linea";
                break;
            case "dnd":
                status = "🔴 No molestar";
                break;
            case "idle":
                status = "🟠 Ausente";
                break;
            case "offline":
                status = "⚫ Desconectado";
                break;
        }
const embedInfo = new Discord.MessageEmbed()
	.setColor(config.colorEmbeds)
	.setDescription(`**❯ Info de el ${member.bot ? 'Bot' : 'Usuario'} ${member}**`)
	.addField(`**❯ ⦿** **__${member.bot ? 'Bot' : 'Usuario'}__**:`, `**${member.tag}** (**__${member}__**)`, true)
	.addField(`**❯ ⦿ ID**:`, `**\`${member.id}\`**`, true)
	.addField(`**❯ ⦿ Presencia**:`, `[**__${status}__**]`, false)
	.addField(`**❯ ⦿ Cuenta Creada el**:`, `**__${member.createdAt.toDateString()}__**`, true)
	.setTimestamp()
.setFooter(config.textoFooter)
message.reply(embedInfo);
