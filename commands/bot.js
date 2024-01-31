const Discord = require('discord.js');
exports.run = async (client, message, args) => {

    let supports = "https://discord.gg/pG9s9ZFr";
    let website = "https://discord.gg/pG9s9ZFr";

    let link_button = new Discord.ActionRowBuilder().addComponents(
        new Discord.ButtonBuilder()
        .setLabel('Davet Et')
        .setStyle(Discord.ButtonStyle.Link)
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=0&scope=bot%20applications.commands`),
        new Discord.ButtonBuilder()
        .setLabel('Destek Sunucusu')
        .setStyle(Discord.ButtonStyle.Link)
        .setURL(`https://discord.gg/6DWXcS6A5y`),
        new Discord.ButtonBuilder()
        .setLabel('Oyver')
        .setStyle(Discord.ButtonStyle.Link)
        .setURL(`https://top.gg/bot/1080560069604823120/vote`));

const cs = new Discord.EmbedBuilder()
.setColor(Discord.Colors.Blue)
.setTitle(`${client.user.username} Yardım Menüsü`)
.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
.addFields([
  { name: "**Bot Komutları**", value: "`bot-istatistik`\n`uptime`\n`ping`\n`yardım`"},
])
await message.reply({embeds: [cs], components:[link_button]}).catch(async err => {
await message.author.send({embeds: [cs]}).catch(async err => {
return console.log(`yardım komutu hatalı çalışıyor. ${message.guild.name} isimli sunucuda yetkim olmadığı için mesaj atamıyorum.`)
})
})

};

exports.conf = {
aliases: []
};

exports.help = {
name: 'yardım-bot'
};
