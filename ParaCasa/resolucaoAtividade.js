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



async function email(){
    try{
        const id = await pegarId()
        const emailUsuario = await buscarEmailNoBanco(id)
        let enviarParaUsuario = enviarEmail('Olá usuário', emailUsuario)
        console.log('Email enviado!')

    } catch(error){
            console.log(error)
    }


}

email()