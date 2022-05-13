# Semana 07: Todas em Tech On16

Tá ficando sério! Já passamos da metade do curso e a expectativa está a mil. Esta semana, tivemos com professora a querida [Jenifer Plácido](https://github.com/jeniferplacido), que nos ensinou um pouco sobre **Programação Assíncrona, com Event Loop, Callbacks, Promisses e Async/Await**. Muito conteúdo para esta cabecinha e muita emoção neste coração! :two_hearts:	

Como tarefa de casa esta semana, a {profa} pediu para fazermos um ReadMe bem bonitão contando tudo que aprendemos - e como vocês viram ali em cima, foi coisa para caramba! Por isso, let's get to business! :dark_sunglasses:	

![Programando bem linda](Foto1.jpg)

## Conteúdos desta semana 🖥️

### Programação Assíncrona 

Como já vimos em aulas anteriores, funções síncronas são aquelas que, quando chamadas, dão um pause na execução principal para realizar seu processamento e, posteriormente, retornam a execução. Tudo acontece, então, na mesma "linha" de execução. 

Esta é a principal diferença para as funções assíncronas, que são executadas em segundo plano, sme interromper o fluxo principal. Elas ficam sendo executadas no background e ao final são apresentadas através do Event Loop, sem travar a execução da 'linha' principal. É o caso, por exemplo, da função >setTimeout().

### Event Loop

O Event Loop nada mais é do que a fila de eventos, responsável pela execução do código, coleta e processamento de eventos e execução de subtarefas enfileiradas. É esta fila que envia as funções que foram resolvidas de forma assíncrona para a trilha principal de processamento.

## Função Callback

Uma função callback é passada como um argumento para outra função que, por sua vez, será invocada por uma função externa. Ela pode ser síncrona ou assíncrona. Já vimos alguns casos de síncronas em aulas anteriores, então se estiver curioso é só dar uma olhada no meus outros repositórios :). 

As funções callback assíncronas são muito comuns e são a base para esse tipo de execução no JavaScript. Esse tipo de função não espera o término de cada evento para execução do seguinte, processando de forma assíncrona.

## Promises 

Promise é um objeto usado para o processamento assíncrono. As funções assíncronas retornam promises, que podem ser a falha ou a conclusão da operação. Uma função assíncrona retorna valores tal qual uma função síncrona, mas, na verade, o que ela está retornando é a promessa desse valor.

### Ciclo de vida da promise

| Estado    |                                                           |
|-----------|-----------------------------------------------------------|
| Pending   | Inicial, quando a promise ainda está sendo executada      |
| Fulfilled | Quando todas as operações foram executadas com sucesso    |
| Rejected  | Quando houve um erro ou falha na execução                 |
| Settled   | Executada, independente de ter sido Fulfilled ou Rejected |

## Async / Await

Essas palavras-chave são utilizadas nas promises, melhorando sua execução e sua visualização. Toda função com a palavra-chave *async* torna-se uma função assíncrona, resultando em *promise* ao invés de um valor direto. Já a palavra *await* indica que o JavaScript deve esperar o retorno de uma promise para então continuar a execução.

## Referências
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/EventLoop
- https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
- https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Introducing
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction
