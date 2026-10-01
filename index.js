const { Telegraf, Markup } = require('telegraf');

// GitHub Secrets থেকে টোকেন নেওয়ার জন্য
const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  console.error("Error: BOT_TOKEN is missing!");
  process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

console.log("Advanced Abuse Report Assistant Bot is starting...");

// বট চালু হলে স্বাগতম বার্তা
bot.start((ctx) => {
  ctx.reply("👋 প্রফেশনাল টেলিগ্রাম রিপোর্ট এসিস্ট্যান্ট বটে স্বাগতম!\n\nআমাকে যেকোনো গ্রুপ লিংক, চ্যানেল লিংক অথবা ইউজারনেম দিয়ে স্পেস দিন, তারপর কারণটি লিখুন (যেমন: sex বা scam)।\n\n**উদাহরন:**\n• `https://t.me sex`\n• `https://t.me scam`\n• `@username sex`", { parse_mode: 'Markdown' });
});

bot.on('text', async (ctx) => {
  const text = ctx.message.text.trim();
  const words = text.split(/\s+/); // স্পেস দিয়ে শব্দগুলোকে আলাদা করা

  if (words.length  {
  console.error("Bot Runtime Error:", err.message);
});

bot.launch().then(() => console.log("Abuse Report Bot is running..."));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
