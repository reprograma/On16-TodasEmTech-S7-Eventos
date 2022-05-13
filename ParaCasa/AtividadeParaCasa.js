function pegarId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 1500);
  });
}

function buscarEmailNoBanco(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("gaiademelos@gmail.com");
    }, 2000);
  });
}

function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var deuErro = false;
      if (!deuErro) {
        resolve({ time: 6, to: "gaiademelos@gmail.com" }); // Promessa OK!
      } else {
        reject("Fila cheia"); // Foi mal, eu falhei :(
      }
    }, 4000);
  });
}

async function email() {
  try {
    const id = await pegarId();
    const emailUsuario = await buscarEmailNoBanco(id);
    let enviarParaUsuario = enviarEmail("Bom dia Sr(a)", emailUsuario);
    console.log("E-mail enviado");
  } catch (error) {
    console.log(error);
  }
}

email();
