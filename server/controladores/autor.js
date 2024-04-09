const knex = require('../conexao'); 

const cadastrarAutor = async(req,res) =>{
    const {nome,data_de_nascimento,sexo} = req.body
    if(!nome || !data_de_nascimento || !sexo){
        return res.status(400).json({mensagem: 'Todos os campos devem estar preenchidos'})
    }
    const dataFormatada = new Date(data_de_nascimento).toLocaleDateString('en-CA');
    try{
        const autorExistente = await knex('autor').where({
            nome: nome,
            data_de_nascimento: dataFormatada
        }).first()

        if(autorExistente){
            return res.status(400).json({mensagem: 'Já existe um livro com essas informações.'})
        }
        const novoAutor = await knex('autor').insert({
            nome: nome,
            data_de_nascimento: dataFormatada,
            sexo: sexo
        }).returning('*')

        return res.status(201).json({ mensagem: 'Autor cadastrado com sucesso', autor: novoAutor });
    }catch(error){
        return res.status(500).json({mensagem: 'Erro no servidor ao cadastrar autor'})
    }
}

module.exports = cadastrarAutor