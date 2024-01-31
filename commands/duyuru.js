const Discord = require("discord.js");
exports.run = async (client, message, args) => {

if (!message.member.permissions.has("0x0000000000000020")) return message.reply(":x: | Yetersiz Yetki !");
let neran = message.mentions.channels.first();
if (!neran) return message.reply("**:x: | Bir Kanal Etiketlemen Gerek!**");


let neranaçıklama = args.slice(1).join(" ");
if (!neranaçıklama) return message.reply("**:warning: | Ne Duyurusu Yapılacak Yazman Gerek!**");


let neranembed = new Discord.EmbedBuilder()
.setTitle("DeatlyWing")
.setColor(Discord.Colors.Blue)
.setDescription(`${neranaçıklama}`)
.setTimestamp()
.setFooter({ text:'DeatlyWing', iconURL: client.user.displayAvatarURL({dynamic: true})})
.setThumbnail(message.guild.iconURL())

neran.send({embeds: [neranembed]})



}

exports.conf = {
aliases: []
}

exports.help = {
name: "embed"
}