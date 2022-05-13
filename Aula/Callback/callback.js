//Exemplo função com uso de callback

function enviarEmail(corpo, para, callback){
    setTimeout(function(){
        console.log(`
        Para: ${para}
        ---------------------------------------
        ${corpo}
        ---------------------------------------
        De: Débora Christyna
        `)
        callback();
    }, 2000)
}
// A função acima, o email com seu 'para' e seu 'corpo' irá aparecer 2 seg depois do que tem na linha 24.

console.log("Inicio do envio de email")
enviarEmail("Olá Seja bem vindxs a Reprograma", "cdias.proj@gmail.com", ()=>{
    console.log("Olá, isso é um callback")
    console.log("Ele acabou de ser executado!")

})
console.log("Aguarde o seu email foi enviado e vai chegar em minutos!")
    console.log("Deu certo!")

/* O que tá acontecendo no EventLoop:
1- Linha 17 é a 1º chamada. Um Console.log
2- Linha 18 é a 2º chamada, mas ela chamou uma função que possui um setTimeOut. Ocorre de forma assíncrona.
Segue o loop.
3- Seguindo para a linha 23, 3º chamada, e acontece de forma síncrona.
4- Seguida para linha 24, que também ocorre de forma síncrona. 
5- Voltando o loop, a chamada da linha 18 ocorre e seguida da linha 19 e 20. Finalizando o Loop
*/