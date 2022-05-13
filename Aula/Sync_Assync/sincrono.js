//Exemplo de código síncrono
const fs = require('fs') //carrega módulo FS (File System) pra poder usar o fs.writeFileSync

console.log("Inicio")

fs.writeFileSync('arquivo.txt', 'Arquivo criado com função Síncrona')
console.log('Fim')