### Conteúdos aprendidos nesta semana 🖥️
* Eventos loop
* Callbacks, promisses
* Async, await

### Breve explicação sobre cada tópico

![](<iframe src="https://giphy.com/embed/ule4vhcY1xEKQ" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/reactionseditor-cat-typing-ule4vhcY1xEKQ">via GIPHY</a></p>)

## Eventos Loop
O JavaScript possui um modelo de concorrência baseado em um event loop (laço de eventos), em português), responsável pela execução do código, coleta e processamento de eventos e execução de subtarefas enfileiradas. Este modelo é bem diferente de outras linguagens, como C ou Java, por exemplo.
Uma propriedade muito interessante do modelo event loop é que o JavaScript, ao contrário de muitas outras linguagens, nunca bloqueia. A manipulação de E/S (I/O) é tipicamente realizada através de eventos e callbacks. Portanto, quando uma aplicação está esperando pelo retorno de uma consulta do IndexedDB ou de uma requisição XHR, ela ainda pode processar outras coisas, como as ações do usuário.


## Função Callback
Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
Ou seja, callback é um tipo de função que só é executada após o processamento de outra função. Na linguagem JavaScript, quando uma função é passada como um argumento de outra, ela é, então, chamada de callback.

Isso é importante porque uma característica dessa linguagem é não esperar o término de cada evento para a execução do próximo. Portanto, ela contribui para controlar melhor o fluxo de processamento assíncrono. 

## Síncrono
Síncrono refere-se a comunicação em tempo real onde cada parte recebe ( e se necessário, processa e responde) mensagens instantaneamente (ou o mais próximo possível do instantâneo).
Muitos comandos de programação são também síncronos — por exemplo quando você digita um cálculo, o ambiente irá retornar o resultado para você instantaneamente, a menos que você programe para não fazer.

## Assíncrono
Assíncrono refere-se a um ambiente de comunicação onde cada parte recebe e processa mensagens quando for conveniente ou possível em vez de imediatamente.
Isto pode ser usado para descrever um ambiente de comunicação humana como o e-mail — o remetente enviará um e-mail, e o destinatário irá responder quando for conveniente; eles não precisam responder imediatamente.

## Promise
Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
Uma Promise representa um proxy para um valor que não é necessariamente conhecido quando a promessa é criada. Isso permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha. Isto permite que métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, o método assíncrono retorna uma promessa ao valor em algum momento no futuro.

# Um Promise está em um destes estados: 

pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
fulfilled (realizada): sucesso na operação.
rejected (rejeitado):  falha na operação.
Uma promessa pendente pode se tornar realizada com um valor ou rejeitada por um motivo (erro) Quando um desses estados ocorre, o método then do Promise é chamado, e ele chama o método de tratamento associado ao estado (rejected ou resolved).  Se a promessa foi realizada ou rejeitada quando o método de tratamento correspondente for associado, o método será chamado, desta forma não há uma condição de competição entre uma operação assíncrona e seus manipuladores que estão sendo associados.






REFERÊNCIAS:
1. https://developer.mozilla.org/pt-BR/docs
2. https://blog.betrybe.com/tecnologia/callback/