
# On16-TodasEmTech-S7-Eventos

### Turma Online Todas em Tech - Back-end | Semana 7: Event Loop, Callbacks, Promises e Async/Await


## Resumo 


###  programação síncrona/assíncrona

  
    ``No JavaScript tudo é assíncrono por padrão. 
    Por exemplo, ao chamar duas funções (funcaoUm() e funcaoDois()), o JS não aguarda a função terminar sua execução. 
    Ele basicamente vai seguindo adiante.``


Imaginemos no preparo de um lanche que a pessoa pode deixar o liquidificador batendo um suco enquanto pica os tomates e pôe no pão.

Caso a programação fosse sincrona, seria como se a pessoa precisasse bater primeiro o suco e só quando acabsse de executar esse algoritmo, pudesse seguir com o preparo do restante.
Enquanto na assíncrona, o código começa executar uma função e segue com a execução, mesmo que o retorno só venha depois do que ele segue executando.


###  Event Loop;

Já que em JavaScript o código é lido em sequência, os <i> Event Loop </i> são utilizados para voltar ao código, ou executar novamente um bloco, ou função por ex, sem que o fluxo seja interrompido nem causar bloqueios,


####  Callbacks;


São as funções cujo escopo contém outra função. 
<br><b> -q você disse? </b>
| é uma função que quando executada `ativa` outra função 

```js

function enviarEmail(corpo, para, callback ) {
setTimeout(function(){
console.log(` 
Para: ${para}
==========================================
${corpo}
==========================================
De: Majojo

`)
callback('foi', 40, "1s")
}, 1000)
}

console.log(`inicio do envio do email`)
enviarEmail(`
Bem vinda, 

voce foi selecionada para a reprograma
-`, 'majo@hotmail.com', (status, amount, time) => {
    console.log(`
    Status: ${status}
    ===========================================
    Contatos: ${amount}
    ===========================================
    Tempo de Envio: ${time}
    `)
console.log(`deu tudo certo`)
})

console.log(`aguarde seu email foi enviado e vai chegar qse agora`)
```

####  Promises;

        ´´Promises são um padrão de desenvolvimento que visam representar a conclusão de operações assíncronas. Elas não eram nativas do JavaScript até o ES6, quando houve uma implementação oficial na linguagem, antes delas, a maioria das funções usavam callbacks.´´

Num esticamento do conceito dá pra dizer que uma promise é uma callback que já sabe o que espera. É uma maneira de determinar a execução da função a partir do recebimento de um valor.

Tem até as <i>Promise Hell</i> que é quando se forma uma sequência demoníaca de promises uma dentro da outra, fazendo um milharal de funções que aguardam o retorno uma da outra, quase uma sequnência de dominós desmoronando

####  Async/Await.

```js

main();

async function main() {
    let um = await funcaoUm();
    let dois = await funcaoDois();
    let tres = await funcaoTres();

    console.log(um);
    console.log(dois);
    console.log(tres);
}

async function funcaoUm() {
    await sleep(1000);
    return "Um";
}

async function funcaoDois() {
    await sleep(500);
    return "Dois";
}

async function funcaoTres() {
    await sleep(250);
    return "Três";
}

function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

```

é uma maneira de escrever muuuito mais organizada e que facilita criar uma callback sem cair mais no Inferno das <b>Promesssas</b>





### [Slides da aula](https://docs.google.com/presentation/d/1hik5KVEutK7ec1MHRnNEDy5NikDGC8GP/edit?usp=sharing&ouid=103451384479324478678&rtpof=true&sd=true)