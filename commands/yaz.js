const Discord = require("discord.js");

module.exports.run = async(client, message, args, tools) => {
  if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator))
return message.reply
(`:x: | Yetersiz Yetki !`);
    
    let mesaj = args.slice(0).join(" ");

  if (mesaj.length < 1)    
return message.reply("**Yazmam için herhangi bir şey yazmalısın !**");

       message.delete();
       message.channel.send(mesaj)
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yaz","yazdır","konuştur","konuş"],
  permLevel: 3,
};

exports.help = {
  name: "yaz",
  description: "İstediğiniz şeyi bota yazdırır.",
  usage: "yaz",
};