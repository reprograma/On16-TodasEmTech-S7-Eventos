# Resumo Semanal 7: JavaScript Assíncrono


1. Programação síncrona e assíncrona:

##### Forma Síncrona:

- O código espera ser totalmente executado para prosseguir.

- Então, funções síncronas, quando chamadas, pausam a thread principal para ser processada, retorna o valor e só depois continua a execução do resto do código.

##### Forma Assíncrona:

- O código continua progredindo e, em um ponto futuro, obtém a resposta da execução.

- Nesse caso, é criada uma thread paralela executada em segundo plano sem interromper a execução da thread principal.

- Tarefas que não podem ser concluídas no momento são concluídas de forma assíncrona.

- Pode ser feito com a função ```setTimeout(callback, milliseconds)```, que configura um evento (timeout) para acontecer mais tarde. Por configurar um temporizador, não coloca o retorno de chamada imediatamente na fila do event loop. Apenas quando o temporizador expira o retorno de chamada é colocado no event loop para que algum sinal futuro o capte e o execute.

~~~javascript
function first() {
  console.log("first");
}
function second() {
  console.log("second");
}
function third() {
  console.log("third");
}
first();
setTimeout(second, 1000); // em 1000ms second será adicionado à fila
third();
// a saída no console será na ordem: first, third, second
~~~

2. Event Loop:

- O **Event Loop** é uma fila de eventos responsável por enviar novas funções que foram resolvidas de forma assíncrona para a trilha principal de processamento (_Call Stack_), seguindo uma estrutura de dados da fila (_Callback Queue_ - fila de retorno de chamada), mantendo, assim, a sequência correta de execução dos eventos/funções.

- Em suma, o **Event Loop** monitora a _Call Stack_ e a _Callback Queue_. Se a _Call Stack_ estiver vazia, ele pegará o primeiro evento da _Callback Queue_ e o empurrará para a _Call Stack_.

- O JavaScript monitora qual evento está chegando na linha de execução e qual evento está pronto para ser executado na fila.

~~~javascript
console.log("Hi");
setTimeout(function cb1() {
  console.log("cb1");
}, 5000);
console.log("Bye");
~~~

<p align="center">
  O código acima seria executado da seguinte forma:
</p>
  
<p align="center">
  <img src="https://miro.medium.com/max/1400/1*TozSrkk92l8ho6d8JxqF_w.gif" alt="Event Loop" width="600"/>
</p>

3. Callbacks:

- **Chamada de retorno**;

-  É uma função que é armazenada para ser executadas depois, passada como argumento para outra função, para se realizar uma determinada ação.

-  É uma das maneiras  mais comuns de expressar e gerenciar assincronia em programas JavaScript.

4. Promises:

- Também é uma forma de lidar com a assincronicidade.

- Cria-se uma função que retorna uma ```new Promise()``` que também passa como argumento uma callback, retornando duas funções _resolve()_ e _reject()_. Então, dada uma promessa, ou se resolve (sucesso da promessa) ou se rejeita (erro da promessa).

- O ```then()``` ativa a callback quando a promessa for cumprida, e possui como argumento o valor retornado na função ```resolve()```.

- Vários thens podem ser encadeados caso haja duas ou mais operações assíncronas consecutivas, assim, o valor do primeiro argumento de cada then encadeado será o valor do retorno do anterior.

- O ```catch()``` ativa a callback quando a promessa for rejeitada, e possui como argumento o valor retornado na ```reject()```.

- O ```finally()``` ativa a callback quando a promessa acabar, e possui como argumento, também, o valor retornado na ```reject()```.

- Com a promise, faz-se o código crescer para baixo o que facilita na manutenção.

~~~javascript
const readFile = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
      if (err) {
        reject(err);
      } else {
        resolve(contents);
      }
    });
  });

readFile("./xFile.txt")
  .then((contents) => {
    console.log(contents);
    return readFile("./yFile.txt");
  })
  .then((contents) => {
    console.log(contents);
  });
~~~

- Ciclo de vida da Promise:

| Estado    | Significado                                                |
| --------- | ---------------------------------------------------------- |
| Pending   | Promise ainda em execução (estado inicial)                 |
| Fulfilled | Execução de todas as operações com sucesso                 |
| Rejected  | Execução finalizada com erro                               |
| Settled   | Estado final de executado, independente de sucesso ou erro |

5. Async/Await:

- Basicamente, o async/await é uma forma mais flúida de escrever/ler uma promise e torna a leitura de um código assíncrono mais próxima do código síncrono.

- Ao receber o ```async```, uma função passa a ser assíncrona que retorna uma promise ao invés de um valor.

- Essa função assíncrona espera a palavra-chave ```await``` ser usada para invocar o código assíncrono. Assim, o **await** é colocado na frente de qualquer função que retorne uma promise e indica que o JavaScript deve esperar o retorno dessa promise para continuar a execução, retornando o valor resultante.

- Deve-se ter cuidado, porém, para não utilizar o **await** desnecessariamente para não interromper o fluxo da aplicação.

##### Try/Catch

- Pode-se utilizar o **try/catch** para fazer o tratamento de erro. Marca um bloco a ser testado (_try_) e determina uma ação para a captura (_catch_) de um possível erro.

--- 

<p align="center">
  <img src="https://c.tenor.com/YAOhbZ5GZy4AAAAd/nazaré.gif" alt="Gif Nazare" width="600"/>
</p>
