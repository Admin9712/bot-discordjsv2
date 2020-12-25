const Discord = require("discord.js");
const config = require('../config.json');

exports.run = (client, message, args) => {
      if (message.author.id !== config.ownerBotID) return message.reply("No eres el Owner de el bot")
      const codigo = args.join(" ");
      const evaluado = eval(codigo);
      const evallimpio = clean(evaluado);
      message.channel.send(`\`\`\`js\n${evallimpio}\n\`\`\``);
}