const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")//Config Dosyanız
exports.run = async (client, message, args) => {
  
   const random = Math.floor(Math.random() * 99) + 1
   
   message.reply(":thinking: Hmm... Şanslı Sayın `"+random+"` Mi?")



  
};
exports.conf = {
  aliases: ["Şanslısayı","şanslısayı","şanslı-sayım","şanslı-sayı"]
};

exports.help = {
  name: "şanslısayım"
};