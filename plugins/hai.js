let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Status : *_Online_* 
*📮: HAI SAYA JAROTBOTZ SILAHKAN KLIK BUTTON DI BAWAH!*
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'uy apaan')).buffer(), ext, 'bot online', 'COMMAND', '.command', 'OWNER', '.owner2', m)

}
handler.customPrefix = /^(BotJr|Jarotbotz|bot|menu|hai|hallo|hii|hello|cuy)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
