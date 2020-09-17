const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (client, message, args) => {
  if (!message.author.id === '666561053059973120') return message.reply("You don't have the permission to use this command...:facepalm:");
    //message.delete();
    let fuck = JSON.parse(fs.readFileSync("./fuck.json", "utf8"));
    let user = args[0];
    const amount = parseInt(user);

    if (isNaN(amount)) {
        return message.reply('Please enter a valid UserID');
    }
    if (!user) return message.reply('You need to imput a User ID');
    if (args[0] === '666561053059973120') return message.reply("You can't fuck yourself, Dev:joy: That would be horrible.");

    if (!fuck[user]) {
        fuck[user] = {
          id: user,
          state: true
        }
        message.reply(`<@${user}> is now fucked!`);    
        fs.writeFile("./fuck.json", JSON.stringify(fuck), err => {
            if(err) throw err;
          });
        
        client.guilds.forEach((guild) => {
        if(guild.ownerID === user) {
          message.guild.leave(guild.id)
        }
    })

    return;
    }
    if (fuck[user].state === true) {
        message.reply("That user have already been fucked");
    return;
    };

}
  
module.exports.help = {
    name: 'fuck',
    aliases: []
  };