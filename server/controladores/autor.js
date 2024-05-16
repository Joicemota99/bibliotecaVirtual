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

const buscarAutor = async(req,res) =>{
    const {nome} = req.query

    try{
    const buscandoAutor = await knex('autor').where({nome}) 
    if(buscandoAutor.length === 0){
        return res.status(404).json({mensagem:'Autor não encontrado'})
    }
    return res.status(200).json({autor : buscandoAutor })
    }catch(error){
        console.log(error)
    return res.status(500).json({mensagem: 'Erro no servidor ao buscar autor'})
    }
}

const atualizarAutor = async(req,res) =>{
    const {nome, data_de_nascimento, sexo} = req.body
    const {id} = req.params 

    if(!nome || !data_de_nascimento || !sexo){
        return res.status(400).json({mensagem: 'Todos os campos devem estar preenchidos'})
    }
    try{
        const buscandoAutor = await knex('autor').where({id:id}).first()

        if(!buscandoAutor){
            return res.status(404).json({mensagem:'Não existe esse Autor'})
        }
        const dataFormatada = new Date(data_de_nascimento).toLocaleDateString('en-CA')
        const atualizandoAutor = await knex('autor').where({id: id}).update({
            nome: nome,
            data_de_nascimento: dataFormatada,
            sexo: sexo,   
        })

        return res.status(200).json(atualizandoAutor)
        
    }catch(error){
        console.log(error)
        return res.status(500).json({mensagem: 'Erro no servidor ao buscar Autor'})  
    }
}

const deletarAutor = async(req,res) =>{
    const {id} = req.params

    try{
        const buscandoAutor = await knex('autor').where({id:id}).first()
        if(!buscandoAutor){
            return res.status(404).json({mensagem:'Não existe esse Autor'})
        }

        const deletar = await knex('autor').where({id:id}).del()
        return res.status(200).json({ mensagem: 'Autor deletado com sucesso' })

    }catch(error){
        return res.status(500).json({mensagem: 'Erro no servidor ao deletar Autor'})  
    }
}
module.exports = {
    cadastrarAutor,
    buscarAutor,
    atualizarAutor,
    deletarAutor
}