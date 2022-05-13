
# **{Reprograma}** - #TodasEmTech | Backend | Turma On16 :purple_heart:

## **Semana 07:** Eventos - Event Loop, Callbacks, Promises e Async/Await. 

#

## **Conteúdo da semana** :white_check_mark: 
 - O que é programação síncrona e assíncrona;
 - Event Loop;
 - Callbacks;
 - Promises;
 - Async/Await.
 - Desafio para casa!!!

#

![monophy](https://media.giphy.com/media/XWeJDaxYa1YrK/giphy.gif)
#
## **Aprendizados da semana 07** :pencil2: 

#

### **Programação síncrona e assíncrona** : 
- **Síncrona :** São funções que ao serem chamadas, pausam a thread principal para realizar seu processamento, para então já retornar o valor final;
- **Assíncrona :** Cria uma thread secundária , para ser executada em paralelo sem atrapalhar o fluxo principal. Serão retornadas através do Event Loop; 
- **Padrão JavaScript :** A forma assíncrona, é a alternativa de solução para quando existem encadeamentos de funções dependentes das outras para serem executadas;

#

### **Event Loop :**  
- **Definição :** É um fluxo de eventos, com a responsabilidade de enviar novas funções resolvidas de forma assíncrona de volta para o fluxo principal do processamento. Desta forma assegurando a ordem correta da execução dos eventos. 

#

### **Callbacks :** 
- **Definição :** É uma função que é passada como argumento para outra função, que será invocada dentro da função externa para complementar alguma ação(podendo ser síncrona ou assíncronas);
- **Padrão :** O fluxo mais comum no JavaScript é o padrão assíncrono, portanto, sendo a base para lidar com os processamentos assíncrono em JavaScript. Seguindo esse padrão as callbacks geralmente são funções que deverão ser executadas seguidas de um evento.

#

### **Promises :** 
- **O que é :** São um conceito essencial do JavaScript, pois estão presentes na maior parte do universo da linguagem. As promises, portanto, são um padrão de desenvolvimento que focam representar a conclusão de operações assíncronas;
- **Funcionalidades :** Definem uma ação que vai ser executada no futuro, ou seja, ela poderá ser resolvida(com sucesso) ou rejeitada(com erro). Toda Promise retorna um método [then] e [catch] ;
- **Por que usar :** É em si mais uma questão de organização do código, as Promises foram um avanço para tornar possível uma melhora também na execução do nosso código;
- **O problema das Promises :** É a chamada Promise Hell, que é quando precisamos encadear várias funções e uma depende da outra, ou seja, o código ficava aninhando Promises dentro de Promises eternamente, ficando dificultosa a leitura de tal código;
- **Estados de uma Promise :** As promises podem assumir 4 estados principais que estão resumidas na tabela abaixo.



  | Estado     | Significado                                                                                  |
  | ---------- | -------------------------------------------------------------------------------------------- |
  | Pending    | Estado inicial, quando a promise ainda está em execução (não resolveu ou rejeitou)           |
  | Fulfilled  | Quando executou todas as operações com sucesso                                               |
  | Rejected   | Quando a execução finalizou com erro, falhou                                                 |
  | Settled    | Nome genérico para estado final de executado, independente de ter retornado sucesso ou erro  |

#

### **Async/Await :**
- **O que é :** Async/Await são keywords introduzidas no ES8, como um recurso de ordem sintática para facilitar a escrita do *[then]* e *[catch]*. Desta forma, transformando casos de códigos contendo Promise Hell mais fáceis de serem lidos e compreendidos;
- **Funcionalidades :** Permite aguardar chamadas a métodos assíncronos antes de prosseguir a execução. E também permite ser usado para acesso ao banco de dados, trabalhos com arrays, funções e uma diversidade de outras funcionalidades;
- **Comandos :** O comando *[async]* faz com que uma função automaticamente retorne uma Promise. E o comando *[await]* antes de chamar as funções que retornam Promises, basicamente pausam a função até que a Promise dentro da função seja resolvida.


#



![monophy](https://media.giphy.com/media/11JTxkrmq4bGE0/giphy.gif)

#

## **Desafio para Casa** :house:

#

- Faça um fork do [repositório](https://github.com/reprograma/On16-TodasEmTech-S7-Eventos), faça o desafio da promessa utilizando *[async/await]* , altere o readme (fazendo um resumo da semana 7) , suba a solução para o gitHub e abra um [Pull Request](https://github.com/grupy-sp/encontros/wiki/Como-sincronizar-o-seu-Fork-com-o-repo-principal) com a solução; 
- O Código está na pasta ParaCasa, no arquivo AtividadeParaCasa.js;
- **Dica de ouro :** Vai ter uma das promises que você não vai precisar usar o comando *[await]*.

#
![monophy](https://http.cat/200.jpg)



#

## **Maiores dificuldades da semana** :weary:

#

- Saber quando se faz necessário o uso do comando *[await]*;
- A vizualização do conceito de Event Loop;
- Saber se as Promises foram realizadas ou não, através do console.log;
- Em qual tipo de ação é mais utilizado o comando *[async/await]*;
- Como usar o *[return]* para não precisar do *[await]*, pois o valor retornado de uma função async é implicitamente passado por um *Promise.resolve*;
- Na prática, um pouco de dificuldade na questão da sintaxe do código.

#

![monophy](https://media.giphy.com/media/WRQBXSCnEFJIuxktnw/giphy.gif)

#

## **Referências / Estudos da Semana** :book:

#

<br>

### [Slide da aula](https://docs.google.com/presentation/d/1hik5KVEutK7ec1MHRnNEDy5NikDGC8GP/edit?usp=sharing&ouid=103451384479324478678&rtpof=true&sd=true)

<br>

#

  | Conteúdo    | Link / Fonte                                                                                  |
  | ---------- | -------------------------------------------------------------------------------------------- |
  | Promises    | https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2          |
  | Async/Await  | https://medium.com/balta-io/nodejs-async-await-21ca3636252a                                               |
  | Funções Assíncronas   | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function                                                |
  | Função Callback    | https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function  |
  | Event Loop    | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/EventLoop  |


  #



## **E tudo deu certo!!! Prontíssimas para a próxima semana!!!** 🥰

#


![monophy](https://media.giphy.com/media/oXGfezpiJcXrZAtNwC/giphy.gif)




