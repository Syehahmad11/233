let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═════════════════
║╭──❉ *BIODATA OWNER* ❉───
║│➸ *Nama* : BotzJr ( nama samaran ) 
║│➸ *Umur* : 18
║│➸ *Kelas* : lulus
║│➸ *Status* : butuh ayng AWOKAWOK
║╰───────────────
╰════════════════
╭════════════════
║╭──❉ *ASAL KOTA* ❉───
║│➸ *DAERAH* : *_JAWA TIMUR =}} PASURUAN_*
║│➸ *ASAL KOTA* : *_PASURUAN_*
║│➸ *ALAMAT RUMAH* : *[PRIVASI]*
║│➸ *Gmail* : roziganteng559@gmail.com
║╰────────────────
╰═════════════════
_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'JAROT')).buffer(), ext, 'BotJrbotz', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewaBotjr', m)

}
handler.help = ['asal', 'kota']
handler.tags = ['info']
handler.command = /^(asal|kota)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
