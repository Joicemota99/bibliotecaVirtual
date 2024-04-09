const knex = require('../conexao'); 

const cadastrarLivro = async (req,res) => {
    const {titulo,data_publicacao, subtitulo} = req.body
    if(!titulo || !data_publicacao || !subtitulo){
        return res.status(400).json({mensagem: 'Todos os campos devem estar preenchidos'})
    }
    const dataFormatada = new Date(data_publicacao).toLocaleDateString('en-CA');
    try{
        const livroExistente = await knex('livros').where({
            titulo: titulo,
            subtitulo: subtitulo
        }).first()

        if(livroExistente){
            return res.status(400).json({mensagem: 'Já existe um livro com essas informações.'})
        }
        const novoLivro = await knex('livros').insert({
            titulo : titulo,
            data_publicacao : dataFormatada,
            subtitulo : subtitulo
        }).returning('*')

        res.status(201).json({ mensagem: 'Livro cadastrado com sucesso', livro: novoLivro });
    }catch(error){
        res.status(500).json({mensagem: 'Erro ao cadastrar livro'})
    }
}

module.exports = cadastrarLivro