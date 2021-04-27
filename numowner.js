const ownerNumber = ["wa.me/5522981631284"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '5522981631284' 
// mude para seu numero

const cr = '𝕍𝕚𝕟𝕠'𝕤 𝔹𝕠𝕥 - 𝔻𝕋\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const apiTobz = 'key'
// pra pegar a key do Tobz va até o numero 
//wa.me/12502881609se registre no bot
// e depois escreva #generateapikey que o 
//bot do tobz vai gerar sua key

let mess = {
    wait: '⌛ Aguarde um pouco... ⌛',
    success: '✔️ Sucesso! ✔️',
    error: {
        stick: '❌ Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ Este comando só pode ser usado em grupos! ❌',
        ownerG: '❌ Este comando só pode ser usado pelo grupo proprietário! ❌',
        ownerB: '❌ Este comando só pode ser usado pelo bot proprietário! ❌',
        admin: '❌ SILÊNCIO MEMBRO COMUM VC N TEM MORAL PRA USAR ESSE COMANDO ❌',
        Badmin: '❌ Este comando só pode ser usado quando o bot se torna administrador! ❌'
    }
}

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Meu criador^~^\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=5522981631284:+55 22 98163-1284\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde

exports.mess = mess
exports.apiTobz = apiTobz
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
