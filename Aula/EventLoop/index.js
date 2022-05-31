/* O eventloop ao executar chamará a primeira função inicia-se de cima para baixo verificando um a um*/

/* criando um evento atraves de uma função para imprimir uma mensagem */

function evento(){
    console.log("Executando o evento()")

}
function evento2(){
    console.log("Executando o evento2()")
}
function evento3(){
    console.log("Executando o evento3()")   
}
// chamar as funções
evento()
evento2()
evento3()

