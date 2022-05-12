

# On16-TodasEmTech-S7-Eventos

## Turma Online Todas em Tech - Back-end | Semana 7: Event Loop, Callbacks, Promises e Async/Await


### Assuntos falado em sala: 

## 📝 Callback vs Promises vs Async Await



 <img src="https://user-images.githubusercontent.com/100974682/167975928-99cd4e0e-f853-4ee1-9490-2bf2c6425321.jpg" alt="Gif Yeah" width="400">
  


### Os conceitos fundamentais dos quais o JavaScript se baseia para lidar com operações assíncronas. Esses conceitos incluem retornos de chamada, promessas e o uso de Async e Await para lidar com operações

## Diferença entre sincronização e assíncrona

Para facilitar o entendimento, vamos dar um exemplo ao vivo que provavelmente explicará a diferença entre assíncrono e síncrono.

Imagine que vamos a um restaurante, um garçom chega a uma mesa, anota seu pedido e o entrega na cozinha. Em seguida, eles passam para o servidor em outra mesa, enquanto o chef prepara a refeição. Assim, a mesma pessoa pode servir as várias mesas diferentes. A mesa tem que esperar o chef cozinhar uma refeição antes de servir outra mesa. Isso é o que chamamos de arquitetura assíncrona ou sem bloqueio. Aqui, o garçom é como um encadeamento alocado para lidar com solicitações. Portanto, um único thread é usado para lidar com várias solicitações.

Em contraste com a arquitetura não bloqueante ou assíncrona, temos a arquitetura bloqueante ou síncrona. Vamos ver como isso funciona. Então, voltando ao exemplo do restaurante, imagine que você vai a outro restaurante e neste restaurante, um garçom é alocado para você. Ele pega seu pedido e o entrega na cozinha. Agora ele está sentado na cozinha esperando o chef preparar sua refeição e desta vez ele não está fazendo mais nada, ele está apenas esperando, ele não vai pegar nenhum pedido de outra mesa até que sua refeição esteja pronta. Isso é o que chamamos de arquitetura síncrona ou de bloqueio.

Agora, o primeiro exemplo de restaurante representa um processo assíncrono porque você não precisava esperar, o garçom pega o pedido de uma mesa e vai para a próxima mesa para anotar o pedido. Enquanto o segundo restaurante de exemplo representa uma operação síncrona porque você teve que esperar até que o recurso (garçom neste caso) pudesse prosseguir com você. Essa é a diferença mais fundamental entre os processos de sincronização e assíncrono.

Uma coisa importante a ter em mente é que os sistemas de tratamento de eventos de thread único geralmente são implementados usando um evento ou fila de mensagens. Assim, quando um programa está sendo executado de forma síncrona, a thread aguardará até que a primeira instrução seja concluída para pular para a segunda, enquanto na execução assíncrona, mesmo que a primeira não tenha sido concluída, a execução continuará.

Existem diferentes maneiras de lidar com o código assíncrono. Esses são retornos de chamada, promessas e async/await.

## Retornos de chamada:
Em JavaScript, funções são objetos. Assim, podemos passar objetos para funções como parâmetros.

Também podemos passar funções como parâmetros para outras funções e chamá-las dentro das funções externas. Então callback é uma função que é passada para outra função. Quando a primeira função estiver concluída, ele executará a segunda função.

Existe um método embutido em JavaScript chamado “setTimeout”, que chama uma função ou avalia uma expressão após um determinado período de tempo (em milissegundos).

Em outras palavras, a função de mensagem está sendo chamada depois que algo aconteceu (depois de 3 segundos para este exemplo), mas não antes. Portanto, o retorno de chamada é a função que é passada como argumento para setTimeout.

## Retorno de chamada como uma função de seta:

Se preferir, você também pode escrever a mesma função de retorno de chamada acima como uma função de seta =>, que é um tipo mais novo de função em JavaScript.

O problema com os callbacks é que eles criam algo chamado “Callback Hell”. Basicamente, você começa a aninhar funções dentro de funções dentro de funções, e começa a ficar muito difícil ler o código. Portanto, nesta situação, o Promises passou a lidar com o retorno de chamada aninhado de uma maneira melhor.

## Promessas
Uma promessa em JavaScript é semelhante a uma promessa na vida real. Quando fazemos uma promessa na vida real, é uma garantia de que faremos algo no futuro. Porque promessas só podem ser feitas para o futuro.

Uma promessa tem dois resultados possíveis: ou será mantida quando chegar a hora ou não.

Isso também é o mesmo para promessas em JavaScript. Quando definimos uma promessa em JavaScript, ela será resolvida quando chegar a hora ou será rejeitada. Parece a condição IF. Mas há grandes diferenças entre eles.

Uma promessa é usada para manipular o resultado assíncrono de uma operação. O JavaScript foi projetado para não esperar que um bloco de código assíncrono seja executado completamente antes que outras partes síncronas do código possam ser executadas. Com Promises, podemos adiar a execução de um bloco de código até que uma solicitação assíncrona seja concluída. Dessa forma, outras operações podem continuar em execução sem interrupção.

## Estados de promessas:

Em primeiro lugar, uma Promise é um objeto. Existem 3 estados do objeto Promise:

- Pendente: Estado inicial, antes que a Promessa seja bem-sucedida ou falhe.
 - Resolvido: Promessa Concluída
 - Rejeitado: promessa falhada, lança um erro

Por exemplo, quando solicitamos dados do servidor usando um Promise, ele ficará em modo pendente até recebermos nossos dados.

Se conseguirmos obter as informações do servidor, a Promessa será resolvida com sucesso. Mas se não obtivermos as informações, a Promessa estará no estado rejeitado.

### Criando uma promessa:

Primeiramente, usamos um construtor para criar um objeto Promise. A promessa tem dois parâmetros, um para sucesso (resolver) e outro para falha (rejeitar).

### Usando promessa:

Para usar a promessa de criação, usamos then()para resolver e catch()para rejeitar.

## Assíncrono/Aguardar:
Await é basicamente açúcar sintático para Promises. Isso faz com que seu código assíncrono pareça mais com código síncrono/procedural, que é mais fácil para os humanos entenderem.rsr

Você pode ver que usamos a palavra-chave “async” para a função. Isso permite que o JavaScript saiba que estamos usando a sintaxe async/await e é necessário se você quiser usar Await. Isso significa que você não pode usar Await em nível global. Ele sempre precisa de uma função wrapper. Ou podemos dizer que await é usado apenas com uma função assíncrona.

A palavra-chave await é usada em uma função assíncrona para garantir que todas as promessas retornadas na função assíncrona sejam sincronizadas, ou seja. eles esperam um pelo outro. Await elimina o uso de callbacks em .then() e .catch(). Ao usar async e await, async é anexado ao retornar uma promessa, await é anexado ao chamar uma promessa. try e catch também são usados ​​para obter o valor de rejeição de uma função assíncrona.



## uhulll 🥰

## Conclusão:

Neste tutorial, entendemos o conceito de callback, Promise e Async/Await. Sabemos como eles podem trabalhar com solicitações assíncronas de javascript. Principalmente eles usaram API Request e manipulação de eventos.

![bebe](https://user-images.githubusercontent.com/100974682/167978711-3c0b4a06-6cd6-4c1f-99f5-19b62dd58fca.jpg)

 ** Segue minhas redes sociais.**
- [linkedin](https://www.linkedin.com/in/b%C3%A1rbara-gon%C3%A7alves-211b5691/)
- [github](https://github.com/idbabis) 
- e-mail: idbabis@gmail.com

