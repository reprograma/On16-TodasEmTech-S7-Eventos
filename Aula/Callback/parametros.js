// Testando callback dentro do parâmetro de uma function

function enviarEmail(corpo, para, callback){
    setTimeout(function(){
        console.log(`
        Para: ${para}
        ---------------------------------------
        ${corpo}
        ---------------------------------------
        De: Débora Christyna
        `)
        callback("OK", 40, "2s"); //definindo resultados de parâmetros da Callback (linha 18).
    }, 2000)
}

//Teste de verificação de funcionamento
console.log("Inicio do envio de email")
enviarEmail("Olá Seja bem vindxs a Reprograma", "cdias.proj@gmail.com", (status, amount, time)=>{
    console.log(`
        Status: ${status}
        ----------------------------
        Contatos: ${amount}
        ----------------------------
        Tempo de envio: ${time}
    `)
    console.log("Deu certo!")
})
console.log("Aguarde o seu email foi enviado e vai chegar em minutos!")
    