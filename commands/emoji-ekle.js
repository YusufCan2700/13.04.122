const Discord = require('discord.js');

 module.exports.run = async (client, message, args, bot) => {
 if(!message.member.permissions.has("ManageEmojis")) return message.reply(":x: | Yetersiz Yetki !");

   
  let guild = message.guild
  let link = args[0]
  let ad = args[1]
  if (!link) return message.reply(`:x: | **Bir *___link___* yazmalısın.**`).then(msg => { setTimeout(() => { msg.delete() }, 10000); });
  if (!ad) return message.reply(`:x: | **Bir *___isim___* yazmalısın.**`).then(msg => { setTimeout(() => { msg.delete() }, 10000); });
  if(ad.includes("ı")) return message.reply(':x: | Emoji adlarında **ı** kullanamazsın.').then(msg => { setTimeout(() => { msg.delete() }, 10000); });
  if(ad.includes("ş")) return message.reply(':x: | Emoji adlarında **ş** kullanamazsın.').then(msg => { setTimeout(() => { msg.delete() }, 10000); });
  if(ad.includes("ü")) return message.reply(':x: | Emoji adlarında **ü** kullanamazsın.').then(msg => { setTimeout(() => { msg.delete() }, 10000); });

let embed1 = new Discord.EmbedBuilder()
.setDescription(':x: | Yeterli yetkim yok')
.setColor('Red')
if(!message.guild.members.me.permissions.has('ManageEmojisAndStickers')) return message.reply({embeds : [embed1]})

const me2 = new Discord.EmbedBuilder().setDescription(`:x: | Link Veya İsim Hatalı.`).setColor('Red')
guild.emojis.create({ attachment: `${link}`, name: `${ad}` }).then(q => {
  const mes = new Discord.EmbedBuilder().setDescription(`✅ | Emoji Başarıyla Oluşturuldu. ${q}`).setColor('White')
  message.channel.send({embeds : [mes]})
}).catch(error => { 
  console.log(error)
  return message.channel.send({embeds : [me2]})})
  
    
};
exports.conf = {
    aliases: ['emojiekle', 'emoji-ekle'],
  };
  
  exports.help = {
    name: 'emoji',
  
  };