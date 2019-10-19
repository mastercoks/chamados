const Chamado = require('../models/chamado.model');
const Funcionario = require('../models/funcionario.model');
const Produto = require('../models/produto.model');

module.exports = {
  
  async update(req, res) {
    
    // const { id, funcionario_matricula, produto_id, quantidade } = req.body;
    const { id, produto_id, quantidade } = req.body;

    const chamado = await Chamado.findById(id);

    if (!chamado) {      
      return res.status(400).json({
        sucess: false,
        msg: 'Falha ao adicionar Produto, chamado não encontrado!'
      });
    }

    if (chamado.status !== 'Aberto') {
      return res.status(400).json({
        sucess: false,
        msg: 'Falha ao adicionar Produto, chamado não está aberto!'
      });
    }

    if (!chamado.resolvido) {
      return res.status(400).json({
        sucess: false,
        msg: 'Falha ao adicionar Produto, chamado não está atribuido a algum funcionário!'
      });
    }
    
    // const funcionario = await Funcionario.findOne({ matricula: funcionario_matricula });
    
    // if (!funcionario) {      
    //   return res.status(400).json({
    //     sucess: false,
    //     msg: 'Falha ao adicionar Produto, funcionario não encontrado!'
    //   });
    // }

    // if (funcionario.tipo !== 'TI') {
    //   return res.status(400).json({
    //     sucess: false,
    //     msg: 'Falha ao adicionar Produto, funcionario sem permissão!'
    //   });
    // }  

    // if (chamado.resolvido.funcionario_id !== funcionario._id) {
    //   return res.status(400).json({
    //     sucess: false,
    //     msg: 'Falha ao adicionar Produto, funcionario diferente do atribuido ao chamado!'
    //   });
    // }  

    const produto = await Produto.findById(produto_id);
    
    if (!produto) {      
      return res.status(400).json({
        sucess: false,
        msg: 'Falha ao adicionar Produto, produto não encontrado!'
      });
    }
    
    if (produto.quantidade < quantidade) {      
      return res.status(400).json({
        sucess: false,
        msg: 'Falha ao adicionar Produto, sem quantidade no estoque!'
      });
    }

    const produtoUtilizado = await Produto.updateOne({
      _id: produto_id
    }, {
      quantidade: produto.quantidade - quantidade
    });

    const chamadoAtribuido = await Chamado.updateOne({
      _id: id
    }, {
      $push: {
        "resolvido.produtosUtilizados": {
          produto_id,
          quantidade
        }
      }
    })

    return res.json({
      sucess: true,
      msg: 'Chamado atribuido com sucesso!',
      chamadoAtribuido: chamadoAtribuido
    });
  }
}