const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to pat them :3");
    if (message.mentions.users.first().id === client.user.id) return message.channel.send('<a:yayyy:497742636439044096>');
    if (message.mentions.users.first().id === message.author.id) return message.channel.send('I see you\'re lonely,.. ***headpats you***');
    const { body } = await superagent
    .get("https://nekos.life/api/pat");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO ${message.mentions.users.first().username}, you got a head pat from ${message.author.username}!`)
    .setImage(body.url) 
    .setFooter(`© Matty Made By Infinity#2670`);
    message.channel.send({embed})
};

  
  module.exports.help = {
    name: 'pat',
    aliases: []
  };