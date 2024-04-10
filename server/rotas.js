const express = require('express')
const {cadastrarAutor, buscarAutor }= require('./controladores/autor')
const {cadastrarLivro, buscarLivro} = require('./controladores/livros')
const cadastrarCategoria = require('./controladores/categoria')

const rotas = express()
rotas.use(express.json())

rotas.post('/cadastrarAutor', cadastrarAutor)
rotas.post('/cadastrarLivro', cadastrarLivro)
rotas.post('/cadastrarCategoria', cadastrarCategoria)
rotas.get('/buscarAutor',buscarAutor)
rotas.get('/buscarLivro',buscarLivro)
// Listar livro na categoria 
module.exports = rotas 