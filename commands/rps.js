const Discord = require('discord.js')

let rps = ["**:pencil: paper**", "**:moyai: rock**", "**:scissors: scissors**"];
function random() { return `${rps[Math.floor(Math.random() * Math.floor(2))]}!` }
module.exports.run = (client, msg, args) => {
    let choice = args.join(" ").toLowerCase();
    if (choice === '') return msg.reply("Please specify either rock, paper or scissors.");
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") return msg.reply(`Please specify either rock, paper or scissors. ${choice} isn't one of those :P`);
    msg.reply(random());
    msg.reply("bruhhhh")
}


module.exports.help = {
  name: 'rps',
  aliases: []
};