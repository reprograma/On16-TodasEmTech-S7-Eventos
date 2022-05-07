/* setTimeout(function(){
 console.log('Olá Reprograma')
}, 7000) */

const fs = require("fs");

function enviarEmail(corpo, para, callback){
    setTimeout(function(){
        console.log(`
        Para: ${para}
        ---------------------------------------
        ${corpo}
        ---------------------------------------
        De: Jenifer Plácido
        `)
        callback("OK", 40, "2s");
    }, 2000)
}


console.log("Inicio do envio de email")
enviarEmail("Olá Seja bem vindxs a Reprograma", "jenifer@reprograma.com", (status, amount, time)=>{
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
    

/* app.get("/usuarios", (req, res)) => {
}
*/ 