const Discord = require("discord.js")
const config = require('../config.json');
exports.run = (client, message, args) => {

	 const inicio = new Discord.MessageEmbed()   
	.setTitle(`COMMANDOS DE EL BOT`) 
	.addField(`**Reacciona con 😀**`, `\`\`\`Para ver los Comandos de los Usuarios\`\`\``)
	.addField(`**Reacciona con 🎮**`, `\`\`\`Para ver los Comandos de el Owner de el Bot\`\`\``)
	.setTimestamp()
	.setFooter(config.footer)
	.setColor(`#ff0000`)

	const aymiemb = new Discord.MessageEmbed()   
	.setTitle(`COMMANDOS`) 
	.setDescription(`**PARA LOS USUARIOS**
----------------------------------------------
⦿ \`${config.prefijo}\`**__ayuda__**         = **\`Comando que te enseña esto\`**
⦿ \`${config.prefijo}\`**__ping__**         = **\`Comando de respuesta\`**
⦿ \`${config.prefijo}\`**__prefijo__**         = **\`Comando que te dira el prefijo de el bot\`**`) 
	.addField("Los Usuarios tienen", `**\`3\`** **__Comandos__**`)
	.setTimestamp()
	.setFooter(config.footer)
	.setColor(`#ff0000`)

	const ayownerbot = new Discord.MessageEmbed()   
	.setTitle(`COMMANDOS`) 
	.setDescription(`**PARA EL OWNER DE EL BOT**
-------------------------------------------------------
⦿ \`${config.prefijo}\`**__say__**     = **\`Comando para enviar un mensaje desde el Bot\`**`) 
	.addField("El Owner Tiene", `**\`1\`** **__Comando__**`)
	.setTimestamp()
	.setFooter(config.footer)
	.setColor(`#ff0000`)
    message.channel.send(inicio).then(m => {
        m.react('😀')
        m.react('🎮')
        m.react('🏘️')         
        m.awaitReactions((reaction, user) => {
            if(message.author.id !== user.id) return; 
            if(reaction.emoji.name === '😀') return m.edit(aymiemb);
            if(reaction.emoji.name === '🎮') return m.edit(ayownerbot);
            if(reaction.emoji.name === '🏘️') return m.edit(inicio);                                   
            })
})
}






