const Chamado = require('../models/chamado.model');
const Funcionario = require('../models/funcionario.model');

module.exports = {
  
  async update(req, res) {
    
    const { id, funcionario_matricula } = req.body;


    const chamado = await Chamado.findById(id);

    if (!chamado) {      
      return res.status(400).json({
        sucess: false,
        msg: 'Falha na atribuição do Chamado, chamado não encontrado!'
      });
    }

    if (chamado.status !== 'Aberto') {
      return res.status(400).json({
        sucess: false,
        msg: 'Falha na atribuição do Chamado, chamado não está aberto!'
      });
    }

    if (chamado.resolvido) {
      return res.status(400).json({
        sucess: false,
        msg: 'Falha na atribuição do Chamado, chamado já está atribuido a algum funcionário!'
      });
    }
    
    const funcionario = await Funcionario.findOne({ matricula: funcionario_matricula });
    
    if (!funcionario) {      
      return res.status(400).json({
        sucess: false,
        msg: 'Falha na atribuição do Chamado, funcionario não encontrado!'
      });
    }

    if (funcionario.tipo !== 'TI') {
      return res.status(400).json({
        sucess: false,
        msg: 'Falha na atribuição do Chamado, funcionario sem permissão!'
      });
    }

    const resolvido = {
      funcionario_id: funcionario.id,
      data_hora_vinculo: Date()
    }
    
    const chamadoAtribuido = await Chamado.updateOne({
      _id: id
    }, {
      resolvido
    })
    return res.json({
      sucess: true,
      msg: 'Chamado atribuido com sucesso!',
      chamadoAtribuido: chamadoAtribuido
    });
  }
}