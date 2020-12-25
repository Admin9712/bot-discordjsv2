const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async(client) => {
  console.log(`Loggeado en ${client.user.tag}`)
  setInterval(() => {
      let MSGS = [
          `${config.prefijo}ayuda`,
          `eAE`
      ];
      
      client.user.setActivity(MSGS[~~(Math.random() * MSGS.length)], {
          type: 'WATCHING'
      })

  }, 10000); // TIEMPO EN MILISEGUNDOS
}
