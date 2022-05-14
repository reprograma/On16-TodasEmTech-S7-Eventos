# Este é um resumo sobre o que aprendi na semana.

## Iremos falar sobre:

- [ ] Event Loop

- [ ] Callback

- [ ] Promises

- [ ] Async/ Await

<img src = "https://i.pinimg.com/originals/1a/8d/69/1a8d69b5393d8e7dc7f4495f7999dc60.gif">

O `Node.js` normalmente executa a leitura escrita do código uma linha por vez de cima para baixo. Existem duas formas de executar os métodos:

- `Funções síncronas:` 
  
  A leitura do código é realizada e quando existe uma função a ser chamada, a leitura é pausada de forma que espera realizar o processamento, retornando o valor e continuando a execução da linha de código;

- `Funções assíncronas:` 
  
  Quando uma função é chamada, ela é executada em segundo plano sem interromper o fluxo principal de código. Ao fim de sua execução ela é retornada através do Event Loop, possibilitando a continuação do fluxo da aplicação.

## Event Loop

O `Event Loop` (fila de eventos) é um recurso do Node, responsável por enviar novas funções a uma pilha de processamento (call stack), elas são resolvidas de forma assíncrona e ao terminar, retorna ao fluxo principal de execução do código. Exemplo:

<img title="" src="https://blog.softup.co/content/images/2020/08/how.png" alt="" height="" data-align="center" width="470">

## Callback

    Uma `callback` é uma função que será disparada quando e se um evento acontecer, ela é chamada dentro de outra função para realizar uma rotina ou ação determinada, a mesma pode ser executada de forma síncrona ou assíncrona. 

## Promises

A `Promise` é um objeto do JavaScript que tem como função lidar com a assincronicidade das funções que precisam ser buscadas e retornadas.

<img title="" src="https://media.prod.mdn.mozit.cloud/attachments/2014/09/18/8633/51a934a714e191f53e588bff719bc321/promises.png" alt="" data-align="center">

Uma promise tem como objetivo retornar um estado a uma determinada operação assincrona sendo a conclusão ou falha. Ela recebe 2 parametros callbacks, que são resolve e reject; usa-se o then quando o resolve é chamado e o catch quando o reject é chamado. Exemplo:

<img title="" src="https://miro.medium.com/max/1204/1*6-gGRbAdzeK5k-XXiB3LbA.png" alt="" width="366" data-align="center">

## Async/ Await

O `Async` e `Await` é uma forma de chamar uma promise, elas foram criadas para facilitar a visualização e leitura de um código assíncrono, porem a leitura e estrutura desse código será de forma síncrona. 

O `async` é função assíncrona que retorna uma promise e o `await`  espera até que a promise seja finalizada e retorna o código a ser executado. Ele permite aguardar a chamada antes de prosseguir. Exemplo:

<img title="" src="https://miro.medium.com/max/694/1*dkwXdYb9-RVLUieI_R58Kw.png" alt="" width="544" data-align="center">

---

<img title="" src="https://img.wattpad.com/099211404862675569d74825f742294e79998c9b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5f6853396374673747794e504b773d3d2d3934363631313633332e313633333832613233313630613864343334343734353436333332322e676966" alt="" width="363">

### Obrigada e “Plus Ultra”.