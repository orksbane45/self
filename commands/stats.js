const Discord = require('discord.js');
exports.run = function(client, message, args) {

  var distance = client.uptime;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  uptime = days + "d" + hours + "h" + minutes + "m" + seconds + "s";


  const msg = new Discord.RichEmbed()
    .setThumbnail(client.avatarURL)
    .addField('Server ',`${client.guilds.size}`, true)
    .addField('Node', process.version)
    .addField('Discord.js', Discord.version)
    .addField('Uptime', uptime , true)
    .addField('Memory ', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
    .setTimestamp()
    message.channel.send(msg)

}

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'stats',
    description: 'Affiche les stats du compte.',
    usage: 'stats',
    aliase: ['soon']
  }
