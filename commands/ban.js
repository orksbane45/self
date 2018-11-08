const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
  
     message.delete();
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("vous devez mentionner quelqu'un pour le ban.").catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply("Je ne peut pas ban cet utilisateur.");
  message.guild.ban(user, 2);

  

      message.channel.send(`${user.username} a était ban !`)
   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'ban',
  description: 'Ban un utilisateur.',
  usage: 'ban [mention]',
  aliase: ['aucun']
};
