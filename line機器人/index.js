import 'dotenv/config'
import linebot from 'linebot'
import { scheduleJob } from 'node-schedule'
import Country from './utils/Country.js'
import china from './utils/china.js'
import japan from './utils/japan.js'
import korean from './utils/korean.js'
import Vietnam from './utils/Vietnam.js'
import taiwan from './utils/taiwan.js'



const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})


let che = 0
const updateche = async () => {
  che = await Country()
}
scheduleJob('0 0 * * *', updateche)
updateche()

let chec = 0
const updatechec = async () => {
  chec = await china()
}
scheduleJob('0 0 * * *', updatechec)
updatechec()

let chej = 0
const updatechej = async () => {
  chej = await japan()
}
scheduleJob('0 0 * * *', updatechej)
updatechej()

let chek = 0
const updatechek = async () => {
  chek = await korean()
}
scheduleJob('0 0 * * *', updatechek)
updatechek()

let chev = 0
const updatechev = async () => {
  chev = await Vietnam()
}
scheduleJob('0 0 * * *', updatechev)
updatechev()
let chet = 0
const updatechet = async () => {
  chet = await taiwan()
}
scheduleJob('0 0 * * *', updatechet)
updatechet()


bot.on('message', event => {
  if (event.message.type !== 'text') return

  if (event.message.text.startsWith('中')) {
    event.reply(`人口總數約14.1億                    確診人數${chec.toString()}`)
  } else if (event.message.text.startsWith('美')) {
    event.reply(`人口總數約3.3億                      確診人數${che.toString()}`)
  } else if (event.message.text.startsWith('日本')) {
    event.reply(`人口總數約1.3億                      確診人數${chej.toString()}`)
  }
  else if (event.message.text.startsWith('韓')) {
    event.reply(`人口總數約0.5億                       確診人數${chek.toString()}`)
  }
  else if (event.message.text.startsWith('越南')) {
    event.reply(`人口總數約1億                          確診人數${chev.toString()}`)
  }
  else if (event.message.text.startsWith('台灣')) {
    event.reply(`人口總數約2300萬                     確診人數${chet.toString()}`)
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
