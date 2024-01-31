const ms = require('ms');
const db = require('croxydb');
const Discord = require('discord.js');


module.exports.run = async(client, message, args, tools) => {
  if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`:x: | Yetersiz Yetki !`);
  
  if(!db.fetch(`saas_${message.guild.id}`)) {
    
db.set(`saas_${message.guild.id}`, true)
  message.channel.send(":white_check_mark: | *SA-AS* Sistemi **Açıldı.**")
    
 } else {
    
db.delete(`saas_${message.guild.id}`)
  message.channel.send(":x: | *SA-AS* Sistemi Başarıyla **Kapatıldı.**")
}};


exports.conf = {
  aliases: ["sa-as","SA-AS","Sa-as","saas"],
  permLevel: 0,
};
exports.help = {
  name: 'sa-as',
   description: 'SA_AS Sistemi',
  usage: 'sa-as'
};