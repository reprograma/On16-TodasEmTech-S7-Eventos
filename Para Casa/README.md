
# Semana 7 - Event Loop, Callbacks, Promises, Async/Await :arrows_clockwise: #

Esta semana aprendemos os conteúdos necessários para a compreensão de programação síncrona e assíncrona, vou descrevê-los abaixo:

<br>

- **Event Loop :loop:	:**

Também chamado de laço de eventos,  no JavaScript/Node.js isso significa que o fluxo de controle do código é determinado por eventos, executados uma linha por vez em ordem, ou seja, ele pega a tarefa, executa e então espera a próxima tarefa.

<br>

- **Callbacks :speaking_head:**

Callback é uma função para ser chamada de volta quando outra função terminar. Elas podem ser usadas em eventos síncronos ou assíncronos no JavaScript.

Para a programação assíncrona, as callbacks garantem que uma função não seja executada antes de uma tarefa ser concluída, mas logo depois disso.


<br>

- **Promises :handshake:**

Uma promise é um objeto do processamento assíncrono. Como o nome diz, é uma promessa que pode retornar ou rejeitar um valor a partir do método .then. 

<br>

:fire:	:fire:	:fire: As callbacks e as promises, por causa de sua sintaxe, podem gerar um fenômeno conhecido como *callback hell* e *promise hell*, e por isso, pela boa prática, surgiu um novo comando para melhorar a escrita do código, o Async/Await.

<br>

- **Async/Await :woman_firefighter:**

Async/Await é um comando que permite executar o código assíncrono com uma sintaxe mais fácil de entender. Este comando trabalha com o código baseado em promises, porém estas ficam por "debaixo dos panos".



**Referência:**

(https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)
