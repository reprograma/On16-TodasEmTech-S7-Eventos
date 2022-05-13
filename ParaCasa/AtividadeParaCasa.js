
/* Desafio para casa:  Transformar a nossa promisse Hell em async_await
Dica de ouro: Vai ter uma das promises que vc não vai precisar usar await
*/



function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)   
        }, 2000)
    })
}

function buscarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('saragiannini593@gmail.com')
        }, 2000);
    })
}

function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            var deuErro = false;
            if(!deuErro) {
                resolve({time: 4, to: 'saragiannini593@gail.com'})
            } else {
                reject('Fila cheia')
            }
        }, 2000)
    });
}

async function email() {
    const id = await pegarId()
    const email = await buscarEmailNoBanco(id)
    enviarEmail('Olá, como você está?', email).then(() => {
        console.log('Seu email foi enviado com sucesso.')
    }).catch((err) => {
        console.log('Falha ao enviar')
    })
}

email()

// aqui vc pode chamar uma promise dentro de outra(Promisses aninhadas ou Promisse Hell)
// console.log("Inicio!");
// pegarId().then((id) => {
//     buscarEmailNoBanco(id).then((email) => { 
//         enviarEmail("Olá, como vai?",email).then(() => {
//             console.log("Email enviado, para o usuário com id: " + id)
//         }).catch(err => {
//             console.log(err);
//         })
        
//     })
// })
// console.log("Foi!");