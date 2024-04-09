const knex = require('../conexao'); 

const cadastrarAutor = async(req,res) =>{
    const {nome,data_de_nascimento,sexo} = req.body

    const dataFormatada = new Date(data_de_nascimento).toLocaleDateString('en-CA');
    try{
        const novoAutor = await knex('autor').insert({
            nome: nome,
            data_de_nascimento: dataFormatada,
            sexo: sexo
        }).returning('*')

        res.status(201).json({ mensagem: 'Autor cadastrado com sucesso', autor: novoAutor });
    }catch(error){
        res.status(500).json({mensagem: 'Erro no servidor ao cadastrar autor'})
    }
}

module.exports = cadastrarAutor