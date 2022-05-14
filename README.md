 
# **{Reprograma} Semana 7 - Eventos** 🎆🎇🚀

 ## Assuntos em sala: Event Loop, Callbacks, Promises e Async/Await
 <div align = center>
<img src="https://media.giphy.com/media/k9f7dOtHdqT7DQ2Wdb/giphy.gif" width="250px" />
</div>

----------
  
### 📝 **Programação síncrona e assíncrona:**
Para entender a diferença entre as duas é preciso imaginar que vamos a um restaurante, um garçom chega a uma mesa, anota o pedido e o entrega na cozinha. Em seguida, eles passam para o pedido em outra mesa, enquanto o chef prepara a refeição. Assim, a mesma pessoa pode servir as várias mesas diferentes. A mesa tem que esperar o chef cozinhar uma refeição antes de servir outra mesa. Esse é um exemplode programação assíncrona ou sem bloqueio. Aqui, o garçom é como um encadeamento alocado para lidar com solicitações. Portanto, um único thread é usado para lidar com várias solicitações.

Agora imagine que você vai a outro restaurante e neste restaurante, um garçom é escolhido para você. Ele pega seu pedido e o entrega na cozinha. Agora ele está sentado na cozinha esperando o chef preparar sua refeição e desta vez ele não está fazendo mais nada, ele está apenas esperando, ele não vai pegar nenhum pedido de outra mesa até que sua refeição esteja pronta. Isso é o que chamamos de programação síncrona. 

O primeiro exemplo de restaurante representa um processo assíncrono porque você não precisa esperar, o garçom pega o pedido de uma mesa e vai para a próxima para anotar o pedido. Já o segundo restaurante do exemplo representa uma operação síncrona porque foi necessário esperar até que o recurso (garçom neste caso) pudesse prosseguir com o seu pedido. 

----------

### 📝 **Event Loop**
<div>
<img src="https://media.giphy.com/media/xThuWu82QD3pj4wvEQ/giphy.gif" width="100px" />
</div>
É um loop simultâneo de thread única, sem bloqueio e de forma assíncrona( olha o assunto de cima aparecendo aí). Imagine uma solicitação web que faz uma pesquisa no banco de dados. Uma única thread só pode fazer uma coisa de cada vez. Em vez de aguardar a resposta do banco de dados, ele continua seleciondo outras tarefas na fila.  O event loop não espera que uma solicitação seja concluído, mas pega retornos de chamada conforme eles vêm, sem bloqueio.O event loop em si é semi-infinito, o que significa que se a pilha de chamadas ou a fila de retorno de chamada estiverem vazias, ele pode sair do loop. 

-------------


### 📝 **Callbacks**
Segue a 🧵: Em JavaScript, funções são objetos. Assim, podemos passar objetos para funções como parâmetros.

Também podemos passar funções como parâmetros para outras funções e chamá-las dentro das funções externas. Então callback é uma função que é passada para outra função. Quando a primeira função estiver concluída, ele executará a segunda função.
<div>
<img src="https://media.giphy.com/media/Q8OnVOm51ws5BotlE3/giphy.gif" width="300px" />
</div>

---------
### 📝 **Promises**
Definem uma ação que vai ser executada no futuro, ou seja, ela pode ser resolvida (com sucesso) ou rejeitada (com erro).
<div>
<img src="https://miro.medium.com/max/1400/1*3mkj8gsg3h2HjV17qV-fKQ.jpeg" width="300px" />
</div>

_________


### 📝 **Async/Await**
É uma sintaxe que foi adicionada para poder facilitar a escrita do _then_ e _catch_.É uma das formas de se trabalhar o processamento assíncrono, simplificando a programação assíncrona. O _async/await_ trabalha com o código baseado em Promises, porém esconde as promessas para que a leitura seja mais fluída e simples de entender.
Definindo uma função como async, podemos utilizar a palavra-chave await antes de qualquer expressão que retorne uma promessa. Dessa forma, a execução da função externa (a função async) será pausada até que a Promise seja resolvida.
A palavra-chave await recebe uma Promise e a transforma em um valor de retorno (ou lança uma exceção em caso de erro). Quando utilizamos await, o JavaScript vai aguardar até que a Promise finalize. Se for finalizada com sucesso, o valor obtido é retornado. Se a Promise for rejeitada, é retornado o erro lançado pela exceção.

-------


#### 🤯 _No final de tudo, percebe-se que todos os assuntos dessa aula estão interligados, ou dependem um do outro para "existir"._ 🚀
<div align=center>
<img src="https://media.giphy.com/media/l0HlEEwgZfgqfH70c/giphy.gif" width="300px" />
</div>








