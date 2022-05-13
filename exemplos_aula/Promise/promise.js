/*
Para criar uma promise é bem simples, usa-se o construtor da própria classe e 
passa-se uma function como único argumento, que possui 
funções de resolve e reject na sua assinatura. Dentro dessa function, 
você deve chamar resolve quando sua execução for bem sucedida, ou reject, caso contrário.
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
 
console.log("promessa");

/*
Essa função retorna uma promise para permitir que seu conteúdo rode de maneira assíncrona. 
A promise que será retornada avalia o argumento ‘numero’ e se ele for par, 
retorna uma promise resolved, mas caso contrário, retorna uma promise rejected. 
Ambas funções de retorno (resolve e reject) permitem a passagem de um objeto por 
parâmetro que vai ser lido por quem estiver aguardando um feedback dessa promise.
*/

