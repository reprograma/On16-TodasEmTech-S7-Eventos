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
                resolve({time: 6, to: "jenifer@reprograma.com"}) // Promessa OK!
            }else{
                reject("Fila cheia") // Foi mal, eu falhei :(
            }
        },4000)
    });
}

async function principal(){
    let id = await pegarId();
    let email = await buscarEmailNoBanco(id);
    enviarEmail('Olá, Reprograma', email).then(() =>{
    console.log('Email enviado!')
    console.log('Atividade para casa resolvida')
    }).catch((err)=>
    console.log(err))}
    
 principal();
 
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