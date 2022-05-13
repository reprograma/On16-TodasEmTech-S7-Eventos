## EVENT LOOP: :loop:

A chave que torna o Node.js tão eficiente é o conceito de Event Loop, com grande responsabilidade o Event Loop é basicamente um loop infinito, que a cada iteração verifica se temos eventos a serem executados na Task Queue, onde ele pega o evento e manda pra ser executado na Call Stack. Sua performance se dá pela forma que ele é executado, de forma não bloqueante.


## CALLBACK: :calling::back:

Trata-se de uma função ou URL que é executada quando algum evento acontece ou depois que algum código chega ao estado desejado. Também conhecido como função de retorno, o Callback cria regras dentro de outras funções para que sejam utilizadas no futuro.

## PROMISSE: :raised_hands:	:pray:

Uma Promise representa um proxy para um valor que não é necessariamente conhecido quando a promessa é criada. Isso permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha. Isto permite que métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, o método assíncrono retorna uma promessa ao valor em algum momento no futuro.

## ASYNC/AWAIT: :exploding_head:

1 - Async. Essa palavra pode ser usada ao criar uma função convencional. Quando adicionamos esse identificador na criação desta função, nós definimos que ela será uma função assíncrona, e o melhor, retornará uma promessa! Quando usarmos a expressão return estaremos, na realidade, resolvendo uma promessa.

2 - Await. Essa palavra será usada com o objetivo de esperar a resolução de uma função assíncrona. Se houver uma série de funções assíncronas, a expressão await definirá que o código só terá sequência quando a função anterior for resolvida. Um detalhe muito importante: a expressão await só será aceita em uma função que já for assíncrona, ou seja, que possuir o identificador async em seu início.





