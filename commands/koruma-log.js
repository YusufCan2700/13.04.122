const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`:x: | Yetersiz Yetki !`);
    let kanal = message.mentions.channels.first()
    if(!kanal) return message.reply({content: "Bir kanal etiketle!"})
    
    
    
  message.reply("Log kanalı başarıyla ayarlandı")
  
    db.set(`log_${message.guild.id}`, kanal.id)
    
  

};
exports.conf = {
  aliases: ["korumalog"]
};

exports.help = {
  name: "koruma-log"
};