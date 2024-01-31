const {PermissionsBitField, EmbedBuilder, ButtonStyle, Client, GatewayIntentBits, ChannelType, Partials, ActionRowBuilder, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder } = require("discord.js");
const config = require("./config.js");
const db = require("croxydb")
const client = new Client({
  partials: [
    Partials.Message, 
    Partials.Channel, 
    Partials.GuildMember, 
    Partials.Reaction, 
    Partials.GuildScheduledEvent,
    Partials.User, 
    Partials.ThreadMember, 
  ],
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMembers, 
    GatewayIntentBits.GuildBans, 
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks, 
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates, 
    GatewayIntentBits.GuildPresences, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions, 
    GatewayIntentBits.GuildMessageTyping, 
    GatewayIntentBits.DirectMessages, 
    GatewayIntentBits.DirectMessageReactions, 
    GatewayIntentBits.DirectMessageTyping, 
    GatewayIntentBits.MessageContent, 
  ],
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

/////SA-AS/////
client.on("messageCreate", (message) => {
  let saas = db.fetch(`saas_${message.guild.id}`);
  if (!saas) return;

  if (saas) {
    let selaamlar = message.content.toLowerCase();
    if (
      selaamlar === "sa" ||
      selaamlar === "slm" ||
      selaamlar === "sea" ||
      selaamlar === " selamünaleyküm" ||
      selaamlar === "Selamün Aleyküm" ||
      selaamlar === "selam"
    ) {
      message.channel.send(
        `<@${message.author.id}> Aleykümselam Kardeşim,Hoşgeldin ☺️`
      );
    }
  }
});

//////AFK-OLMA////
client.on("messageCreate", async message => {
  const db = require("croxydb");

  if (await db.get(`afk_${message.author.id}`)) {
   
    db.delete(`afk_${message.author.id}`);

    message.channel.send("Artık Afk Değilsiniz");
  }

  var kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return;
  var sebep = await db.get(`afk_${kullanıcı.id}`);

  if (sebep) {
    message.reply("Etiketlediyiniz Kullanıcı Şuanda Afk");
  }
});


/////DESTEK-TALEBİ////
const modal = new ModalBuilder()
.setCustomId('form')
.setTitle('DeatlyWing - Destek Sistemi')
  const a1 = new TextInputBuilder()
  .setCustomId('sebep')
  .setLabel('Destek Açma Sebebiniz?')
  .setStyle(TextInputStyle.Paragraph) 
  .setMinLength(2)
  .setPlaceholder('Destek Oluşturma Sebebiniz Nedir?')
  .setRequired(true)
  const row = new ActionRowBuilder().addComponents(a1);
  
  modal.addComponents(row);
client.on('interactionCreate', async (interaction) => {

	if(interaction.customId === "ticket"){
    await interaction.showModal(modal);
	}
})  

const mod = new ModalBuilder()
.setCustomId('eklemenu')
.setTitle('DeatlyWing - Destek Sistemi')
  const e = new TextInputBuilder()
  .setCustomId('uyeid')
  .setLabel('Kullanıcı ID')
  .setStyle(TextInputStyle.Paragraph) 
  .setMinLength(10)
  .setPlaceholder('Eklemek istediğiniz kullanıcı ID girin.')
  .setRequired(true)
  const row2 = new ActionRowBuilder().addComponents(e);
  
  mod.addComponents(row2);
client.on('interactionCreate', async (interaction) => {

	if(interaction.customId === "ekle"){
    await interaction.showModal(mod);
	}
})  

const mod2 = new ModalBuilder()
.setCustomId('eklemenu2')
.setTitle('DeatlyWing - Destek Sistemi')
  const a = new TextInputBuilder()
  .setCustomId('cikarid')
  .setLabel('Kullanıcı ID')
  .setStyle(TextInputStyle.Paragraph) 
  .setMinLength(10)
  .setPlaceholder('Çıkarmak istediğiniz kullanıcı ID girin.')
  .setRequired(true)
  const row3 = new ActionRowBuilder().addComponents(a);
  
  mod2.addComponents(row3);
client.on('interactionCreate', async (interaction) => {

	if(interaction.customId === "çıkar"){
    await interaction.showModal(mod2);
	}
})  
client.on('interactionCreate', async interaction => {
  if (interaction.type !== InteractionType.ModalSubmit) return;
  if (interaction.customId === 'form') {
    const sebep = interaction.fields.getTextInputValue('sebep')
  
const row = new ActionRowBuilder()
.addComponents( 
  new SelectMenuBuilder()
  .setCustomId('del')
.setPlaceholder('Bilet Menüsü!')
.addOptions([
{
label: 'Bileti Sil',
description: 'Kanalı silersin!',
emoji: "1081518903827628153",
value: 'delete',
},
{
label: "Panel",
description: "Üye Ekleme Çıkarma Menüsü.",
emoji: "1081518905576661032",
value: "panel"

}
])
);

  let data3 =  db.get("destek"+ interaction.guild.id)
  let roleStaff = interaction.guild.roles.cache.get(data3.rolID)
  let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
              if (DejaUnChannel) return interaction.reply({content: 'Sunucuda zaten açık bir biletiniz var.', ephemeral: true})
              interaction.guild.channels.create({
              name: `ticket-${interaction.user.username}`,
                type: ChannelType.GuildText,
        
                permissionOverwrites: [
                  {   
                      id: interaction.guild.id,
                      deny: [PermissionsBitField.Flags.ViewChannel]
                  },
                  {
                      id: interaction.user.id,
                      allow: [PermissionsBitField.Flags.ViewChannel]
                  },
                  {
                      id: roleStaff,
                      allow: [PermissionsBitField.Flags.ViewChannel]
                  }
              ]
            })
            
                  
                  .then((c)=>{
                 
                      const i1 = new EmbedBuilder()
                      .setTitle('DeatlyWing - Destek Sistemi')
                      .setDescription(`Kullanıcı Destek Talebini **${sebep}** Sebebiyle Oluşturdu!\n\nDestek Oluşturan: ${interaction.user}`)
                      .setColor(0x0099ff)
                      c.send({embeds: [i1], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                      interaction.reply({content: `Biletiniz başarıyla açıldı. <#${c.id}>`, ephemeral: true})
                  })
          
          }
        })
        client.on('interactionCreate', async interaction => {
          if (!interaction.isSelectMenu()) return;
          if(interaction.customId === "del") {
            if (interaction.values[0] == "panel") {
              await interaction.deferUpdate()
const row2 = new ActionRowBuilder()
.addComponents(
new ButtonBuilder()
.setLabel("Ekle")
.setStyle(ButtonStyle.Success)
.setCustomId("ekle"),
new ButtonBuilder()
.setLabel("Çıkar")
.setStyle(ButtonStyle.Danger)
.setCustomId("çıkar"),
new ButtonBuilder()
.setLabel("Sil")
.setStyle(ButtonStyle.Secondary)
.setCustomId("sil")
)
const embed = new EmbedBuilder()
.setTitle("DeatlyWing - Kullanıcı Paneli!")
.setDescription("Aşağıdaki butonlardan üye ekleyebilir veya çıkarabilirsin!")
.setColor(0x0099ff)
let message = await interaction.channel.messages.fetch(interaction.message.id)
await message.edit({embeds: [embed], components: [row2]})
          }
        }
        })
        client.on('interactionCreate', async interaction => {
          if (interaction.type !== InteractionType.ModalSubmit) return;
          if (interaction.customId === 'eklemenu') {
            const id = interaction.fields.getTextInputValue('uyeid')
            const channel = interaction.channel
                channel.permissionOverwrites.create(
                  id, {ViewChannel: true}
                  
                  )
                  interaction.reply({content: `<@${id}> Adlı Kullanıcı Başarıyla Destek Talebine Eklendi!`})
                } else {
                
          }
        })
        client.on('interactionCreate', async interaction => {
          if (interaction.type !== InteractionType.ModalSubmit) return;
          if (interaction.customId === 'eklemenu2') {
            const id = interaction.fields.getTextInputValue('cikarid')
            const channel = interaction.channel
                channel.permissionOverwrites.create(
                  id, {ViewChannel: false}
                  
                  )
                  interaction.reply({content: `<@${id}> Adlı Kullanıcı Başarıyla Destek Talebinden Atıldı!`})
                } else {
               
          }
        })
        client.on('interactionCreate', async interaction => {
        if (!interaction.isSelectMenu()) return;
        if(interaction.customId === "del") {
          if (interaction.values[0] == "delete") {
            let log = db.fetch(`log_${interaction.guild.id}`)
              const channel = interaction.channel
              channel.delete();
              client.channels.cache.get(log).send(`<@${interaction.user.id}> Adlı Kullanıcı **${interaction.channel.name}** Adlı Desteği Sildi!`)
            
          }
        }
        })
        client.on('interactionCreate', async interaction => {
          if (!interaction.isButton()) return;
          if(interaction.customId === "sil") {
              let log = db.fetch(`log_${interaction.guild.id}`)
                const channel = interaction.channel
                channel.delete();
                client.channels.cache.get(log).send(`<@${interaction.user.id}> Adlı Kullanıcı **${interaction.channel.name}** Adlı Desteği Sildi!`)
              
            
          }
          })



///////DOSYA-ENGEL////
client.on("messageCreate", async (message) => {
  let kanal = db.fetch(`dosyaengel_${message.channel.id}`) 
  let log = db.fetch(`log_${message.guild.id}`) 
 
  if (message.channel.id === kanal) {
    if (message.attachments.size >= 1) {
      message.delete();
      message.channel.send("Bu kanalda dosya engel sistemi etkin!")
      client.channels.cache.get(log).send("<@"+message.author+">"+ " Adlı Kullanıcı "+ "<#"+kanal+">"+ " Kanalında Dosya Atmaya Çalıştı!")
    }
  }
});

//////ETİKET-ENGEL/////
client.on("messageCreate", async msg => { 
  const yasak = db.fetch(`etiketengel_${msg.guild.id}`)
  const kelime = ["<@"+yasak+">"]; 
  if (kelime.some(some => msg.content.includes(some))) {
    msg.delete()
  msg.channel.send("Bu kullanıcıyı etiketlemek bu sunucu yasaklanmış!")
  let log = db.fetch(`log_${msg.guild.id}`) 
  client.channels.cache.get(log).send(`<@${msg.author.id}> Adlı Kullanıcı ${yasak} IDli Kullanıcısını Etiketlemeye Çalıştı!`)
 
  }}) 

//////EVERYONE-ENGEL////
client.on('messageCreate', msg => {
  const filtre = db.fetch(`everengel_${msg.guild.id}`)
     if (filtre) {
         const etiket = ["@everyone", "@here",];
         let kelimeler = msg.content.split(' ');
         kelimeler.forEach(kelime=> {
          if(etiket.some(küfür => küfür === kelime))  {
                   msg.delete();  
                   let log = db.fetch(`log_${msg.guild.id}`) 
  client.channels.cache.get(log).send(`${msg.author.tag} Adlı Kullanıcı everyone atmaya çalıştı`)
                       return msg.channel.send('Bu Sunucuda ever engel açık!').then(msg => console.log());
                   
                      }
                    })
                }
               }) 
     
               
 /////KÜFÜR-ENGEL/////
 client.on('messageCreate', msg => {
  const filtre = db.fetch(`küfürengel_${msg.guild.id}`)
     if (filtre) {
         const kufurler = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq",];
         let kelimeler = msg.content.split(' ');
         kelimeler.forEach(kelime=> {
          if(kufurler.some(küfür => küfür === kelime))  {
                   msg.delete();  
                   let log = db.fetch(`log_${msg.guild.id}`) 
                   client.channels.cache.get(log).send(`${msg.author.tag} Adlı Kullanıcı Küfür Etmeye Çalıştı!`)
                       return msg.channel.send('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => console.log());
                   
                      }
                    })
                }
               }) 
client.on("messageUpdate", (oldMessage, newMessage, msg) => {


const filtre = db.fetch(`küfürengel_${newMessage.guild.id}`)
if (filtre) {
const kufurler = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq",];
let kelimeler = newMessage.content.split(' ');
kelimeler.forEach(kelime=> {
if(kufurler.some(küfür => küfür === kelime))  {


newMessage.delete();
let log = db.fetch(`log_${msg.guild.id}`) 
client.channels.cache.get(log).send(`${msg.author.tag} Adlı Kullanıcı mesajını düzenleyerek küfür çalıştı`) 
         return newMessage.channel.send('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => console.log());
        

}
})
}
})


////////REKLAM-ENGEL/////
client.on("messageCreate", msg => {
  let i = db.fetch(`reklam_${msg.guild.id}`)
     if (i == 'acik') {
         const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
         if (reklam.some(word => msg.content.includes(word))) {
           
                   msg.delete();
                   let log = db.fetch(`log_${msg.guild.id}`) 
                   client.channels.cache.get(log).send(`${msg.author.tag} Adlı Kullanıcı Reklam Yapmaya Çalıştı`)
                     return msg.channel.send('**Bu Sunucuda** `Reklam Engelle`** Aktif Reklam Yapmana İzin Vermem İzin Vermem ? !**').then(msg => console.log);
     

           }
         }
     })

    
//////ROL-ETİKET-ENGEL//////
client.on("messageCreate", async message => { 
  const ananınamı = db.fetch(`roletiket_${message.guild.id}`)
  if (message.content.toLowerCase() === `<@&${ananınamı}>` || message.content.toLowerCase() === `<@&${ananınamı}>` || message.content.toLowerCase() === `<@&${ananınamı}>`) {
  message.delete()
  message.channel.send(`${message.author}, bu rolü etiketleyemezsin.`)
  let log = db.fetch(`log_${message.guild.id}`) 
  client.channels.cache.get(log).send(`${message.author.tag} Adlı Kullanıcı ${ananınamı} IDli Rolü Etiketlemeye Çalıştı!`)
  }

})


///////OTO-ROL/////
client.on('guildMemberAdd', async member => {
  
  let otorol = db.fetch(`otorol_${member.guild.id}`)
  if(!otorol) return;
  
  client.channels.cache.get(otorol.kanal).send(":white_check_mark: **"+member.user.tag+"** Kullanıcı Katıldı! Gerekli Rolleri Verdim. ")
  member.roles.add(otorol.rol).catch(() => {})
  
});


////////OTO-TAG/////
client.on("guildMemberAdd", async member => {
  let ototag = db.get(`ototag_${member.guild.id}`);;
  if (ototag) return member.setNickname(`${ototag} ${member.user.username}`)
})

///////OTO-CEVAP////
client.on("messageCreate", async message => {
  
  const cmd = db.fetch(`otocevap_${message.content}`)
  if(!cmd) return;
  
  if(cmd) {
    message.reply({ content: `${cmd.answer}` })
  }

});

/////BOTU-EKLEME-MESAJI////////////
client.on('guildCreate', guild => {
  guild.owner.send(new Discord.MessageEmbed()
  .setTitle("Beni Eklediğin İçin Teşekkürler")
  .setColor("BLACK")
  .setDescription(`
  Komutlara Bakmak İçin \`d!yardım\`
  Destek İçin Bota OY Verir Misin: \`d!oy\``))
  
});



/////REGİSTER-KAYIT SİSTEMİ/////

client.on("guildMemberAdd", member => {
  const kanal = db.get(`hgbb_${member.guild.id}`)
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
  if(!kanal) return;
  let kayıtsız = db.fetch(`kayıtsız_${member.guild.id}`)
        member.guild.members.cache.get(member.id).roles.add(kayıtsız)
  member.guild.channels.cache.get(kanal).send({content: `:inbox_tray: | Kullanıcı: ${member}\n\nSunucudaki Üye Sayısı: **${member.guild.memberCount}**\n\nHesap Oluşturulma Tarihi: \`${moment(member.createdAt).format('D MMMM YYYY')}\``})
})





client.login(config.Bot.Token)


