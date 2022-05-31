// fs é uma biblioteca do node
const fs = require('fs')

console.log("Inicio")

// criar sincrono(Sync)
fs.writeFileSync('arquivo.txt', 'Olá Reprograma')
console.log('Fim')