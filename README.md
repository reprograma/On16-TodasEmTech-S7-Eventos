# On16-TodasEmTech-S7-Eventos

# Turma Online Todas em Tech - Back-end | Semana 7: Event Loop, Callbacks, Promises e Async/Await

## Síncrono e Assíncrono

 - **Operação síncrona :** uma operação precisa ser finalizada para que outra tenha a oportunidade de ser executada.
 
- **Operação assíncrona :** uma operação não precisa esperar a outra ser finalizada, ao contrário disso, elas alternam o controle da execução entre si.

**Exemplo:** Numa operação síncrona se você precisa colocar roupas para lavar e lavar louça, primeiramente você poderia colocar as roupas para lavar e esperaria o tempo que fosse necessário até terminar e só depois lavar a louça.  

Já numa operação assíncrona você poderia colocar as roupas na máquina de lavar e já começaria a lavar as roupas no mesmo momento. Não é necessário ficar esperando a máquina de lavar processar seu resultado para executar outra tarefa. Você pode pegar o “resultado” da máquina de lavar em um momento futuro.

## Event Loop

O event loop possui diferentes filas com callbacks (funções) e gerencia quando determinada função nestas filas deveria executar.

A fila de eventos (Event Loop) é responsável por enviar novas funções que foram resolvidas de forma assíncrona para a trilha principal de processamento (Call Stack), seguindo a estrutura de dados da fila (Callback Queue) assim mantendo a sequência correta de execução dos eventos/funções.

## Callback

É um tipo de função que só é executada após o processamento de outra função. Na linguagem JavaScript, quando uma função é passada como um argumento de outra, ela é, então, chamada de callback.

Também conhecido como função de retorno, o Callback cria regras dentro de outras funções para que sejam utilizadas no futuro.

Normalmente, ele age de forma assíncrona, ou seja, não é executado imediatamente. A aplicação continuará rodando enquanto espera o momento certo da sua execução. Portanto, ela contribui para controlar melhor o fluxo de processamento assíncrono.

Exemplo :

``` javascript
function primeiroBloco(){
	// Aguardar 5 segundos
	setTimeout( function(){
	console.log('Esse é o primeiro bloco de comandos após 5 segundos')
	}, 5000 )
}
function segundoBloco(){
	console.log('Esse é o segundo bloco de comandos')
}
primeiroBloco()
segundoBloco()
```

Ao executar o código o retorno será o seguinte :
```
“Esse é o segundo bloco de comandos”.
“Esse é o primeiro bloco de comandos após 5 segundos”.
```

As mensagens são exibidas fora da ordem, o que demonstra que ao processar os blocos de código, mesmo sem terminar o primeiro, o segundo foi iniciado. Por isso, para fazer com que as mensagens sejam exibidas na ordem desejada, é necessário usar a função callback.

```javascript
function exibeMensagensNaOrdem(mensagem, callback) {
	console.log(mensagem)
	callback()
}
exibeMensagensNaOrdem('Essa é a primeira mensagem exibida na ordem', function() {
	console.log('Essa é a segunda mensagem exibida na ordem')
})
```

Dessa forma o retorno será :
```
"Essa é a primeira mensagem exibida na ordem."
"Essa é a segunda mensagem exibida na ordem."
```

É importante lembrar que a utilização de diversos callbacks juntos dentro de incontáveis laços de repetição não é considerado uma boa prática. Essa ação é conhecida como **callback hell**. Isso porque essa forma de se utilizar o recurso pode fazer com o fluxo se perca, dificultando a compreensão.

## Promises

É um objeto em JavaScript que permite a execução de processamentos de forma assíncrona dentro do seu código, uma vez que é definido como um objeto onde é possível guardar valores que poderão ser usados em outro momento no seu código enquanto você executa outras tarefas. Desse modo, tudo isso será necessário para retratarmos processamentos de sucesso ou falhas dentro do nosso código.

Uma promise pode assumir quatro estados principais:

- **Pending(pendente) :** a ação ainda não foi concluída

- **Fulfilled(atendida) :** a ação foi concluída com sucesso.

- **Rejected(rejeitada) :** ação falhou.

