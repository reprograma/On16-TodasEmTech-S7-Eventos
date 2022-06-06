
const fs = require('fs')

console.log("Inicio")

// a função setTimeout para definir um tempo para executar
fs.writeFile('arquivo.txt', 'Olá Reprograma', function(err){
    setTimeout(function(){
        console.log('O Arquivo foi criado')
        
    }, 1000); // 1000 significa os segundos neste caso 1 segundo
})
console.log('Fim')