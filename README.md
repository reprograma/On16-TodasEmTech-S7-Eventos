
# On16-TodasEmTech-S7-Eventos

## Turma Online Todas em Tech - Back-end | Semana 7: Event Loop, Callbacks, Promises e Async/Await

<br/>

![tenor](https://user-images.githubusercontent.com/83047619/165827234-9f070d42-9dd5-435f-ace2-417783ce2e8f.gif)

<br/>

#### 📝 O que é programação síncrona;

Ao execurtarmos um código, ele pode processar os seus dados de duas formas: síncrona e assíncrona.

A forma síncrona é o método padrão do JavaScrip rodar os seus códido, ou seja, a sua leitura costuma ocorrer linha a linha de cima para baixo. Por exemplo, ao processarmos o código abaixo ele irá seguir a ordem escrita:

> **Código:**

> console.log("Linha número 01")

> console.log("Linha número 02")

> **Saída:**

> Linha número 01

> Linha número 02

#### 📝 Programação assíncrona;

A forma assíncrona costuma ocorrer quando a execução dos módulos do programa não ocorrem de modo sequencial. Alguns trechos podem não ser executados instanteneamente, com necessidade de aguardar o retorno de alguns dados, nesse caso, é necessário esperar que sejam concluídos para que posteriormente sejam processados. Logo os códidos serão processado de forma assíncronas, ou seja, não seguirão a ordem das linhas. Por exemplo:

> **Código:**

>console.log("Pimeira linha")
>
>setTimeout(() => {
>            console.log("Segunda linha")
>        },2000);
>
>console.log("Terceira linha")

> **Saída:**

>Pimeira linha

>Terceira linha

>Segunda linha

#### 📝 Event Loop;

O Event Loop, ou laço de repetição de eventos, é um padrão de arquitetura que controla o fluxo de operações, requisições e ações de um código de forma assincrona, diferentemente de outras arquiteturas onde um código executa uma ação e termina. No event loop, existe o conceito do event, que pode ser uma requisição http, uma consulta ao banco de dados, dentre outras, esse event é controlado por um handler que se comunica com outros events e assegura que o fluxo não seja interrompido caso um event demore mais do que o esperado.


#### 📝 Callbacks;

Callbacks são um tipo específico de função que funciona como parâmetro de outra função e são retornadas por estas. Normalmente são usadas para continuar a execução do código após uma operação assíncrona.
Quando utilizadas como parâmetro costumas vim no formato de *arrow function*.

#### 📝 Promises;

As *promises* foram implentadas no JavaScript ES7 onde antes usava-se funções *callbacks*. 
São utilizadas como um *proxy* para resultados que, inicialmente, são desconhecidos devido a sua computação não estar completa no momento da chamada.

Toda *primises* pode ser resolvida ter sucesso (resolvida) ou não (erro), ou seja, ela sempre retornará um método *.then* ou um *.cath*. Utilizamos o *.then* para tratar quando queremos **resolver** a *promises* e o *.cath* quando queremos tratar os erros de uma *promises* **rejeitada**.

Toda *primises* pode assumir 4 estados:
  1. *Pending*: Foi iniciada, mas não foi realizada nem rejeitada.
  2. *Fulfilled*: Promises **resolvida**.
  3. *Rejected*: Promises **rejeitada**.
  4. *Settled*: Estado final quando já sabemos se foi **resolvida** ou **rejeitada**

#### 📝 Async/Await.

O **Async/Await** surgiu com o ojetivo de simplificar situações em que temos várias *promises* encadeadas com uma dependente da outra. Ele permite que aguardemos as chamadas a métodos assíncronos antes de prosseguir.

<a href="https://ibb.co/WPpqVZQ"><img src="https://i.ibb.co/WPpqVZQ/OctoCat3.jpg" alt="OctoCat3" border="0"></a>
