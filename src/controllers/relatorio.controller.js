const Chamado = require('../models/chamado.model');
const Funcionario = require('../models/funcionario.model');
const Produto = require('../models/produto.model');

module.exports = {
  
  async tempoMedio(req, res) {
    
    const chamados = await Chamado.find(filter).populate("funcionario_id").populate("resolvido.funcionario_id").populate("resolvido.produtosUtilizados.produto_id").exec();

    return res.json(chamados);
  },
}