
/* Desafio para casa:  Transformar a nossa promisse Hell em async_await
Dica de ouro: Vai ter uma das promises que vc não vai precisar usar await
*/

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
            resolve("jenifer@reprograma.com")
        },2000);
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            var deuErro = false;
            if(!deuErro){
                resolve({time: 6, to: "jenifer@reprograma.com"}) 
            }else{
                reject("Fila cheia") 
            }
        },4000)
    });
}

async function envioEmail(){
    const id = await pegarId()
    const email = await buscarEmailNoBanco(id)

    enviarEmail("Olá, como vai?",email).then(() => {
        console.log("Email enviado, para o usuário com id: " + id + " " + email)
    }).catch(err => {
        console.log(err);
    })
}

envioEmail()