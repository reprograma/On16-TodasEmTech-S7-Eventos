
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
            resolve("prizete@gmail.com")
        },2000);
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            var deuErro = false;
            if(!deuErro){
                resolve({time: 3, to: "prizete@gmail.com"}) // Promessa OK!
            }else{
                reject("Fila cheia") // Foi mal, eu falhei :(
            }
        },2000)
    })

   
}


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
       function oiMeninas(){
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                resolve([
                    {
                        id: "1234", email:"maria@gmail.com"
                    }

                ])

            },2000)


        async function paraSaber(){
            const pegarIdResponse =  pegarId()
            console.log(pegarId)
            const buscarEmailNoBancoResponse = await pegarId()
            console.log(buscarEmailNoBanco)
            const enviarEmailResponse = await buscarEmailNoBanco()
            console.log("Foi!")
        }
        paraSaber()
        
    })


}
})
