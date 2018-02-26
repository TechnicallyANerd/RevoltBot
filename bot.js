const Discord = require("discord.js");
const client = new Discord.Client();
const bot_message = "`If you are considering revolting against our Admin, I would be very careful. Ze sees all. Unless it's the feminist revolution in which case, go ahead.`";
const catches = ["revolt", "revolu", "rev0lt", "rev0lu", "r3volt", "r3volu", "r3v0lt", "r3v0lu", "revoit", "revoiu", "revlt", "revo1t", "revo1u", "rev01t", "rev01u", "r3vo1t", "r3vo1u", "r3v01t", "r3v01u"];

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.author.bot) return;
  else {
    var stripped_message = message.content.toLowerCase().replace(/\s[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    catches.forEach(function(word) {
      if (stripped_message.includes(word)) {
        console.log(word);
        message.channel.send(bot_message);
        return;
      }
    });

    if (message.content.toLowerCase().includes("ellie is great")) {
      message.channel.send("`(Just popping back in to agree, yes, Ellie is great)`");
    }
  }
});

client.login(process.env.BOT_TOKEN);
