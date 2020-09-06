const Discord = require('discord.js');
const help = require('../helpMsgs.json');
const fs = require('fs');

module.exports.run = (client, message, args) => {
  if(!args[0]){
    if (message.author.id === message.author.id) {  
      const embed = new Discord.MessageEmbed()
      .addField("For more info about a specific Command:", "Use [prefix]help command_name")
      .addField("Moderation:", help.helpMsg1)
      .addField("Fun:", help.helpMsg3)
      .addField("Useful:", help.helpMsg4)
      .addField("Action:", help.helpMsg5)
      .addField('Bot Owner Commands', help.helpMsg7)
      .setFooter(`© Matty By Infinity#2670`);
      message.author.send({embed}).catch(e =>{
        if (e) {
        message.channel.send(`Error. You seems to be locking your DMs so I'll send it here instead.`);
        message.channel.send({embed});
        }
      });
      message.reply("Check your DMs!");
    }else{
      const embed = new Discord.MessageEmbed()
      .setColor("#AA9900")
      .addField("For more info about a specific Command:", "Use [prefix]help command_name")
      .addField("Moderation:", help.helpMsg1)
      .addField("Fun:", help.helpMsg3)
      .addField("Useful:", help.helpMsg4)
      .addField("Action:", help.helpMsg5)
      .addField('Bot Owner Commands', help.helpMsg7)
      .setFooter(`© Matty By Infinity#2670`);
      message.author.send({embed}).catch(e =>{
        if (e) {
        message.channel.send(`Error. You seems to be locking your DMs so I'll send it here instead.`);
        message.channel.send({embed});
        }
      });
      message.reply("Check your DMs!");
    }
  }else{
    let command = args[0];
    if (client.commands.has(command)) {
      cmd = client.commands.get(command);
      return message.channel.send("```" + `\n` + "Description: " + cmd.help.description + `\n` + "Usage: " + cmd.help.usage + "```")
    } else if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
      return message.channel.send("```" + `\n` + "Description: " + cmd.help.description + `\n` + "Usage: " + cmd.help.usage + "```")
    } else {
      return message.reply("That command doesn't exist!")
    }
  }
}


module.exports.help = {
  name: 'help',
  aliases: []
};