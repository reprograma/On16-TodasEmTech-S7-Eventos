function enviarEmail(corpo, para, callback){
    setTimeout(function(){
        console.log(`
        Para: ${para}
        ---------------------------------------
        ${corpo}
        ---------------------------------------
        De: majo
        `)
        callback();
    }, 2000)
}


console.log("Inicio do envio de email")
enviarEmail("Olá Seja bem vindxs a Reprograma", "majo@hotmail.com", ()=>{
    console.log("Oii, isso é um callback")
    console.log("Ele acabou de ser executado!")

})
console.log("Aguarde o seu email foi enviado e vai chegar em minutos!")
    console.log("Deu certo!")