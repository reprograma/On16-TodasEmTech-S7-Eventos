
# **Atividade Semanal 4 - Turma On16** 📚 💻

### **Event Loop, Funções Sícronas e Assíncronas, Callbacks, Promises e Async/Await**


---

Todos os parâmetros que envolvem os eventos contidos na execução dos códigos tem como principal objetivo a otimização do tempo.

## **Event Loop**

Está no escopo do Js como um background de ordenação de execução de funções, fazendo como um controle de filas para a execução dos códigos. 

## **Função Assíncrona e Síncrona**

As requisiões síncronas tem sintonia na execução, trabalhando do inicio ao fim em comunicação e dependência. Já as requisiões assíncronas executam o que já está resolvido e depois incluem resultados posteriores, por isso nelas são usadas as Promises e Callbacks.

## **Promise**

Levando em consideração a execução assíncrona, as Promises tem o papel de guardar informações de funções ainda não finalizadas para retornar quando estiverem resolvidas. 


Estados da Promise  | Descrição
--------- | ------
Pending | Quando a Promise não passou pelo processo de ser resolvida (resolve) ou rejected (rejeitada).
Fulfilled | Quando nossa Promise foi realizada com sucesso
Rejected | Nesse estado, a Promise é rejeitada, ou seja, a operação falha
Settled | Quando se dá o resultado da Promise.

Funcionamento assíncrono
Otimização de tempo
Exemplo de aplicação: carregamento de imagem em um programa 
Sintaxe básica:

Métodos de retorno  | Descrição
--------- | ------
 .then | é designado apresentar um retorno de sucesso (resolve) para uma Promise.
 .cacth | é designado apresentar um retorno de erro (reject) para uma Promise.


##  **Asyn/Await**

Basicamente usar Async/Await organizará o fluxo de execuções assíncronas. O Await somente será usado quando houver o Async na função.

Esta função tem como caracteristica um código mais limpo, enxuto e mais fácil de ler.


##  **CallBack** 

É utilizando como argumento para outra função e geralmente só é executado quando um evento específico ocorre. 

---

##### **Essa atividade faz parte do cronograma da semana 7 da Turma On 16 do bootcamp Todas em Tech {Reprograma}**





