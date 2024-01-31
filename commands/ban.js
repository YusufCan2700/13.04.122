const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
exports.run = async (client, message, args) => {

  if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator))
 return message.channel.send(":x: | Yetersiz Yetki !");

  let user = message.mentions.users.first();
  let sebep = args.slice(1).join(" ") || `Belirtilmemiş!`;
  let yasaklayankisi = `${message.author.tag} - ${message.author.id}`;
  
  if (!user) return message.channel.send(`Sunucudan Yasaklamak İstediğin Kişiyi Etiketle!`);

  if (user == message.author) return message.channel.send(`Kendini Yasaklayamassın! 😁`); 
 
   const embed2 = new EmbedBuilder()
   .setTitle("Sunucudan Yasaklama!")
    .setDescription(`**Yasaklayan:** ${message.author.tag} \n**Yasaklanan:** ${user.tag}\n**Yasaklama Sebebi:** ${sebep}`)
    .setImage("https://www.misternoob.com/wp-content/uploads/2020/05/banland%C4%B1n-300x225.jpg");

  
  const userembed = new EmbedBuilder()
    .setColor("#00daff")
    .setTitle("**YASAKLANDIN**")
    .setDescription(`**${message.guild.name}** Sunucusundan **${sebep}** Sebebiyle Yasaklandın!`)
    .setImage("https://www.misternoob.com/wp-content/uploads/2020/05/banland%C4%B1n-300x225.jpg");
   
 
  const neran = message.guild.members.cache.get(user.id)
  neran.send({embeds: [userembed]})
  
    neran.ban(neran, { reason: `${sebep} sebebinden ${yasaklayankisi} tarafından yasaklandı`})
    .catch(error => message.reply("Üyeyi Yasaklamak için Yetkim Yetmiyor 😥"));

  message.channel.send({embeds: [embed2]})

 
};
exports.conf = {
    aliases: ["yasakla"]
};

exports.help = {
    name: "ban"
};