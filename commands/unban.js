const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(":x: | Yetersiz Yetki !")
  let user = args[0]
  if (!user) return message.reply("Lütfen bir kullanıcı ID gir!")
  message.reply("Belirtilen ID li Kullanıcının Banını Açdım")
  message.guild.members.unban(user);
}
exports.conf = {
  aliases: []
};

exports.help = {
  name: "unban"
}; 