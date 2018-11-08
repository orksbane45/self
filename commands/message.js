  const settings = require('../settings.json');
  exports.run = async (client, message) => {
    message.delete();
    message.channel.sendMessage('Chargement du message ...')
    .then(msg => {

  
  if (message.author.id === settings.ownerid) return msg.edit("<@302837596600664065> Quel BG !")
  if (message.author.id === "254370344268201986") return msg.edit(":thinking:")
  if (message.author.id === "318451476521549824") return msg.edit("<:diablopentacle:498525943103619074> INVOCATION DE ISOPOD !")
  if (message.author.id === "278252472068341760") return msg.edit("Bi Te !")
  if (message.author.id === "308674949156175872") return msg.edit("🐢 <@308674949156175872> le roi des tortues !")
  if (message.author.id === "193758355708182529") return msg.edit("<:lag:498938178225438722> **iDrunK.exe** a cessé de fonctionner <:lag:498938178225438722>")
  if (message.author.id === "372401915402911766") return msg.edit("Oh ! Mais vous êtes la célébre princesse Mikumi ! ")
  
/*if (message.author.id === "") return msg.edit("")
  if (message.author.id === "") return msg.edit("")
  if (message.author.id === "") return msg.edit("")
  if (message.author.id === "") return msg.edit("")
  if (message.author.id === "") return msg.edit("")
  if (message.author.id === "") return msg.edit("")
  if (message.author.id === "") return msg.edit("")
  if (message.author.id === "") return msg.edit("")*/
       msg.edit("Tu n'a pas encore de message personalisé contacte <@302837596600664065> pour en avoir un.")    

     

       });                 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'message',
  description: 'Montre votre message personalisé sur le self-bot.',
  usage: 'message',
  aliase: ['Aucun aliase n\'est disponible pour cette commandes.']
};
