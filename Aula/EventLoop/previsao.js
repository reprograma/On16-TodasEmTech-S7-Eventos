'use strict'  
const express = require('express')  
const superagent = require('superagent')  
const app = express()

app.get('/', EnviarClimaDeCidadeAleatória)

function EnviarClimaDeCidadeAleatória (request, response) {  
  getEnviarClimaDeCidadeAleatória(request, response)
  Ola()
}

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

app.listen(3000)