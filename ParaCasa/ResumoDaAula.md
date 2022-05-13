
# Resumo do que foi passado em aula na semana 7 🖥️

Os assuntos passados em aula na semana 7 foram: definição de programação síncrona e programação assíncrona , Event loop, Callbacks, promises e async await. 

## Programação síncrona 🖱️

Quando nos referimos a síncrono e assíncrono isso diz respeito ao fluxo de execução de um programa. 
Execução síncrona é quando uma operação executa completamente antes de passar o controle para a seguinte. 

## Programação assíncrona💻
Na programação assíncrona, a sequência  com que seu código é escrito é diferente da sequência  em que é executado, por isso é essencial resolver de maneira apropriada a sequência com que seu código é elaborado para evitar problemas.

## Event loop ⌨️

call stack - é como se fosse a fila
enquanto for funcionando ele vai empilhando, no que dar erro ele volta para o começo, e ele vai fazendo o loop até funcionar, quando funcionar de fato, ele vai limpar minha fila (então ele vai limpar a call stack) e vai dar o meu retorno final. (process#exit)
chamo minha aplicação e ele vai executando as minhas funções.

Resumindo event loop é encarregado por encaminhar novas funções que foram realizadas de maneira assíncrona para a trilha predominante de processamento, percorrendo a ordem dos dados na fila, para manter a ordem correta da aplicação dos eventos  

## Callback 🖥️
Função passada como parâmetro  para outras funções, a função callback  demora um tempo para produzir um resultado. Ela permite amplificar a potência do JavaScrip, usaremos ela como uma arrow function. A função callback é realizada após o evento. Possibilita um fluxo assíncrono.

## Promises 🖱️
Promise é um objeto. Promises possuem dois parâmetros (resolve e reject)
reolve - 

Os estados de vida das promises são: Pending (ainda não resolveu mas também não rejeitou ), Fulfilled (operações realizadas com sucesso), Rejected ( quando há uma falha na execução), Settled ( independente de ter retornado sucesso ou erro)

## async Await 🤖

A intenção da função async await é facilitar as promises
Um fato importante  é que o await é utilizado antes de uma chamada de uma Promise, só que ela só pode ser utilizada dentro de uma função com o async.
O await é posicionado na frente de qualquer função assíncrona com o intuito de  parar  o código até que a promise seja solucionada , regressando o valor resultante.

<img src=https://thumbs.gfycat.com/AcrobaticOrganicAsianwaterbuffalo.webp width="250" height="250" /> </h4> <br>










