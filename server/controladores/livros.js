const knex = require('../conexao'); 

const cadastrarLivro = async (req,res) => {
    const {titulo,data_publicacao, subtitulo} = req.body

    const dataFormatada = new Date(data_publicacao).toLocaleDateString('en-CA');
    try{
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