
function pegarID() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(8);
      }, 1000);
    });
  }
  
  function buscarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("mari@gmail.com");
      }, 1000);
    });
  }
  
  function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let deuErro = false;
        if (!deuErro) {
          resolve({ time: 2, to: para, corpo: corpo });
        } else {
          reject("A caixa de entrada está cheia.");
        }
      }, 1000);
    });
  }
  
  async function email() {
    const userId = await pegarID();
    const endereçoEmail = await buscarEmailNoBanco(userId);
    const resposta = await enviarEmail("Boa tarde, minha querida!", endereçoEmail);
    if (resposta.to) {
      console.log(`E-mail enviado para o usuário com id: ${userId} - ${endereçoEmail}`);
    } else {
      console.log("Falha ao enviar e-mail");
    }
  }
  
  email();