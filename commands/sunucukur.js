const Discord = require('discord.js');
const data = require('quick.db');


exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('<a:HylerGold:1002362923001323700> **Sunucu Kurma Sistem;**')
.setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512')
.setFooter(`Ping: ${client.ws.ping.toFixed(0)}`, client.user.avatarURL({dynamic: true}))
.setDescription(`\`\`\`Rollerin Hepsini Silmesini İstiyorsan @Hyler'in Yetkisini En Üste Taşı.\`\`\`
${message.author} **Dostum Sunucu Kurulacak Ama Onaylaman lazım!** \`\`Onaylıyor Musun ?\`\`

**NOT :**  \`\`Tüm Kanallar Ve Roller Silinecek Buna Eminmisin ?\`\` `)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());

message.guild.roles.create({ data: { name: '🌐 LORD' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#ffffff');
});
message.guild.roles.create({ data: { name: '🔱 Yönetim' }, reason: 'ayn' }).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'KICK_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff0000');
});
message.guild.roles.create({ data: { name: '💠 Moderator' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#42991a');
});
message.guild.roles.create({ data: { name: '🌀 Admin' }, reason: 'ayn' }).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#d19e23');
});

message.guild.roles.create({ data: { name: '🔰 Yetkili' }, reason: 'ayn' }).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_MESSAGES']);
role.setColor('#0b004b');
});

message.guild.roles.create({ data: { name: '_____________________' }, reason: 'ayn' }).then(s => s.setColor('#2e0600'))

message.guild.roles.create({ data: { name: '🔘' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
message.guild.roles.create({ data: { name: '🔴' }, reason: 'ayn' }).then(s => s.setColor('#ff3939'))
message.guild.roles.create({ data: { name: '🟠' }, reason: 'ayn' }).then(s => s.setColor('#ff5f39'))
message.guild.roles.create({ data: { name: '🟢' }, reason: 'ayn' }).then(s => s.setColor('#6bff39'))

message.guild.roles.create({ data: { name: '_____________________' }, reason: 'ayn' }).then(s => s.setColor('#2e0600'))

message.guild.roles.create({ data: { name: '🎥 Youtuber' }, reason: 'ayn' }).then(s => s.setColor('#d32727'))
message.guild.roles.create({ data: { name: '💎 V.I.P' }, reason: 'ayn' }).then(s => s.setColor('#001a41'))
message.guild.roles.create({ data: { name: '🎨 Tasarımcı' }, reason: 'ayn' }).then(s => s.setColor('#ffe47e'))
message.guild.roles.create({ data: { name: '✏️ Çizimci' }, reason: 'ayn' }).then(s => s.setColor('#ffe47e'))

message.guild.roles.create({ data: { name: '_____________________' }, reason: 'ayn' }).then(s => s.setColor('#2e0600'))

message.guild.roles.create({ data: { name: '💗 Beni Sevenler' }, reason: 'ayn' }).then(s => s.setColor('#fc2f51'))
message.guild.roles.create({ data: { name: '👥 Üyeler' }, reason: 'ayn' }).then(s => s.setColor('#181818'))
message.guild.roles.create({ data: { name: '📮 Botlar' }, reason: 'ayn' }).then(s => s.setColor('#2ffcfc'))

message.guild.channels.create('๑▬▬▬▬❙ Kayıt Ol ❙▬▬▬▬๑', {type: 'category'}).then(parent => {
message.guild.channels.create('┃kayıt-olmak-için-bilgi', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('┃kayıt-ol', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('๑▬▬▬▬▬❙ Önemli ❙▬▬▬▬▬๑', {type: 'category'}).then(parent => {
message.guild.channels.create('┃kurallar', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('┃duyuru', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('┃rol-bilgi', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('┃booster-bilgi', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('┃booster', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('┃çekiliş', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('๑▬▬▬▬▬❙ Text ❙▬▬▬▬▬๑', {type: 'category'}).then(parent => {
message.guild.channels.create('┃chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('┃photo-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('┃bot-komut', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('┃destek', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('┃owo', {type: 'text'}).then(c => c.setParent(parent.id));
});


message.guild.channels.create('๑▬▬▬▬▬❙ Oyun ❙▬▬▬▬▬๑', {type: 'category'}).then(parent => {
message.guild.channels.create('┃oyuncu-arama-odası', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('┃Lol', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('┃Minecraft', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('┃Roblox', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('┃Pubg', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('┃Fortnite', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('┃Assetto Corsa', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('┃Gta 5', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});
});

no.on('collect', async reaction => {
resulter.delete();
});

})


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sunucukur", "şablon-kur", "şablonkur"],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kur'
};