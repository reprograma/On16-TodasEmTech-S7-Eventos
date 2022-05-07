const fs = require('fs')

console.log("Inicio")

fs.writeFileSync('arquivo.txt', 'Olá Reprograma')
console.log('Fim')