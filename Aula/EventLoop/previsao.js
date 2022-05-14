/* express  e o superagent são bibliotecas do node, observe que as bibliotecas sao declaradas utilizando o require e entre parenteses ('express)
obs: superagent e para chamar a requisição
*/
'use strict'  
const express = require('express')  
const superagent = require('superagent')  
const app = express()
// indica a rota declara utilizando a barra apos o declarar app.get - get retorna
app.get('/', EnviarClimaDeCidadeAleatória)

/* */
function EnviarClimaDeCidadeAleatória (request, response) {  
  getEnviarClimaDeCidadeAleatória(request, response)
  Ola()
}
// variavel cidades
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

// fara um sorteio das cidades
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

  console.log('Obtendo a previsão do tempo, aguarde.')
}

function Ola () {  
  console.log('Olá Reprograma')
}
 // para rodar tem que verificar a porta disponivel
 // para rodar na maquina acesse  abaixe o TERMINAL  E digite npm i express fs superagent
app.listen(8080)