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

/* function buscarUsuario(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        resolve([
            {name: "Jenifer", lang: "JS"},
            {name: "Lima", lang: "Python"},
            {name: "Plácido", lang: "Java"}
        ])

   },3000)
})
} */
/* let usuarios = buscarUsuario();
console.log(usuarios)
 */

/* buscarUsuario().then((usuarios)=>{
    console.log(usuarios)
}) */


/* let usuarios = await buscarUsuario();  -> Isso é referente ao than ( Pega essa promise, espera ela
    ser concluida e mostra o resultado dela)/*/
/* 
    async function principal(){
        let usuarios = await buscarUsuario()
        console.log(usuarios)
        console.log("Olá Reprograma")
    }
    principal();


   */
/*
// aqui vc pode chamar uma promise dentro de outra(Promisses aninhadas ou Promisse Hell)
console.log("Inicio!");
pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => { 
        enviarEmail("Olá, como vai?",email).then(() => {
            console.log("Email enviado, para o usuário com id: " + id)
        }).catch(err => {
            console.log(err);
        })
        
    })
})
console.log("Foi!");
*/

async function principal(){
    let id = await pegarId();
    let email = await buscarEmailNoBanco(id);
    enviarEmail('Olá, Reprograma', email).then(() =>{
    console.log('Email enviado!')
    }).catch((err)=>
    console.log(err))}
    
 principal();