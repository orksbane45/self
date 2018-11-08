const Discord = require('discord.js');
exports.run = (client, message, args) => {

message.delete()

    let embed = new Discord.RichEmbed()

    .setColor('RANDOM')
    .setDescription(args.join(" "))

    message.channel.send(embed)

    
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 4
    };

    exports.help = {
      name: 'embed',
      description: 'Transforme votre message en embed',
      usage: 'embed <message>',
      aliase: ['Aucun aliase n\'est disponible pour cette commandes.']
}
