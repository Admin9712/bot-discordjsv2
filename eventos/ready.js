const config = require('../config.json');
exports.run = async(client) => {
  client.user.setActivity(`Usa ${config.prefijo}ayuda`, { type: "WATCHING" });
}
