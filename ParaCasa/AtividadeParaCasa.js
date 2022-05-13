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

// [OBS]: Abaixo deixei duas formas diferentes, a 1ª forma com o código mais limpo e cumprindo as promessas, e 
// a 2ª forma implementando alguns console.log para retornar todas promises cumpridas no console 
// de forma mais clara e visual para melhor entendimento do que está sendo feito. 

// [1ª] Forma de transformar a promise hell em async_await (realizada em sala de aula)

async function principal() {
    let id = await pegarId();
    let email = await buscarEmailNoBanco(id);
    enviarEmail('Olá, Reprograma', email).then(() => {
        console.log('Email enviado!')
    }).catch((err) =>
        console.log(err))
}

principal();

// [2ª] Uma das formas que tentei transformar a promise hell em async_await, implementando os console.log
// para melhor vizualização no console do retorno das promises presentes nesse encadeamento.

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