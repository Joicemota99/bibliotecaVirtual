const express = require('express')
const cadastrarAutor = require('./controladores/autor')
const cadastrarLivro = require('./controladores/livros')

const rotas = express()
rotas.use(express.json())

rotas.post('/cadastrarAutor', cadastrarAutor)
rotas.post('/cadastrarLivro', cadastrarLivro)

module.exports = rotas 