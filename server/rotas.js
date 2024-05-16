const express = require('express')
const {cadastrarAutor, buscarAutor, atualizarAutor, deletarAutor }= require('./controladores/autor')
const {cadastrarLivro, buscarLivro, atualizarLivro, deletarLivro} = require('./controladores/livros')
const {cadastrarCategoria, deletarCategoria} = require('./controladores/categoria')

const rotas = express()
rotas.use(express.json())

rotas.post('/cadastrarAutor', cadastrarAutor)
rotas.post('/cadastrarLivro', cadastrarLivro)
rotas.post('/cadastrarCategoria', cadastrarCategoria)
rotas.get('/buscarAutor',buscarAutor)
rotas.get('/buscarLivro',buscarLivro)
rotas.put('/atualizarLivro/:id', atualizarLivro)
rotas.put('/atualizarAutor/:id', atualizarAutor)
rotas.delete('/deletarAutor/:id', deletarAutor)
rotas.delete('/deletarLivro/:id', deletarLivro)
rotas.delete('/deletarCategoria/:id', deletarCategoria)

module.exports = rotas 