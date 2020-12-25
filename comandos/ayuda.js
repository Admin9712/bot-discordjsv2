const Discord = require("discord.js")
const config = require('../config.json');

exports.run = (client, message, args) => {

	 const p = config.prefijo;
	 const inicio = new Discord.MessageEmbed()   
	.setTitle(`COMMANDOS DE EL BOT`) 
	.addField(`**Reacciona con 😀**`, `\`\`\`Para ver los Comandos de los Usuarios\`\`\``)
	.addField(`**Reacciona con 🎮**`, `\`\`\`Para ver los Comandos de el Owner de el Bot\`\`\``)
	.addField(`**Reacciona con 🏘️**`, `\`\`\`Para volver a el Inicio de el Comando Ayuda\`\`\``)
	.addField(`**Reacciona con ❌**`, `\`\`\`Para eliminar el Embed de Ayuda\`\`\``)
	.setTimestamp()
	.setFooter(config.textoFooter)
	.setColor(config.colorEmbeds)

	const aymiemb = new Discord.MessageEmbed()   
	.setTitle(`COMMANDOS`) 
	.setDescription(`**PARA LOS USUARIOS**
----------------------------------------------
⦿ \`${p}\`**__ayuda__**        = **\`Comando que te enseña esto\`**
⦿ \`${p}\`**__ping__**         = **\`Comando de respuesta\`**
⦿ \`${p}\`**__prefijo__**      = **\`Comando que te dira el prefijo de el bot\`**
⦿ \`${p}\`**__info__**         = **\`Comando que te dara tu Info o la info de el Mencionado\`**
⦿ \`${p}\`**__infocanal__**    = **\`Comando que te dara la info de el canal o la info de el canal Mencionado\`**
⦿ \`${p}\`**__infoserver__**   = **\`Comando que te dara la Info de el Servidor\`**`) 
	.addField("Los Usuarios tienen", `**\`6\`** **__Comandos__**`)
	.setTimestamp()
	.setFooter(config.textoFooter)
	.setColor(config.colorEmbeds)

	const ayownerbot = new Discord.MessageEmbed()   
	.setTitle(`COMMANDOS`) 
	.setDescription(`**PARA EL OWNER DE EL BOT**
-------------------------------------------------------
⦿ \`${p}\`**__say__**     	    = **\`Comando para enviar un mensaje desde el Bot\`**
⦿ \`${p}\`**__sayembed__**          = **\`Comando para enviar un mensaje desde el Bot en un Embed\`**
⦿ \`${p}\`**__eval__**    	    = **\`Comando para realizar una Operacion en Js desde Discord\`**`) 
	.addField("El Owner Tiene", `**\`3\`** **__Comandos__**`)
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
