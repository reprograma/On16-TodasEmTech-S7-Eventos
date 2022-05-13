//Exemplo de funcionamento que demonstra o EventLoop

// Importando bibliotecas
'use strict'  
const express = require('express')  
const superagent = require('superagent')  
const app = express()

//Usando verbo HTTP GET
app.get('/', EnviarClimaDeCidadeAleatória)

function EnviarClimaDeCidadeAleatória (request, response) {  
  getEnviarClimaDeCidadeAleatória(request, response)
  Ola()
}
//Lista de Cidades
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
  const city = CIDADES[Math.floor(Math.random() * CIDADES.length)] //aplicação de filtros para sorteio de cidades
  superagent.get(`wttr.in/${city}`) //aplicação de API
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

app.listen(3000) //iniciando localhost

/* Nesse grande código, existem  funções dentro de funções, que dependem uma da outra, e que são programadas
para serem chamadas posteriormente. Permitindo que tenha-se exemplo de Assincronicidade no código, e deste modo
permitindo visualizar como o node responde a essa assincronidade. */