let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
*_📮:PILIH GRUB YANG KAMU MAU JOIN_*`.trim()
  const button = {
        buttonText: 'pilih group',
        description: kontol,
        sections:  [{title: "groub pilihan", rows: [
        {title: '⋮☰group Jarot1', description: "📣join kuy", rowId:".Jarot1"},
        {title: '⋮☰group Jarot2', description: "📣join kuy", rowId:".Jarot2"},
        {title: '⋮☰group KOSONG', description: "📣join kuy", rowId:".gada"},
        {title: '⋮☰group KOSONG', description: "📣join kuy", rowId:".gada"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(gcbot)$/i
handler.help = ['groupbot']
module.exports = handler
