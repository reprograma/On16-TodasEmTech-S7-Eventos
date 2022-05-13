/*
Exemplo de 'promise'. 
*/

function soAceitaPares(numero){
    const promise = new Promise( (resolve, reject) => { 
                        if (numero % 2 === 0) { 
                            const resultado = 'Viva, é par!';
                            resolve(resultado);
                        } 
                        else { 
                            reject(new Error("Você passou um número ímpar!"));
                        } 
                    });
    return promise;
}

//teste verificação
console.log("promessa");
const result = soAceitaPares(6)
console.log(result)
/*
Essa função retorna uma promise para permitir que seu conteúdo rode de maneira assíncrona. 
A promise que será retornada avalia o argumento ‘numero’ e se ele for par, 
retorna uma promise resolved, mas caso contrário, retorna uma promise rejected. 
Ambas funções de retorno (resolve e reject) permitem a passagem de um objeto por 
parâmetro que vai ser lido por quem estiver aguardando um feedback dessa promise.
*/

