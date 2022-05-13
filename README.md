
<h1 align="center">  Introdução API Eventos :rocket: </h1> <br>
<h3 align="center">  Turma On16 Todas em Tech - Back-end | S7 - Eventos: Event Loop, Callbacks, Promises e Async/Await </h3> <br>

## *Atividade da 7ª semana da Reprograma.* :hearts: :rainbow_flag:

### :o: *`Programação síncrona e assíncrona`*
</br>

> Programação *`síncrona`* significa que a primeira tarefa em um programa deve terminar o processamento antes de prosseguir para a execução da próxima tarefa, enquanto a *`assíncrona`* significa que uma segunda tarefa pode começar a ser executada em paralelo, sem esperar que uma tarefa anterior termine. 


<p align="center">
  <img width="700" alt="Síncrono e Assíncrono" src="https://user-images.githubusercontent.com/84551213/168297896-7212b39d-83b7-46a2-89bb-23011a67d185.png" width= "700px"/>
</p>

### :small_orange_diamond: *`Exemplos do mundo real`*
</br>

```
Síncrona:

- Você quer um hambúrguer e decide ir ao McDonald's. Depois de pedir o hambúrguer no balcão, você é instruído 
a esperar enquanto o hambúrguer é preparado. Nesta situação síncrona, você fica preso no balcão até ser servido seu hambúrguer.
```

```
Assíncrona:

- Você quer um hambúrguer e decide ir ao Five Guys. Você vai até o balcão e pede um hambúrguer. Five Guys lhe dá uma campainha 
que irá notificá-lo quando seu hambúrguer estiver pronto. Nesta situação assíncrona, você tem mais liberdade enquanto espera.
```

### :small_orange_diamond: *`Exemplos técnicos`*
</br>

```
Síncrona:

- Os designs da interface do usuário(UI) são normalmente síncronos. Como as interfaces de usuário são espaços onde humanos e 
computadores interagem, é ideal que eles repliquem os padrões e práticas de comunicação dos quais os humanos estão familiarizados.
Os humanos esperam uma resposta imediata quando interagem com um computador.

- As APIs HTTP transmitem solicitações e respostas de maneira síncrona. Os programas cliente que enviam solicitações HTTP 
geralmenteesperam uma resposta rápida do servidor web.
```

```
Assíncrona:

- Processamento em lote é um método de processamento de dados para lidar com grandes quantidades de dados de forma assíncrona.
Com o processamento em lote assíncrono, grandes lotes de dados são processados em horários programados para evitar o bloqueio de 
recursos de computação.

- Tarefas de longa duração para atender um pedido feito em um site de comércio eletrônico, são melhor tratadas de forma assíncrona.
Não há necessidade de bloquear recursos enquanto esta tarefa é executada.
```

### :o: *`Event Loop`*
</br>

> O *`Event Loop`* é um loop simultâneo de thread única, sem bloqueio e de forma *`assíncrona`*. O JavaScript é de thread uníca. Uma única thread só pode fazer uma coisa de cada vez. Em vez de aguardar a resposta, ele continua a selecionar outras tarefas na fila. No event loop, o loop principal desenrola a pilha de chamadas(`call stack`) e não espera os retornos de chamada. Como o loop não bloqueia, é tranquilo fazer mais de uma solicitação por vez. Várias solicitações podem ser enfileiradas ao mesmo tempo, o que as torna simultâneas. O Event loop não espera que uma solicitação seja concluído, mas pega retornos de chamada conforme eles vêm, sem bloqueio.

### :small_orange_diamond: *`setTimeout()`*
</br>

> O método *`setTimeout()`* define um cronômetro que executa uma função ou trecho de código especificado assim que o cronômetro expirar. Ele recebe dois parâmetros, sendo o primeiro uma função callback e o segundo um intervalo de tempo em milissegundos (1000ms = 1s). 

```
setTimeout(function, time);
```
<p align="center">
  <img width="445" alt="time" src="https://user-images.githubusercontent.com/84551213/168320912-ec462bc7-1acb-433b-aa60-4034f5dd78ec.png" width= "700px"/>
</p>

### :o: *`Callbacks`*
</br>

> *`Callback`* é um tipo de função que só é executada após o processamento de outra função. Na linguagem JavaScript, quando uma função é passada como um argumento de outra, ela é, então, chamada de callback.

<p align="center">
  <img width="511" alt="call" src="https://user-images.githubusercontent.com/84551213/168325360-4c46197f-1261-4272-8e9e-46e96965a5e3.png" width= "700px"/>
</p>

### :o: *`Promises`*
</br>

> A *`Promise`* realiza processamentos e tratamentos de eventos ou ações assíncronas. Esse objeto guarda um valor que pode estar disponível agora, no futuro ou nunca. Isso permite o tratamento de eventos ou ações que acontecem de forma assíncrona em casos de sucessos ou falhas. </br>

<p align="center">
  <img width="700" alt="promisse" src="https://user-images.githubusercontent.com/84551213/168329855-eb142721-2703-4b93-898f-9dfaf4554489.png" width= "700px"/>
</p>

> Ao criar uma Promise, a mesma começa em estado inicial como pendente (*`pending`*). Se ela estiver no estado de resolvida (*`resolved`*) é porque tudo deu certo, ou seja, a Promise foi criada e processada com sucesso, porém, em casos de falhas, a mesma estará no estado de rejeitada (*`rejected`*). </br>
> Uma das maneiras de fazer esse tratamento é através das funções *`then`* e *`catch`*, para sucesso ou falha respectivamente.

<p align="center">
  <img width="569" alt="promises" src="https://user-images.githubusercontent.com/84551213/168334149-298bc173-f360-471f-84a1-a4e40624e8a7.png" width= "700px"/>
</p>

### :o: *`Async/Await`*
</br>

> *`Async/await`* simplifica a programação assíncrona, facilitando o fluxo de escrita e leitura do código, e sair da bagunça que os Callbacks fazem no nosso código. Assim é possível escrever código que funciona de forma assíncrona, porém é lido e estruturado de forma síncrona. O async/await trabalha com o código baseado em Promises, porém esconde as promessas para que a leitura seja mais fluída e simples de entender. </br>
>Definindo uma função como async, podemos utilizar a palavra-chave await antes de qualquer expressão que retorne uma promessa. Dessa forma, a execução da função externa (a função async) será pausada até que a Promise seja resolvida. </br>
> Uma função declarada como async significa que o valor de retorno da função será, "por baixo dos panos", uma Promise.

<p align="center">
  <img width="400" alt="gif" src="https://user-images.githubusercontent.com/84551213/168339768-cfcfacb0-bcea-47cd-8e1b-695fcb79490e.png" width= "700px"/>
</p>


----

  ### <br> *`Referências:`* :pushpin: <br>
>
> * :closed_book: <https://medium.com/balta-io/nodejs-async-await-21ca3636252a> 
> * :closed_book: <https://imasters.com.br/front-end/entenda-tudo-sobre-asyncawait> 
> * :closed_book: <https://medium.com/totvsdevelopers/entendendo-fun%C3%A7%C3%B5es-callback-em-javascript-7b500dc7fa22>
> * :closed_book: <https://blog.betrybe.com/tecnologia/callback/>

</br>

<p align="center">
  <img src="https://user-images.githubusercontent.com/84551213/168341466-c3fc2cab-3d2f-4533-8bba-bc5b5582b5b1.gif" width= "400px"/>
</p>


