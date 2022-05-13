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
soAceitaPares(3)
    .then(result => console.log("Promise resolved: " + result))
    .catch(error => console.log("Promises rejected: " + error));
 
console.log("teste");