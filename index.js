const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'اكتب_ايبي_السيرفر',
  port: 19132,
  username: 'Bot24'
})

bot.on('spawn', () => {
  console.log('البوت دخل السيرفر')
})
