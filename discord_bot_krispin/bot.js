const Discord = require("discord.js");
const math = require("mathjs");
const client = new Discord.Client();
require("dotenv").config();

client.login(process.env.BotToken);

client.on("ready", () => {
  console.log("Ready!");
});

client.on("message", gotMessage);

function gotMessage(msg) {
  message_parse_math(msg);
  if (msg.content === "Krispin") {
    msg.reply("🦀");
  } else if (msg.content === "&k_h") {
    msg.reply(
      "*Hello there 👋🏻*, my current commands are &k_h for krispin help and &k_m for krispin math. If you wish to get a quick math expression evaluated, you could type something like &k_m: (pi)^2"
    );
  }
}

function message_parse_math(message) {
  let calc_emojis = ["🧮", "🧠", "💭", "💬"];
  let answer_emojis = ["👍", "🍻", "🥂", "🎉", "🍾", "🥳"];
  let message_content = message.content;
  if (message_content.includes("&k_m")) {
    for (let i = 0; i < message_content.length; i++) {
      if (message_content[i] == ":") {
        let equation = message_content.slice(i + 2, message_content.length);

        try {
          let chosen_calc =
            calc_emojis[Math.floor(Math.random() * calc_emojis.length)];
          let chosen_answer =
            answer_emojis[Math.floor(Math.random() * answer_emojis.length)];
          message.reply(`Calculating... ${chosen_calc}`);
          let answer = math.evaluate(equation);
          message.reply(`${answer} ${chosen_answer}`);
        } catch (error) {
          message.reply("Sorry I didnt't understand the equation 😢");
        }
      }
    }
  }
}
