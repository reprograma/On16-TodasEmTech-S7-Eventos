# Este é um resumo sobre o que aprendi na semana.

## Iremos falar sobre:

- [ ] Event Loop

- [ ] Callback

- [ ] Promises

- [ ] Async/ Await

<img src = "https://i.pinimg.com/originals/1a/8d/69/1a8d69b5393d8e7dc7f4495f7999dc60.gif">

O Node.js normalmente executa a leitura escrita do código uma linha por vez de cima para baixo. Existem duas formas de executar os métodos:

- Funções síncronas: 
  
  A leitura do código é realizada e quando existe uma função a ser chamada, a leitura é pausada de forma que espera realizar o processamento, retornando o valor e continuando a execução da linha de código;

- Funções assíncronas: 
  
  Quando uma função é chamada, ela é executada em segundo plano sem interromper o fluxo principal de código. Ao fim de sua execução ela é retornada através do Event Loop, possibilitando a continuação do fluxo da aplicação.

## Event Loop

O Event Loop (fila de eventos) é um recurso do Node, responsável por enviar novas funções a uma pilha de processamento (call stack), elas são resolvidas de forma assíncrona e ao terminar, retorna ao fluxo principal de execução do código.

<img title="" src="https://blog.softup.co/content/images/2020/08/how.png" alt="" height="" data-align="center" width="470">

## Callback

    Uma callback é uma função que será disparada quando e se um evento acontecer, ela é chamada dentro de outra função para realizar uma rotina ou ação determinada, a mesma pode ser executada de forma síncrona ou assíncrona. 