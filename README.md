# Repositório com o resumo dos assuntos passados pela professora Jenifer 👩‍💻

</br>

<span align="center">

# <img src="https://user-images.githubusercontent.com/101025726/163484804-691ab689-7347-41e4-8fcc-06011eb830d4.gif" width="150px"> Aprendizado da semana! </h2>

</span>

</br>

## SÍNCRONA 😉

São funções que, quando chamadas, pausam a leitura do código para realizar seu processamento, depois retorna o valor final e continua a execução da linha de código na sequência

</br>

## ASSÍNCRONA 😉

Cria uma leitura paralela, que será executada em segundo plano sem interromper o fluxo principal. Então toda função que depende de alguma execução externa ou possui tempo para retornarem, são executadas em por trás e ao final são retornadas através do Event Loop, tornando possível a continuação do fluxo da aplicação já que não trava o script

</br>

## EVENT LOOP 😉

A fila de eventos (Event Loop) é responsável por enviar novas funções que foram resolvidas de forma assíncrona para a trilha principal de processamento (Call Stack), seguindo a estrutura de dados da fila (Callback Queue) assim mantendo a sequência correta de execução dos eventos/funções.

</br>

## CALLBACK 😉

A função de retorno de chamada geralmente é usada como parâmetro para outra função. A função que recebe a função de retorno de chamada como parâmetro normalmente está buscando dados de um banco de dados, baixando um arquivo, fazendo uma solicitação de API ou concluindo alguma outra tarefa que poderia bloquear a leitura de código por um período de tempo notável.

</br>

## PROMISES 😉

São um padrão de desenvolvimento que visam representar a conclusão de operações assíncronas, ou seja, que não possuem sincronia. Elas são um conceito essencial do JavaScript. Antes das promises existirem, a marioria das funções usavam callbacks. É um padrão de desenvolvimento usados para sincronizar a execução de um programa.Eles descrevem um objeto que atua como um intermediário para um resultado que é, inicialmente, desconhecido devido a sua computação não estar completa no momento da chamada.
AS promises também foram criadas por conta da organização dos códigos, pois toda vez que um arquivo era lido, ela precisava escrever um outro arquivo e dessa forma executar a função assícrona. O que resultava de um código complexo pra leitura que ficou conhecido como callback hell. Dessa forma o código era melhorado e conseguia se extrair as funções de forma mais simples melhorando a visualização.
Uma Promise pode assumir quatro estados principais:

| Estado | Significado |
| --- | --- |
| Pending | O estado inicial da Promise, ela foi iniciada mas ainda não foi realizada nem rejeitada. |
| Fulfilled| Sucesso da operação, é uma Promise resolvida.|
| Rejected | Falha da operação, é o que chamamos de uma Promise rejeitada.|
| Settled  | É o estado final da Promise, quando ela já sabe se foi resolved ou rejected.|

</br>

## ASYNC/AWAIT 😉

As palavra-chaves async e await facilitam a visualização e tornam a leitura do código assíncrono mais próxima do código síncrono. Toda função que recebe o async se torna uma função assíncrona, que passa a retornar uma promise ao invés de retornar um valor diretamente e espera que a palavra-chave await seja usada para chamar o código assíncrono, o await indica que o JavaScript deve esperar o retorno de uma promise para continuar a execução,se usado de forma correta não altera a performance da aplicação. O await só funciona dentro de funções assíncronas e é colocado na frente de qualquer função que retorne promise para pausar o código até que ela seja resolvida, retornando o valor.


</br>
</br>






<span align="center">

#  Muito obrigada a você que chegou até aqui! </h2>

</span>

</span>
<div align="center">
<img src="https://user-images.githubusercontent.com/101025726/168203971-39c8b81c-1e82-499e-a89c-d2f3c47b2b23.gif" width="400px" />

</div>
