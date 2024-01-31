const {EmbedBuilder, PermissionsBitField} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {

 if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply(`:x: | Yetersiz Yetki !`);
 let rol = message.mentions.roles.first()
 if (!rol) return message.channel.send("Bir rol etiketle!")
  message.reply("Kız rol başarıyla ayarlandı")
  db.set(`kız_${message.guild.id}`, rol.id)


};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "kız-rol"
};

