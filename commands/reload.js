const Discord = require('discord.js');


module.exports.run = (client, message, args) => {
    if (message.author.id !== '666561053059973120') return message.reply('You do not have the permission to use this command!');
    let command;
    if (client.commands.has(args[0])) {
      command = args[0];
    } else if (client.aliases.has(args[0])) {
      command = client.aliases.get(args[0]);
    }
    if (!command) {
      return message.channel.send(`I cannot find the command: ${args[0]}`);
    } else {
      message.channel.send(`Reloading: ${command}`)
        .then(m => {
          client.commands.reload(command)
            .then(() => {
              m.edit(`Successfully reloaded: ${command}`);
            })
            .catch(e => {
              m.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``);
            });
        });
    }
  };
  
  module.exports.help = {
    name: 'reload',
    aliases: []
  };