const Discord = require('discord.js')
const noblox = require('noblox.js')
let rps = ["**:pencil: paper**", "**:moyai: rock**", "**:scissors: scissors**"];
function random() { return `${rps[Math.floor(Math.random() * Math.floor(2))]}!` }
async function startApp () {
  await noblox.setCookie("_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_9CBD9ACF4E6C84336EAD91A2C758084E658E738E3FE508060B4BF54E583905AA7505F58D8DBFB7A14F6373C3851CE0AB4C95BC1550122E84918C3B8875D56E0416857BD05632E01070D5433EAB77E9D7CC998447E8DA51F8249E719183D2F7DC42BC2CD7B4DD2866FD2EB070B9AA333EE37700CD4F6920D74D05235F7B561BE533EA0A473ECE2B4898C54205BC7AA0455E44188D416AB770628D8064E641AD381F0A39BF08CB09BAB1201AF373C3E978172A497258696D74C462AF81A8F7109048F66F0458514E202248DB502B105B5C514573F8DAF6040DB4D0470753362394870815394709F2470610B7F86631C7EF1876E06E9C3F7629AFE39A3D06798D742FDAA9ABDADBB393A0EDFA1D4C2EC2674DEB86200E9A0432931B448D01BA90C443C859CFB71DDBC61A04FCEC098381FF1CEF6D29") 
  let currentUser = await noblox.getCurrentUser()
}
module.exports.run = (client, msg, args) => {
  if (message.member.hasPermission("KICK_MEMBERS")) {
     const def = args.join(" ").toLowerCase();
     startApp()
     noblox.shout(6307818, def)
     msg.channel.send(`Succefully set the new group shout!`)
    }
}


module.exports.help = {
  name: 'shout',
  aliases: []
};