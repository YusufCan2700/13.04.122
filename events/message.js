const { EmbedBuilder } = require("discord.js");
var config = require("../config.js");
const client = require("../deatlywing.js");

client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.Bot.Prefix)) return;

  let command = message.content.split(" ")[0].slice(config.Bot.Prefix.length);
  let params = message.content.split(" ").slice(1);

  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    let member = message.author.id
const cdb = require("croxydb");
let karaliste = cdb.get(`karaliste_${member}`)
if(message.author.id === karaliste) {
if(karaliste) return message.channel.send(`Kara Listedesin Komutları Kullanamzsın!`)
}
    cmd.run(client, message, params);
  }

});