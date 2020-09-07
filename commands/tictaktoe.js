const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (client, message, args) => {
    const ttt = require("discord.js-tictactoe")
    const embed_color = "#ff00aa"
    const start_cmd = "ttt"
    ttt.run(client, embed_color, start_cmd)
    
}
  
module.exports.help = {
    name: 'ttt',
    aliases: []
  };