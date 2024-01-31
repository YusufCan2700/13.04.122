const Discord = require("discord.js");
exports.run = async (client, message, args) => {

if (!message.member.permissions.has("0x0000000000000020")) return message.reply(":x: | Yetersiz Yetki !");



let neranaçıklama = args.slice(0).join(" ");
if (!neranaçıklama) return message.reply("**:warning: | Ne Oylaması Yapılacak Yazman Gerek!**");


let neranembed = new Discord.EmbedBuilder()
.setTitle("DeatlyWing - Oylama Sistemi")
.setColor(Discord.Colors.Blue)
.setDescription(`${neranaçıklama}`)
.setTimestamp()
.setFooter({ text:'Neran Code', iconURL: client.user.displayAvatarURL({dynamic: true})})
.setThumbnail(message.guild.iconURL())

message.channel.send({embeds: [neranembed]}).then(neranbest => {
neranbest.react("✅")
neranbest.react("❌")


})



}

exports.conf = {
aliases: ["Oylama","OYLAMA","Oyla","OYLA"]
}

exports.help = {
name: "oylama"
}