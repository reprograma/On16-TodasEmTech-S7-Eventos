/* express  e o superagent são bibliotecas do node, observe que as bibliotecas são declaradas utilizando o require e entre parenteses e aspas simples ('express')
obs: superagent e para chamar a requisição
*/
'use strict'  
const express = require('express')// biblioteca para acessar o localhost
const superagent = require('superagent') //chama API da previsão tempo 
const app = express()// chama a biblioteca express
// indica a rota declara utilizando a barra apos  declarar app.get - get retorna
app.get('/', EnviarClimaDeCidadeAleatória)
/*get(): Esta função informa ao servidor o que fazer quando receber requests em uma determinada rota. Ele pode ser usado para tornar as rotas modulares (como expor um conjunto de rotas de um módulo npm que outros aplicativos da web podem usar).*/

/* EXEMPLO: retornar o resultado de (Enviar clima de cidade aleatoria)
('/') barra indica que e para rodar no localhost aplicação local.

/*criando uma função que retorna um request e um response */
function EnviarClimaDeCidadeAleatória (request, response) {  
  getEnviarClimaDeCidadeAleatória(request, response)
  Ola()
}
// Criando um Array de cidades
const CIDADES = [  
  'osasco',
  'salvador',
  'paris',
  'saopaulo',
  'warsaw',
  'rome',
  'madrid',
  'moscow',
  'beijing',
  'capetown',
]

// Esta função fará um sorteio das cidades
function getEnviarClimaDeCidadeAleatória (request, response) {  
  const city = CIDADES[Math.floor(Math.random() * CIDADES.length)]
  superagent.get(`wttr.in/${city}`)
    .end((err, res) => {
      if (err) {
        console.log('O snap')
        return response.status(500).send('Erro ao consultar a previsão do tempo.')
      }
      const responseText = res.text
      response.send(responseText)
      console.log('Previsão confirmada!')
    })

  console.log('Obtendo a previsão do tempo, aguarde por gentileza.')
}

function Ola () {  
  console.log('Olá Reprograma')
}
 // para rodar tem que verificar a porta disponivel
 // para rodar na maquina acesse  abaixe o TERMINAL  E digite npm i express fs superagent
app.listen(3000)