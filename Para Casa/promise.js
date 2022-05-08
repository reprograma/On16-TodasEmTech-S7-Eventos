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