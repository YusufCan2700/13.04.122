const Discord = require('discord.js')
const db = require("croxydb")

exports.run = async (client ,message, args) =>{
    if(!message.member.permissions.has('BAN_MEMBERS')) return message.reply(":x: | Yetersiz Yetki !")
    let log = db.fetch(`log_${message.guild.id}`) 
    if (!log) return message.reply("Log kanalı ayarlanmamış!")
message.reply("Everyone Here Engel başarıyla ayarlandı")
db.set(`everengel_${message.guild.id}`, true)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: "everyone-engel",
 description: '',
 usage: ''
};