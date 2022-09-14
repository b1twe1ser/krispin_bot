// Require the necessary discord.js classe
// const puppeteer = require("puppeteer");
const Discord = require("discord.js");
const math = require("mathjs");
const client = new Discord.Client();
require("dotenv").config();

// Create a new client instance

// When the client is ready, run this code (only once)
client.login(process.env.BotToken);

client.on("ready", () => {
  console.log("Ready!");
});

client.on("message", gotMessage);

function gotMessage(msg) {
  message_parse_math(msg);
  if (msg.content === "Krispin") {
    msg.reply("🦀");

    // let answer = math.evaluate(msg.content);
    // msg.reply(answer);
    // let res = scrape(msg.content);
    //
    // msg.reply(res[0], res[1]);
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

// async function scrape(content) {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto("https://play.rust-lang.org/");
//
//   const elementHandle = await page.$(".ace_content");
//   await elementHandle.click();
//   await elementHandle.focus();
//   // click three times to select all
//   await elementHandle.click({ clickCount: 4 });
//   await elementHandle.press("Backspace");
//   await elementHandle.click();
//   await elementHandle.focus();
//   // click three times to select all
//   await elementHandle.click({ clickCount: 4 });
//   await elementHandle.press("Backspace");
//   await elementHandle.click();
//   await elementHandle.focus();
//   // click three times to select all
//   await elementHandle.click({ clickCount: 4 });
//   await elementHandle.press("Backspace");
//   await elementHandle.click();
//   await elementHandle.focus();
//   // click three times to select all
//   await elementHandle.click({ clickCount: 4 });
//   await elementHandle.press("Backspace");
//   await elementHandle.click();
//   await elementHandle.focus();
//   // click three times to select all
//   await elementHandle.click({ clickCount: 4 });
//   await elementHandle.press("Backspace");
//   await elementHandle.click();
//   await elementHandle.focus();
//   // click three times to select all
//   await elementHandle.click({ clickCount: 4 });
//   await elementHandle.press("Backspace");
//   await elementHandle.click();
//   await elementHandle.focus();
//   // click three times to select all
//   await elementHandle.click({ clickCount: 4 });
//   await elementHandle.press("Backspace");
//   await elementHandle.click();
//   await elementHandle.focus();
//   await elementHandle.type(content);
//
//   await page.click(
//     ".jDtgRDRhly512xl2nuBb.cB6xmdtmCri5h1xUl0Og.PejGgtkj000mm2SKywBY"
//   );
//
//   await page.waitForSelector(".KY1sicBGfwv3aWkbHCS1");
//   let element = await page.$(".KY1sicBGfwv3aWkbHCS1");
//   let sdt_err = await page.evaluate((el) => el.textContent, element);
//
//   await page.waitForSelector(".KY1sicBGfwv3aWkbHCS1");
//   let eleem = await page.$(".KY1sicBGfwv3aWkbHCS1");
//   let std_out = await page.evaluate((el) => el.textContent, eleem);
//
//   return [sdt_err, std_out];
// }
