## Semana 7: Event Loop, Callbacks, Promises e Async/Await

Na semana sete do reprograma, aprendemos conceitos importantes sobre
javascript. Principalmente no que se refere a programação assíncrona.

## Event loop

<div align-"center">
<img src="https://media.giphy.com/media/FGnCkFfcHXaGk/giphy.gif" width="250px"/>
</div>

O Event loop é um recurso da arquitetura do node. Ele permite que o código seja lido de maneira assíncrona. Isso significa que o código é lido e executado sem interrupções, mesmo que a tarefa anterior ainda não tenha sido concluída. 

Isso nos ajuda a evitar problemas de concorrência, garantindo assim a execução do código. A ações do Event loop são organizadas em uma call stack, que é como se fosse a fila do Event loop. As callbacks ficam guardadas para serem executadas em uma event/task/message Queue.

## Programação síncrona e assíncrona (sync e assync)

Forma síncrona: O  codigo espera ser totalmente executado para prosseguir.

Forma assíncrona: O código continua progredindo e em um ponto futuro obtém a resposta da execução assíncrona.

Exemplo: O saque imediato no banco, sem a consulta do saldo, é um exemplo de operação
assíncrona.

## Callback

A função callback é uma função que vai servir de parâmetro de outra função. É comumente escrita como uma arrow function.

<div align-"center">
<img src="https://miro.medium.com/max/1182/1*0qLKSkNOyN7-6hG5jZPVew.jpeg" width="400px"/>
</div>

Quando a primeira função é chamada, a callback acontece logo depois. A callback é o padrão assíncrono mais comum no JavaScript, sendo a base para lidar com execuções assíncronas na linguagem.

### Promises

Na vida real, promessas são garantias de que futuramente alguma coisa vai acontecer. Porque uma promessa só é cumprida no futuro. 

<img src="https://media.giphy.com/media/o7XS3Jo9yGaW6eL24J/giphy.gif" width="250px"/>

_"Você prometeu"_

As promises do Javascript também funcionam assim, pois quando definimos uma promise no Javascript, ela vai se resolver em um determinado período de tempo no futuro, podendo ser aceita(resolvida) ou rejeitada. A função principal das promises é lidar com a assincronicidade através de estados.

Funções assíncronas modernas retornam uma promise que representa a eventual falha ou conclusão de uma operação assíncrona, assim uma função assíncrona retorna um valor como uma função síncrona, porém no lugar do valor final, retorna uma promessa ao valor em algum momento no futuro.

O problema das promises é que o encadeamento de várias funções pode levar ao "promise hell".

## Async/Await

A função Async/Await é um modo de se escrever coisas síncronas de forma assíncrona.
Toda função que recebe o async se torna uma função assíncrona, que passa a retornar uma promise ao invés de retornar um valor diretamente, como uma promise o retorno desta função pode ser tratado com um then() normalmente. 

Uma função assíncrona espera a possibilidade de a palavra-chave await ser usada para invocar código assíncrono.

E esse foi todo o conteúdo aprendido na semana 7! Foi uma semana cansativa, mas bastante esclarecedora.

