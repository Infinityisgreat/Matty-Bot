const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs')
const prefix = 'm.'


bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.afk = new Map();



const ttt = require("discord.js-tictactoe")
const embed_color = "#ff00aa"
const start_cmd = "ttt"
ttt.run(bot, prefix, embed_color, start_cmd)

fs.readdir('./commands', (err, file) => {
    if(err) console.log(err);

    let jsfiles = file.filter(f => f.split(".").pop() === "js");




    
    if(jsfiles.length <= 0) {
        return console.log('No Command Is Found!');
    }

    jsfiles.forEach((f) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded`);
        bot.commands.set(props.help.name, props);


        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name)
        })
    })
})

bot.on('ready', () => {
    console.log('Hi')
    bot.user.setStatus('dnd') 
    bot.user.setPresence({
        activity: {
            name: 'Matty | m.help',
            type: 'WATCHING',
        }
    })
});

bot.on('message', message => {
  let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
    if(message.content === prefix + 'hi') {
        message.channel.send('Hi!!!')
    }




    if(message.content === prefix + 'vote') {
    const fetch = require('node-fetch');
          fetch(`https://voidbots.net/api/auth/voted/750959870953390090`, { headers: { 'voter': `${message.author.id}` } }).then(res => res.json()).then(data => {
  if(data.voted) {
    return message.channel.send("You Voted!"), console.log('User has voted!');
  }else{
      message.channel.send("https://voidbots.net/bot/750959870953390090/vote")
  }
}).catch(console.error);
    };

    if(!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let command;
    if(bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    }  else if(bot.aliases.has(cmd)) {
        command = bot.commands.get(bot.aliases.get(cmd));
    }

    try {
        command.run(bot, message, args);
    } catch(e) {
        return;
    }



    if (!blacklist[message.author.id]) {
        blacklist[message.author.id] = {state: false}
      };

      if (command, blacklist[message.author.id].state === true) return message.channel.send("You're Blacklisted You're Unable To Use Commands!");

    if(message.content.includes(message.mentions.users.first())) {
        let mentioned = bot.afk.get(message.mentions.users.first().id);
        if(mentioned) {
            message.channel.send(`**${mentioned.usertag}** is currently afk. Reason: ${mentioned.reason}`);
        }
    }
    let afkcheck = bot.afk.get(message.author.id);
    if (afkcheck) return [bot.afk.delete(message.author.id), message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000))];
});

bot.login(process.env.token);