- **Settled(resolvida) :**  a ação foi atendida ou rejeitada.

![entendendo](/Imagens/entendendoPromises.jpg)


### Construindo uma promise

O construtor da promise recebe uma função com 2 argumentos: resolve e reject.

- **Resolve:** Que é retornado quando há um sucesso na promessa, então podemos inserir algo neste método para utilizar no código.

- **Rejected**: Que é retornado quando um erro acontece, da mesma maneira que em resolve podemos colocar algo como parâmetro.  
  
```javascript
var promise = new Promise((resolve, reject) => {
	// Lógica da promise
})
```

Então, usamos os 2 parâmetros dentro da lógica da função para indicar quando a promise foi resolvida ou rejeitada :

```javascript
let promise = new Promise((resolve, reject) => {
	let result = true

	if(result) {
		resolve("Executada com sucesso!")
	} else {
		reject("Ocorreu um erro...")
}
})
```
Passamos uma string para resolve e reject indicando que a lógica foi *‘Executada com sucesso’* ou *‘Ocorreu um erro’*.

Porém é possível passar qualquer argumento. Desde informações do banco de dados até um objeto de erro.

```javascript
let promise = new Promise((resolve, reject) => {
	// Contém a operação realizada
	// ...

	// Retorna o estado
	if(result) {
		resolve(result)
	} else {
		reject(error)
	}
})
```
### Como usar uma promise

Resolvemos as promises através de métodos próprios, que chamam as callbacks depois da conclusão da promise. Que pode ser sido resolvida com sucesso ou rejeitada. Para isso, você utiliza o then e o catch.

![usando](/Imagens/usandoPromises.jpg)

- **Then( ):** Método que ativa uma callback quando a promise for resolvida, o argumento desta callback é sempre o valor retornado na função resolve().

- **Catch( ):** Método que ativa uma callback quando a promise for rejeitada, o argumento desta callback é sempre o valor retornado na reject().

Como fica usando o exemplo anterior :

```javascript
promise.then((data) => console.log(`resultado: ${data}`))
promise.catch((data) => console.log(`erro: ${data}`))
```

A variável **result** simula o resultado de uma operação assíncrona. Nesse caso o resultado foi positivo e o código irá mostrar no console a string:

```
resultado: Executada com sucesso!
```

As funções **then** e **catch** recebem um parâmetro data por padrão. Assim podem recuperar os dados passados pela promise.

Por fim, ao alterar o result para false, o código vai retornar no console uma frase diferente:

```
erro: Ocorreu um erro...
```
## Async / Await

Estas duas keywords são utilizadas quando queremos declarar e usar funções assíncronas em nossa aplicação.

**Async** é a keyword que colocamos ao declarar uma função que irá indicar que aquela função é assíncrona, ou seja, ela será chamada e o código deverá esperar que ela retorne algum valor para continuar sendo executado.

**Await** é a keyword que usamos antes de chamar uma função para indicar ao código que ele deve esperar aquela função concluir para continuar sua execução.
```javascript 
const pegarDadosProcessados = (url) => {
	return baixarDados(url) // retorna uma Promise
		.catch(e => {
			return baixarDadosReservas(url) // retorna uma Promise
		})
		.then(v => {
			return processarDadosNoWorker(v); // retorna uma Promise
		})
}
```
Ao reescrever essa cadeia com async e await, ela ficaria mais ou menos assim:

```javascript 
async function pegarDadosProcessados(url) {
	let v
	try {
		v = await baixarDados(url)
	} catch(e) {
		v = await baixarDadosReservas(url)
	}
	return processarDadosNoWorker(v)
}
```

## Try/catch

É usado para marcar um bloco que será testado (try) e especifica uma ação para que uma possível exceção(erro) seja capturada(catch).

Ao usar o try é criado um bloco de código protegido, que caso ocorra algum erro neste bloco, a execução é desviada para o catch( ), desta forma a aplicação não será quebrada e o erro poderá ser tratado e o código segue sua execução.

O catch( ) é executado somente quando há alguma exceção no bloco try, caso contrário ele será ignorado, o argumento recebido pelo catch é a exceção ocorrida no bloco try e costuma ser chamada de err/error.