*Semana 7 - EventLoop, Callbacks, Promises e Async/Awit*

Anterior a todos os conceitos, o entendimento de que o Node.JS tem dois modos de leitura do código, foi um princípio norteador para o entendimento dos eventos. A forma de leitura de funções síncronas significa que o Node irá aguardar que cada uma das funções abertas sejam processadas e exibam seus resultados para que a próxima parte do código seja lida, no sentido de cima para baixo; Já na leitura de funções assíncronas o Node continuará lendo o código independente da finalização daquele processo aberto pelas funções. Segue-se então: 

# EventLoop 
O EventLoop significa exatamente este fluxo assíncrono, onde a leitura do código não será interrompida diante da leitura de cada função, mesmo que uma anterior não tenha sido concluída. O sentido de execução é partindo daquela que estiver pronta primeiro para ser executada. A partir desta definição, será criada a Call Stack, que funciona como uma lista paralela de espera daquelas funções que estão em execução. Estas funções em execução podem ser sícronas ou assíncronas. 

# Callbacks 
É uma função que vai ser usada como parâmetro de outra função e, além disto, ela será o retorno e o complemento daquela função onde ela está inserida. Em geral esta função é construída no formato de arrowFunction (função de seta) e é ela que se encarrega de executar as tarefas que levam mais tempo, o que permite que o Node.JS tenha o fluxo assíncrono. 

.SetTimeOut -> é uma função nativa do JS que executa o código de forma assícrona e que permite que a gente delimite em quanto tempo o seu retorno será exibido/considerado. Sendo assim, ela recebe dois paramêntros, uma função callback e o tempo em que eu quero que seja executada (em milisegundos).

# Promises 
É um objeto JavaScript onde fica guardada uma ação que será executada com uma informação quando ela chegar. A Promise é uma estrutura que deixa tudo pronto para que quando esta informação seja recebida, a função inicial seja disparada. A partir disto, a Promise tem estados como o 'resolve'(resolvido) e o 'reject'(rejeitado), que serão utilizados como parâmetros. 
"Uma Promise pode assumir quatro estados principais:

Pending: O estado inicial da Promise, ela foi iniciada mas ainda não foi realizada nem rejeitada
Fulfilled: Sucesso da operação, é o que chamamos de uma Promise realizada (ou, em inglês, resolved) — eu, pessoalmente, prefiro o termo resolvida.
Rejected: Falha da operação, é o que chamamos de uma Promise rejeitada (em inglês, rejected)
Settled: É o estado final da Promise, quando ela já sabe se foi resolved ou rejected"

Além disto, as Promises contam com métodos, como o 'then' e o 'cath':
"utilizamos o then para tratar quando queremos resolver a Promise, e o catch quando queremos tratar os erros de uma Promise rejeitada. Tanto then quanto catch retornam outra Promise e é isso que permite que façamos o encadeamento de then.then.then ." Estes métodos apresentam funcionamento similar à estrutura condicional If/Else.

# Async/Awit 
"são uma sintaxe que simplifica a programação assíncrona, facilitando o fluxo de escrita e leitura do código; assim é possível escrever código que funciona de forma assíncrona, porém é lido e estruturado de forma síncrona. O async/await trabalha com o código baseado em Promises, porém esconde as promessas para que a leitura seja mais fluída e simples de entender.

Definindo uma função como async, podemos utilizar a palavra-chave await antes de qualquer expressão que retorne uma promessa. Dessa forma, a execução da função externa (a função async) será pausada até que a Promise seja resolvida.

A palavra-chave await recebe uma Promise e a transforma em um valor de retorno (ou lança uma exceção em caso de erro). Quando utilizamos await, o JavaScript vai aguardar até que a Promise finalize. Se for finalizada com sucesso (o termo utilizado é fulfilled), o valor obtido é retornado. Se a Promise for rejeitada (o termo utilizado é rejected), é retornado o erro lançado pela exceção."

# Referências Bibliográficas
https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2

https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar