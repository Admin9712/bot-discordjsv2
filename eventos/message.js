const config = require('../config.json');

 exports.run = async(client, message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(config.prefijo)) {
    
 let messageArray = message.content.split(" "),
     cmd = messageArray[0],
     args = messageArray.slice(1),
     commandfile = client.commands.get(cmd.slice(config.prefijo.length)) || client.aliases.get(cmd.slice(config.prefijo.length));
  
if(!commandfile) return;    
    commandfile.run(client,message,args);             
  }
}
