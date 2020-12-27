const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async(client) => {
 let today = new Date();
 let data = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
 let tiempo = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 let canalLogs = client.channels.cache.get(config.idCanalLogs);
 canalLogs.send(`[${data}][${tiempo}]: Bot se ha vuelto a conectar.`)
 console.log(`[${date}${time}] : Bot se ha vuelto a conectar.`);
}