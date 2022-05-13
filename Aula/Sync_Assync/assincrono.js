//Exemplo de código assíncrono

const fs = require('fs') //importa módulo FS (File System). Permitindo usar o fs.writeFile

console.log("Inicio")

fs.writeFile('arquivo.txt', 'Arquivo criado com função Assíncrona', function(err){  //1ºparam.:Nome-do-arquivo|2ºparam.:Mensagem que conterá o arquivo|3ºfunção para caso haja erro
    setTimeout(function(){
        console.log('O Arquivo foi criado')
        
    }, 1000);
})
console.log('Fim')