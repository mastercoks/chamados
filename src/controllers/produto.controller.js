const Produto = require('../models/produto.model');

module.exports = {

  async index(req, res) {
    const { id } = req.params;
    
    const produto = await Produto.findById(id);

    return res.json(produto);
  },

  async show(req, res) {
    const produtos = await Produto.find();

    return res.json(produtos);
  },

  async store(req, res) {
    const { nome, descricao, quantidade } = req.body;
    
    produto = await Produto.create({ nome, descricao, quantidade });
    
    return res.json({
      sucess: true,
      msg: 'Produto criado com sucesso!',
      produto: produto
    });
  },

  async update(req, res) {
    const { id } = req.params;
    const { quantidade } = req.body;

    const produto = await Produto.findById(id);

    if (produto) {
      const produtoAtualizado = await Produto.updateOne({
        _id: id
      }, {
        quantidade: produto.quantidade + quantidade
      });
      return res.json({
        sucess: true,
        msg: 'Estoque atualizado com sucesso!',
        produtoAtualizado: produtoAtualizado
      });
    } else {          
      return res.status(400).json({
        sucess: false,
        msg: 'Falha ao adicionar Produto, produto não encontrado!'
      });
    }
  }
}