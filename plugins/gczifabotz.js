let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
*Group Jarotbotz1 📮:https://chat.whatsapp.com/E5l0ofPuMxG3H8ZhMRyI7e *
`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['Jarot1']
handler.tags = ['info']
handler.command = /^Jarot1$/i

module.exports = handler
