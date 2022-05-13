
/* Desafio para casa:  Transformar a nossa promisse Hell em async_await
Dica de ouro: Vai ter uma das promises que vc não vai precisar usar await
*/

function getId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)   
        },1500)
    })
}

function searchEmailDataBase(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("analidialirar@gmail.com")
        },2000);
    })
}

function sendEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            var deuErro = false;
            if(!deuErro){
                resolve({time: 6, to: "analidialirar@gmail.com"}) // Promessa OK!
            }else{
                reject("Fila cheia") // Foi mal, eu falhei :(
            }
        },4000)
    });
}

// aqui vc pode chamar uma promise dentro de outra(Promisses aninhadas ou Promisse Hell)
console.log("Inicio!");
getId().then((id) => {
    searchEmailDataBase(id).then((email) => { 
        sendEmail("Olá, como vai?",email).then(() => {
            console.log("Email enviado, para o usuário com id: " + id)
        }).catch(err => {
            console.log(err);
        })
        
    })
})
console.log("Foi!");

// RESOLUÇÃO DA ATIVIDADE DE CASA

async function organizeSendings(){
    const id = await getId()
    const email = await searchEmailDataBase(id)
    sendEmail("Olá, como vai?", email).then(() => {
        console.log('Email enviado, para o usuário com id: ' + id)
        
    }).catch((err) => {
        console.log((err))
    })
}

organizeSendings()
