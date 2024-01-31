const { EmbedBuilder } = require("discord.js");
const moment = require("moment");
moment.locale("TR");

exports.run = (client, message, args) => {
  const member = message.mentions.members.first() || message.member;
  const status = {
    online: ":green_circle: Çevrimiçi",
    idle: ":yellow_circle: Klavyeden Uzakta",
    dnd: ":red_circle: Rahatsız Etmeyin",
    offline: ":black_circle: Çevrimdışı",
  };
  const embed = new EmbedBuilder()
    .setTitle("Kullanıcı Bilgi")
    .setDescription(
      `**Kullanıcı Adı :** \n${member.user.username}\n\n**Kullanıcı ID :** \n${
        member.id
      }\n\n**Durumun :** \n${
        status[member.presence.status]
      }\n\n**Hesap Oluşturulma Tarihi :** \n${moment
        .utc(member.user.createdAt)
        .format("LLLL")}\n\n**Sunucuya Katılım Tarihi :** \n${moment
        .utc(member.joinedAt)
        .format("LLLL")}\n\n**Sunucudaki Rollerin :**\n ${member.roles.cache.map((role) =>
        role.toString()
      )}`
    )
    .setColor("#ff0000");

  message.channel.send({ embeds: [embed] });
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kb","KB","kullanıcıbilgi","Kullanıcıbilgi","Kullanıcı-bilgi"],
  permLevel: 0,
};

exports.help = {
  name: "kullanıcı-bilgi",
  description: "kullanıcı bilgi verir",
  usage: "kb",
};