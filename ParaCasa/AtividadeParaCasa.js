/* Desafio para casa:  Transformar a nossa promisse Hell em async_await
Dica de ouro: Vai ter uma das promises que vc não vai precisar usar await
*/

function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 1500)
    })
}

function buscarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("jenifer@reprograma.com")
        }, 2000);
    })
}

function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = false;
            if (!deuErro) {
                resolve({
                    time: 6,
                    to: "jenifer@reprograma.com"
                }) // Promessa OK!
            } else {
                reject("Fila cheia") // Foi mal, eu falhei :(
            }
        }, 4000)
    });
}


// aqui vc pode chamar uma promise dentro de outra(Promisses aninhadas ou Promisse Hell)
console.log("Inicio!");
pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail("Olá, como vai?", email).then(() => {
            console.log("Email enviado, para o usuário com id: " + id)
        }).catch(err => {
            console.log(err);
        })

    })
})
console.log("Foi!");


// [Resolução do desafio]: Transformar a promisse Hell desse arquivo em async_await

// [OBS]: Fiz de duas formas diferentes, a 1ª forma com o código mais limpo e cumprindo as promessas, e 
// a 2ª forma implementando alguns console.log para retornar as promessas cumpridas no console 
// de forma mais clara e visual.

// [1ª] forma de transformar a promise hell em async_await

async function processosEnvio() {
    const id = await pegarId()
    const email = await buscarEmailNoBanco(id)
    const envia = await enviarEmail(email)
    console.log(envia)
    console.log("Enviado com sucesso!!!")
}
processosEnvio()

// [2ª] forma de transformar a promise hell em async_await, implementando os console.log
// para melhor vizualização no console do retorno das promises

async function processosEnvio() {
    const id = await pegarId()
    console.log("O id resgatado é:  " + id)
    const email = await buscarEmailNoBanco(id)
    console.log("O email correspondente ao id resgatado é: " + email)
    let corpo = `Boa Tarde, meninass!!! 
        
        Mandando este email apenas para informar que voces sao incriveis.
        
        Atenciosamente, Bibi da turma 16 da Reprograma.
        
        `
    console.log(`                                                                            
        **Email que estara sendo enviado**

        ${corpo}

        Para: ${email} 
        `)
    const envia = await enviarEmail(corpo, email)
    console.log("Informacoes do envio: ", envia)
    console.log("Enviado com sucesso!!!")
}
processosEnvio()