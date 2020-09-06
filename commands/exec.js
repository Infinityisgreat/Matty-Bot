const childProcess = require('child_process');
module.exports.run = (client, message, args, data, errors) => {
  if (message.author.id !== "666561053059973120") return message.channel.send('You scrub, what made you think you\'d be able to do that??');
    childProcess.exec(args.join(' '), {},
        (err, stdout, stderr) => {
            if (err) return message.channel.send('```' + err.message + '```');
            message.channel.send('```' + stdout + '```');
        });
}


module.exports.help = {
  name: 'exec',
  aliases: []
};