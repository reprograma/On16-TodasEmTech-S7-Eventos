# ON16-Resumo semana 7

A seguir será apresentado o resumo dos principais tópicos apresentados nas aulas da semana 7 na turma ON16 - Todas em Tech.

---



## JS Síncrono e Assíncrono

Quando utilizamos o JS de foma síncrona, é utilizada apenas uma thread, sendo assim, quando uma função é executada, ela pausa a thread principal para realizar o seu processamento e depois retorna o valor final. Após isso as outras linhas do código vão sendo executadas sempre dessa forma, seguindo a ordem que foram digitadas.

Já na forma assíncrona uma thread paralela é criada, e executada em segundo plano, sem interromper o fluxo principal. Sendo assim, todo o código é rodado e as funções que dependem de alguma função externa (como buscar informações em banco de dados) são executadas em uma thread paralela e no fim retornam por meio do **EventLoop**, sendo possível a continuação do fluxo, sem travar a thread principal.

### Event Loop

Event Loop ou fila de eventos envia as funções que vão sendo resolvidas de forma assíncrona para a thread principal de processamento, a **Call Stack**, mantendo a sequência correta de execução das funções e eventos.

### Callback

Callback é uma forma de lidar com a execução assíncrona dentro da linguagem JavaScript na qual uma função é passada como argumento de outra função e depois é  invocada dentro da função externa para completar algum tipo de rotina ou ação. Podem ser usadas dentro de um bloco **.then()** encadeado ao final de uma promessa após essa promessa ser cumprida ou rejeitada.

## Promises

Promise, ou promessa, é um objeto usado para processamento assíncrono, podendo ou não ser cumprida. Uma promise representa um proxy para um valor que não é necessariamente conhecido quando a promessa é criada. Isso permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha. Isto permite que métodos assíncronos retornem valores como métodos síncronos: em vez do valor final, o método assíncrono retorna uma promessa ao valor em algum momento no futuro.

## Async/Await

Uma função assíncrona pode conter uma expressão **await**, que pausa a execução da função assíncrona e espera pela resolução da promise passada, e depois retoma a execução da função assíncrona e retorna o valor resolvido.

A proposta das funções async/await é de simplificar o uso de forma síncrona das promises e executar alguns procedimentos em um grupo de promises, evitando assim o que é chamado de **Promise Hell**.

---

*fonte: mdn web docs, medium, repositórios das aulas da Reprograma *


