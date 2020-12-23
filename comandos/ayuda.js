const Discord = require("discord.js")
const config = require('../config.json');

exports.run = (client, message, args) => {

	 const inicio = new Discord.MessageEmbed()   
	.setTitle(`COMMANDOS DE EL BOT`) 
	.addField(`**Reacciona con 😀**`, `\`\`\`Para ver los Comandos de los Usuarios\`\`\``)
	.addField(`**Reacciona con 🎮**`, `\`\`\`Para ver los Comandos de el Owner de el Bot\`\`\``)
	.addField(`**Reacciona con ❌**`, `\`\`\`Para eliminar el Embed de Ayuda\`\`\``)
	.setTimestamp()
	.setFooter(config.textoFooter)
	.setColor(config.colorEmbeds)

	const aymiemb = new Discord.MessageEmbed()   
	.setTitle(`COMMANDOS`) 
	.setDescription(`**PARA LOS USUARIOS**
----------------------------------------------
⦿ \`${config.prefijo}\`**__ayuda__**        = **\`Comando que te enseña esto\`**
⦿ \`${config.prefijo}\`**__ping__**         = **\`Comando de respuesta\`**
⦿ \`${config.prefijo}\`**__prefijo__**      = **\`Comando que te dira el prefijo de el bot\`**
⦿ \`${config.prefijo}\`**__info__**         = **\`Comando que te dara tu Info o la info de el Mencionado\`**`) 
	.addField("Los Usuarios tienen", `**\`4\`** **__Comandos__**`)
	.setTimestamp()
	.setFooter(config.textoFooter)
	.setColor(config.colorEmbeds)

	const ayownerbot = new Discord.MessageEmbed()   
	.setTitle(`COMMANDOS`) 
	.setDescription(`**PARA EL OWNER DE EL BOT**
-------------------------------------------------------
⦿ \`${config.prefijo}\`**__say__**     	    = **\`Comando para enviar un mensaje desde el Bot\`**
⦿ \`${config.prefijo}\`**__sayembed__**     = **\`Comando para enviar un mensaje desde el Bot en un Embed\`**`) 
	.addField("El Owner Tiene", `**\`2\`** **__Comandos__**`)
	.setTimestamp()
	.setFooter(config.textoFooter)
	.setColor(config.colorEmbeds)
    message.channel.send(inicio).then(m => {
        m.react('😀')
        m.react('🎮')
        m.react('🏘️')    
	m.react('❌')       
        m.awaitReactions((reaction, user) => {
            if(message.author.id !== user.id) return; 
            if(reaction.emoji.name === '😀') return m.edit(aymiemb);
            if(reaction.emoji.name === '🎮') return m.edit(ayownerbot);
            if(reaction.emoji.name === '🏘️') return m.edit(inicio);  
	    if(reaction.emoji.name === '❌') return m.delete();                                  
            })
})
}
