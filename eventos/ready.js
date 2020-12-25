const config = require('../config.json');

exports.run = async(client) => {
  console.log(`Loggeado en ${client.user.tag}`)
  client.user.setActivity(`Usa ${config.prefijo}ayuda`, { type: "WATCHING" });
}
