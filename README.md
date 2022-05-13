# Semana 7 {Reprograma} 

## Assuntos abordados

* Programação sícrona e assíncrona
* Event Loop
* Callback
* Promisses
* Async/Await



## PROGRAMAÇÃO SÍNCRONA E ASSÍNCRONA:
Síncrona: O código realiza funções uma de cada vez, de cima para baixo.

Assíncrono: Pode iniciar o processo e finalizar posteriormente. Ou seja, espera uma função terminar para começar outra.


## EVENT LOOP: 
Recurso da arquitetura do Node, event loop é um loop simultâneo de thread única, sem bloqueio e de forma assíncrona. No event loop, o loop principal desenrola a pilha de chamadas e não espera os retornos de chamada. Como o loop não bloqueia, é possível fazer mais de uma solicitação web por vez.


## CALLBACK:
A função call back é usada como parâmetro para outra função. Contribuindo para um bom processamento assíncrono.


## PROMISSES:
É uma classe de funções assíncronas que deixa, com a função de guardar um valor a ser exibido no futuro `(resolve)` ou não `(reject)`


## ASYNC/AWAIT:
Usando as palavras async e await, é possível simplifica a programação assíncrona, facilitando o fluxo de escrita e leitura do código; assim é possível escrever código que funciona de forma assíncrona, porém é lido e estruturado de forma síncrona. 