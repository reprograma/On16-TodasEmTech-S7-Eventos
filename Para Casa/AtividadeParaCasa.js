
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
                resolve({corpo: corpo, to: para}) // Promessa OK!
            }else{
                reject("Fila cheia") // Foi mal, eu falhei :(
            }
        },4000)
    });
}


// aqui vc pode chamar uma promise dentro de outra(Promisses aninhadas ou Promisse Hell)
console.log("Inicio!");

async function principal(){
    let pegaIds = pegarId()
    let buscarEmail = await buscarEmailNoBanco(pegaIds)
    let enviaEmail =  await enviarEmail('Olá! Teste', buscarEmail)
    console.log(enviaEmail);
    console.log('Fim!')
}
principal()

