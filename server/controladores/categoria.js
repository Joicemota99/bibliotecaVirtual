const knex = require('../conexao'); 

const cadastrarCategoria = async (req,res) =>{
    const {descricao} = req.body

    if(!descricao){
        return res.status(400).json({mensagem: 'O nome da categoria é obrigatória'})
    }

    try{

        const categoriaExistente = await knex('categorias').where({descricao}).first()

        if(categoriaExistente){
            return res.status(400).json({mensagem: 'Já existe uma categoria com essas informações.'})
        }
        const novaCategoria = await knex('categorias').insert({descricao})
        
        res.status(201).json({ mensagem: 'Categoria cadastrada com sucesso', categorias: novaCategoria });
    }catch(error){
        res.status(500).json({mensagem: 'Erro no servidor ao cadastrar categoria'})
    }
}

const deletarCategoria = async(req,res) =>{
    const {id} = req.params

    try{
        const buscarCategoria = await knex('categorias').where({id:id}).first()
        if(!buscarCategoria){
            return res.status(404).json({mensagem: 'Não existe uma categoria com essas informações'})
        }

        const deletar =  await knex('categorias').where({id:id}).del()
        return res.status(200).json({ mensagem: 'Categoria deletada com sucesso' })

    }catch(error){
        res.status(500).json({mensagem: 'Erro no servidor ao cadastrar categoria'})
    }
}

module.exports = {
    cadastrarCategoria,
    deletarCategoria
}