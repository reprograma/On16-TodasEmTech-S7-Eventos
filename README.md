
# 🪐 On16-TodasEmTech-S7-Eventos
Esse repositório compõe a atividade da setima semana do curso de Back-end da {Reprograma}. Atividade sobre API 2 (promisse, event loop, callbacks, Async/Await. Em conjunto a um exercicio de exemplo  que pode ser encontrado em:
```
 📁 para_casa
   |- 📄 atividadeParaCasa.js
```

## Para casa
Abra o PullRequest respondendo as seguintes questões:

 ----
 
### ☂️ Programação síncrona
````
A programação sincrona carrega os recursos única e sequencialmente, de modo que, quando um recurso ou componente superior na hierarquia falha ao carregar, aqueles abaixo dele não respondem. São funções que, quando chamadas, pausam a thread principal (script) para realizar seu processamento, depois retorna o valor final e continua a execução da linha de código na sequência;  
````


### 🌈 Programação assíncrona
````
Ao contrário da programação síncrona,um programa assíncrono cria uma thread paralela, que será executada em segundo plano sem interromper o fluxo principal, não executa operações hierarquicamente. Logo toda função que depende de alguma execução externa e/ou possuem timer para retornarem, são executadas em background e ao fim serão retornadas através do Event Loop, tornando possível a continuação do fluxo da aplicação já que não trava o script (thread principal), ssim, o programa não esperará pela execução de uma solicitação antes de responder com outra. A leitura do codigo é feita na ordem que foi escrita - o node entra na função fazeendo o pedido e esperarando o resultado da função;
````

### 💅 Event Loop
````
O Node.js é guiado por eventos, termo também conhecido como Event Driven. Esse conceito já é bastante aplicado em interações com interface de usuário. O JavaScript possui diversas APIs baseadas em eventos para interações com o DOM, por exemplo. Ele, em suma, é responsavel por enviar novas funções que foram resolvidas de forma assíncrona para a trilha principal de processamento (Call Stack), seguindo a estrutura de dados da fila (Callback Queue) assim mantendo a sequência correta de execução dos eventos/funções;
````

### 🏳️‍🌈 Callbacks
````
A callback é um parametro da assincrona ou sincrona, uma função de retorno de chamada geralmente é usada como parâmetro para outra função. A função que recebe a função de retorno de chamada como parâmetro normalmente está buscando dados de um banco de dados (nao necessariamente a ordem que a gente escreve é a ordem que vai aparecer no console (fluxo diferente do costume ate agora) baixando um arquivo, fazendo uma solicitação de API ou concluindo alguma outra tarefa que poderia bloquear o thread de código por um período de tempo notável;
````

#### 🧠 Promises
````
Uma promessa é um objeto que representa algo que estará disponível no futuro. Na programação, esse "algo" são os valores. Uma Promise representa um proxy para um valor que não é necessariamente conhecido quando a promessa é criada. Isso permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha. Isto permite que métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, o método assíncrono retorna uma promessa ao valor em algum momento no futuro

Promisse é um objeto do javascript que tema função de lidar com assincronidade atraves de uma possibilidade. Um Promise está em um destes estados:
````
| Estado | Significado |
| --- | --- |
| Pending | Estado inicial, que não foi realizada nem rejeitada|
| Fullfilled | sucesso na operação |
| Rejected | falha na operação |
|


#### 🌞 Async/Await
````
É forma de ler o resucrso assincrono mais didatico. Definindo uma função como async, podemos utilizar a palavra-chave await antes de qualquer expressão que retorne uma promessa. Dessa forma, a execução da função externa (a função async) será pausada até que a Promise seja resolvida. A palavra-chave await recebe uma Promise e a transforma em um valor de retorno (ou lança uma exceção em caso de erro). Quando utilizamos await, o JavaScript vai aguardar até que a Promise finalize. Se for finalizada com sucesso (o termo utilizado é fulfilled), o valor obtido é retornado. Se a Promise for rejeitada (o termo utilizado é rejected), é retornado o erro lançado pela exceção.  
````
----
 ###  *`Referencias`* <br>  


**Tecnoguia:** [Programação síncrona vs. programação assíncrona: como são diferentes?](https://tecnoguia.istocks.club/programacao-sincrona-vs-programacao-assincrona-como-sao-diferentes/2021-04-28/#:~:text=Ao%20contr%C3%A1rio%20da%20programa%C3%A7%C3%A3o%20s%C3%ADncrona,elas%20estiverem%20em%20fun%C3%A7%C3%B5es%20diferentes)

**Imasters:** [Node.js: o que é esse Event Loop, afinal?](https://imasters.com.br/front-end/node-js-o-que-e-esse-event-loop-afinal)

**Developer Mozilla:** [Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)

**Alura** [Async/await no JavaScript](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar)

----
<h2 align="center"> Sentimento da semana 🤔 <br>

<p align="center">
  <img src="https://64.media.tumblr.com/b6ad38e44c5f1b58ed135f8370da9766/tumblr_n0fxy8bOZv1qfdneyo1_400.gifv" width= "300px"/>
</p>


