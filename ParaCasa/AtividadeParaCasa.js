
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
            resolve("veronicapego76@gmail.com")
        },2000);
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            var deuErro = false;
            if(!deuErro){
                resolve({time: 6, to: "veronicapego76@gmail.com"}) // Promessa OK!
            }else{
                reject("Fila cheia") 
            }
        },4000)
    });
}


// aqui >>
async function email() {
    try {
      const id = await pegarId();
      const emailUsuario = await buscarEmailNoBanco(id);
      let enviarParaUsuario = enviarEmail(emailUsuario, "Um ótimo dia!");
      console.log("E-mail enviado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  }
  
  email();