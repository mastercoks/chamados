const Chamado = require('../models/chamado.model');
const Funcionario = require('../models/funcionario.model');

module.exports = {
  
  async index(req, res) {
    const { id } = req.params;

    const chamado = await Chamado.findById(id).populate("funcionario_id").populate("resolvido.funcionario_id").populate("resolvido.produtosUtilizados.produto_id").exec();

    // const funcionario = await Funcionario.findOne({ matricula: chamado.funcionario_matricula });

    return res.json(chamado);
  },

  async show(req, res) {
    const chamados = await Chamado.find().populate("funcionario_id").populate("resolvido.funcionario_id").populate("resolvido.produtosUtilizados.produto_id").exec();

    return res.json(chamados);
  },

  async store(req, res) {
    const { descricao, funcionario_matricula, tipo_servico } = req.body;
    
    const status = 'Aberto';
    const data_hora_abertura = Date();

    let funcionario = await Funcionario.findOne({ matricula: funcionario_matricula });

    if (funcionario) {
      chamado = await Chamado.create({ 
        descricao,
        funcionario_id: funcionario.id,
        status,
        data_hora_abertura,
        tipo_servico
      });
      
      return res.json({
        sucess: true,
        msg: 'Chamado criado com sucesso!',
        chamado: chamado
      });
    } else {
      return res.status(400).json({
        sucess: false,
        msg: 'Falha na criação do Chamado, matricula já não encontrada!'
      });
    }
  }
}