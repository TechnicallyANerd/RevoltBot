const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if(message.author.bot) return;
  if (message.content.includes("revolution")) {
    message.channel.send("`If you are considering revolting against our Admin, I would be very careful. Ze sees all. Unless it's the feminist revolution in which case, go ahead.`");
  }
  if (message.content.includes("revolt")) {
    message.channel.send("`If you are considering revolting against our Admin, I would be very careful. Ze sees all. Unless it's the feminist revolution in which case, go ahead.`");
  }
  
});

client.login(process.env.BOT_TOKEN);
