const fs = require('fs')

console.log("Inicio")

fs.writeFile('arquivo.txt', 'Olá Reprograma', function(err){
    setTimeout(function(){
        console.log('O Arquivo foi criado')
        
    }, 1000);
})
console.log('Fim')