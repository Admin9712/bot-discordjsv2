const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async(client) => {
 let today = new Date();
 let data = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
 let tiempo = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(`[${data}][${tiempo}]Loggeado en ${client.user.tag}`)
 let embedread = new Discord.MessageEmbed() 
    .setTitle(`**[BOT INICIADO]**`)
    .setThumbnail("https://images-ext-1.discordapp.net/external/UEu3Cx_CnK2HB4MXx6l1hypTiwG1YWAVO1dIDyDe4h8/https/i.pinimg.com/originals/70/a5/52/70a552e8e955049c8587b2d7606cd6a6.gif?width=424&height=318")
    .setColor(config.colorEmbeds)
    .setTimestamp()
    .setFooter(config.textoFooter)
    let canalLogs = client.channels.cache.get(config.idCanalLogs);
    canalLogs.send(embedread);

  setInterval(() => {
      let MSGS = [
          `${config.prefijo}ayuda`,
          `Ea`
      ];
      
      client.user.setActivity(MSGS[~~(Math.random() * MSGS.length)], {
          type: 'WATCHING'
      })

  }, 10000); // TIEMPO EN MILISEGUNDOS
}
