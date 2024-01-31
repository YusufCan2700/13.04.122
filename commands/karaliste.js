const Discord = require('discord.js');
const db = require("croxydb");

exports.run = async (client, message, args) => {

  if (!["885894418190712834"].includes(message.author.id)) {
    return;
  }


  let member = message.mentions.members.first() || client.users.cache.get(args[0]);
  if (!member) return message.channel.send("❌ Bir Üye Etiketlemelisin!");

message.channel.send(`${member} Kara Listeye Alındı Artık Komutları Kullanamıcak!`)
db.set(`karaliste_${member.id}`, member.id)


};
exports.conf = {
    aliases: []
}

exports.help = {
    name: 'karaliste'
}