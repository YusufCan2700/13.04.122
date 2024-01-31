const Discord = require("discord.js");
const db = require("croxydb");

exports.run = async (client, message, args) => {

  if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator))return message.channel.send(":x: | Yetersiz Yetki !");

  let mesaj = args.slice(0).join(" ")
  if (!mesaj) return message.channel.send("Lütfen bir tag gir!");

  message.channel.send(`Tamamlandı`);
  db.set(`ototag_${message.guild.id}`, mesaj);
};

exports.conf = {
  aliases: []
};
exports.help = {
  name: "oto-tag"
};