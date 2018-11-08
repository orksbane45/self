const Discord = require('discord.js');
exports.run = (client, message) => {
 
 message.delete();
 message.channel.send("ping ?")
 .then(m => {

 let embed = new Discord.RichEmbed()

  .setColor('RANDOM')
  .addField("Votre ping :",`${m.createdTimestamp - message.createdTimestamp} ms.`)
  



 message.channel.send(embed);
 
  
  });
  


  

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'ping',
  description: 'Affiche votre ping.',
  usage: 'ping',
  aliase: ['Aucun aliase n\'est disponible pour cette commandes.']
};
