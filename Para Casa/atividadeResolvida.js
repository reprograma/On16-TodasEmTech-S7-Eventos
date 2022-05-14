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
                reject("Fila cheia")
            }
        },4000)
    });
}

function buscarUsuario(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        resolve([
            {name: "Jenifer", lang: "JS"},
            {name: "Lima", lang: "Python"},
            {name: "Plácido", lang: "Java"}
        ])

   },3000)
})
}

async function email(){
	try{
const id = await pegarId()
const emailDoUsuario = await buscarEmailNoBanco(id)/
const enviarParaUsuario = await 

console.log("Email enviado!")
}

catch(error){
console.log('Deu erro')

}
}

email()