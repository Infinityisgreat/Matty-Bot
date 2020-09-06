
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to cuddle them");
    if (message.mentions.users.first().id == client.user.id && message.author.id !== "242263403001937920") return message.channel.send("Aww! *cuddles you* ")
    if (message.mentions.users.first().id == client.user.id && message.author.id == "242263403001937920") return message.reply(">///< *cuddles dev-san*")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/cuddle");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.author.username} cuddled ${message.mentions.users.first().username} OwO`)
    .setImage(body.url) 
    .setFooter(`© Matty Made By Infintiy#2670`);
    message.channel.send({embed})
};
  
module.exports.help = {
    name: 'cuddle',
    aliases: []
  };