function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)   
        },1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("claudiane.fidelis6@gmail.com")
        },2000);
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            let deuErro = false;
            if(!deuErro){
                resolve({time: 6, to: "claudiane.fidelis6@gmail.com"}) // Promessa OK!
            }else{
                reject("Fila cheia") // Foi mal, eu falhei :(
            }
        },4000)
    });
}


async function infoEnvio(){
    const id = await pegarId()
    const email = await buscarEmailNoBanco(id)
    enviarEmail("Olá, como vai?", email).then(() => {
        console.log('Email enviado')
        
    }).catch((err) => {
        console.log((err))
    })
}

infoEnvio()

