exports.run = (client, message, args) => {
  message.channel.send("Pong :)");
}
exports.config = {
  aliases: ["pong", "pingpong"]
}