/*
Exemplo 1 de funcionamento do que significa EventLoop.
Node roda linha a linha , retornando o loop caso tenha alguma função callback.
Aqui, a ordem importa
*/

function evento(){
    console.log("Executando o evento()")

}

function evento2(){
    console.log("Executando o evento2()")
}

function evento3(){
    console.log("Executando o evento3()")   
}

evento()
evento2()
evento3()