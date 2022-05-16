E vamos de mais uma semana de aulas :3

![gif1](https://media2.giphy.com/media/uhoXlkw3svvgm94LQS/giphy.gif?cid=ecf05e473equdlbua9lalju59pgm0sicziih3w4gvplmvnbn&rid=giphy.gif&ct=g)

Essa semana o assunto foi Event Loop, callback, promises, async await e programação síncrona e assíncrona; segue o resumão do que é cada uma dessas coisas:

EventLoop - é a maneira que o node.JS lê o código e executa os eventos. Diferente de outras linguagens de programação (como ruby, por exemplo), essa leitura é feita de forma assíncrona, ou seja, o código é lido e executado sem interrupções, mesmo que a tarefa anterior ainda não tenha sido concluída; Por exemplo, temos duas funções, uma delas lê um arquivo e a outra mostra uma string no console:


const fs = require('fs')

fs.readFile('./arquivo.txt', (err, texto) => {
  // fazer alguma coisa com o arquivo
})

console.log(“É aqui o grupo da galinhagem?”)

Nesse código, o EventLoop primeiro executaria o método de ler o arquivo (readFile), depois o método de mostrar a string no terminal (console.log); porém, como ler um arquivo é uma tarefa que demora mais tempo que um console.log, a string apareceria primeiro no terminal, depois o conteúdo do arquivo. Isso acontece porque a leitura do código é assíncrona e o eventloop executa o que quer que esteja pronto primeiro para ser executado, delegando às funções callback a execução de tarefas mais longas.

Em resumo, o EventLoop:
é a maneira que o node executa o código
tem fluxo assíncrono, ou seja, roda o código de forma ininterrupta
vai executar o que estiver pronto primeiro para ser executado, independente da ordem do código
delega às funções callback a execução de tarefas mais complexas para poder continuar lendo o código sem interrupções
volta às tarefas que deixou em andamento para checar se já estão concluídas e podem ser executadas

--------------------------------------------------
CallBack - é uma função construída para ser usada como parâmetro de outra função, geralmente de forma resumida em formato de arrowFunction; no contexto dessa aula, as funções callback têm um papel importante por se encarregarem de executar tarefas que levam mais tempo sem que o eventloop precise interromper o fluxo de leitura, possibilitando assim que o node.js tenha fluxo assíncrono;

relembrando as diferenças entre a sintaxe tradicional de funções e a arrow function:

// sintaxe tradicional
function soma (a, b){
	return a + b
}

// arrow function
(a, b) => a + b

------------------------------------------------
Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.

--------------------------------------------------
Função Assíncrona: Quando uma função assíncrona é chamada, ela retorna uma Promise. Quando a função assíncrona retorna um valor, a Promise será resolvida com o valor retornado. Quando a função assíncrona lança uma exceção ou algum valor, a Promise será rejeitada com o valor lançado.

Uma função assíncrona pode conter uma expressão await, que pausa a execução da função assíncrona e espera pela resolução da Promise passada, e depois retoma a execução da função assíncrona e retorna o valor resolvido.

----------------------------------------------------

Não foi fácil, mas sobrevivemos a essa semana! Até a próxima :3

![gif2](https://media3.giphy.com/media/GVUldNxs9Y4KaFQElQ/giphy.gif?cid=ecf05e47750a6ae84uxqeun96ynb3chcwj90bx12mhsxyly6&rid=giphy.gif&ct=g)