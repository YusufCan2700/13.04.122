const Discord = require("discord.js");
const config = require("../config.js")

exports.run = async (client, message, args) => {
    const topgg = config.topgg
    const davet = config.botdavet
    const destek = config.desteksunucusu
    const website = config.website
    const value = args[0]
    
  const ping = new Discord.EmbedBuilder()
.setTitle(`KULLANICI`)
.setDescription(`\n **Afk** │ Sizi etiketlediğinizde bot otomatik olarak afk nedeninizi yazar.\n **Avatar** │ Etiketlediğiniz kişinin avatarını görüntülersiniz\n **Atatürk** │ Atatürkün fotoğrafını görüntülersiniz.\n **Kullanıcı-Bilgi** │ Etiketlediğiniz kullanıcının bilgilerini gösterir.\n **Not-Al** │ Not alırsınız.\n **Notum** │ Aldığınız notu gösterir.\n **Sunucu-bilgi** │ Sunucunun bilgilerini gösterir.\n\n **DEATLYWİNG BİLGİLENDİRME**\n\n:inbox_tray: │ [Botu Sunucuna Ekle](${davet})\n:pushpin: │ [Destek Sunucum](${destek})\n:globe_with_meridians: │ [Website](${website})\n:envelope: │ [Bota Oy Ver](${topgg})`)
.setColor(Discord.Colors.Blue)
 message.channel.send({ embeds: [ping] })
     }

exports.conf = {
  aliases: []
}

exports.help = {
  name: "yardım-kullanıcı"
}