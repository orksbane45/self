const Discord = require('discord.js');
exports.run = (client, message, args) => {

message.delete()
 if (message.author.id == 302837596600664065) {
    

    message.channel.send(args.join(" "))

    
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'embed',
      description: 'Transforme votre message en embed',
      usage: 'embed <message>',
      aliase: ['Aucun aliase n\'est disponible pour cette commandes.']
}
