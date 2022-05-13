<h1> 🚀 Event Loop, Callbacks, Promises e Async/Await 🚀 </h1>

🪐 O que é programação síncrona;

São funções que, quando chamadas, pausam a thread principal (script) para realizar seu processamento, depois retorna o valor final e continua a execução da linha de código na sequência;

🪐 Programação assíncrona;

Cria uma thread paralela, que será executada em segundo plano sem interromper o fluxo principal, logo toda função que depende de alguma execução externa e/ou possuem timer para retornarem, são executadas em background e ao fim serão retornadas através do Event Loop, tornando possível a continuação do fluxo da aplicação já que não trava o script (thread principal);

🪐 Event Loop;

A fila de eventos (Event Loop) é responsável por enviar novas funções que foram resolvidas de forma assíncrona para a trilha principal de processamento (Call Stack), seguindo a estrutura de dados da fila (Callback Queue) assim mantendo a sequência correta de execução dos eventos/funções.

🪐 Callbacks

A função de retorno de chamada geralmente é usada como parâmetro para outra função. A função que recebe a função de retorno de chamada como parâmetro normalmente está buscando dados de um banco de dados, baixando um arquivo, fazendo uma solicitação de API ou concluindo alguma outra tarefa que poderia bloquear o thread de código por um período de tempo notável.

🪐 Promises;

Uma promessa é um objeto que representa algo que estará disponível no futuro. Na programação, esse "algo" são os valores. Promessas propõem que ao invés de esperar pelo valor que queremos, recebamos algo que represente o valor naquele instante para que possamos "continuar com nossas vidas" e depois em algum momento voltar e usar o valor gerado por essa promessa.

Promise retorna um método then e outro catch , utilizamos o then para tratar quando queremos resolver a Promise, e o catch quando queremos tratar os erros de uma Promise rejeitada. Tanto then quanto catch retornam outra Promise e é isso que permite que façamos o encadeamento de then.then.then.

As promessas são baseadas em eventos temporais e possuem alguns estados que classificam esses eventos:


| Estado | Significado |
| --- | --- |
| Pending | Estado inicial, quando a promise ainda está em execução - Não resolveu ou rejeitou. |
| Fulfilled| Quando executou todas as operações com sucesso.|
| Rejected | Quando a execução finalizou com erro, falhou.|
| Settled  | Nome genérico para estado final de executado, independente de ter retornado sucesso ou erro.|
|

Cria-se uma promise a partir da função construtora Promise passando como argumento uma callback que por sua vez recebe como argumentos os dois resultados possíveis para a promise: resolve ou rejeit, duas outras funções que executam o possível sucesso ou erro da promessa, respectivamente;

* resolve ( ): Função que executa caso a promise seja resolvida;
* reject ( ): Função que executa caso a promise seja rejeitada;

Resolvemos as promises através de métodos próprios, que chamam as callbacks depois da conclusão da promise

* then( ): Método que ativa uma callback quando a promise for resolvida, o argumento desta callback é sempre o valor retornado na função resolve( );

* catch( ): Método que ativa uma callback quando a promise for rejeitada, o argumento desta callback é sempre o valor retornado na reject( );

* finally( ) - Método que ativa uma callback quando a promisse acabar, independente de ter sido resolvida ou rejeitada, não recebe como argumento o retorno de resolve( ) ou reject( );

Promise Hell é são promessas dentro de outras promessas, Imagina que você precisa encadear várias funções e uma depende da outra.


🪐 Async/Await.

Async e await são keywords que foram introduzidas no ES8 em 2017. Basicamente é um syntax sugar (uma firula de linguagem que foi adicionada somente para poder facilitar a escrita) do then e catch .

O motivo pela adição do async/await foi o mesmo da adição das Promises no JavaScript, o callback hell. Só que dessa vez tínhamos o Promise hell, onde ficávamos aninhando Promises dentro de Promises eternamente e isso tornava tudo muito mais difícil de se ler.

A proposta de funções assíncronas é justamente nivelar todo mundo em um único nível


🎯 Referências:

* https://github.com/lilitbandeira/ON15-TET-S7-ASSINCJS
* https://github.com/reprograma/On16-TodasEmTech-S7-Eventos
* https://medium.com/balta-io/nodejs-async-await-21ca3636252a
* https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2
* https://blog.avenuecode.com/callback-hell-promises-and-async/await

