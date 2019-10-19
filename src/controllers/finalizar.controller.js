const Chamado = require('../models/chamado.model');
const Funcionario = require('../models/funcionario.model');

module.exports = {
  
  async update(req, res) {
    
    const { id, funcionario_matricula, descricao, status} = req.body;

    const chamado = await Chamado.findById(id);

    if (status === 'Aberto') {      
      return res.status(400).json({
        sucess: false,
        msg: 'Falha ao finalizar, status tem que ser diferente de Aberto!'
      });
    }

    if (!chamado) {      
      return res.status(400).json({
        sucess: false,
        msg: 'Falha ao finalizar, chamado não encontrado!'
      });
    }

    if (chamado.status !== 'Aberto') {
      return res.status(400).json({
        sucess: false,
        msg: 'Falha ao finalizar, chamado não está aberto!'
      });
    }

    if (!chamado.resolvido) {
      return res.status(400).json({
        sucess: false,
        msg: 'Falha ao finalizar, chamado não está atribuido a algum funcionário!'
      });
    }
    
    const funcionario = await Funcionario.findOne({ matricula: funcionario_matricula });
    
    if (!funcionario) {      
      return res.status(400).json({
        sucess: false,
        msg: 'Falha ao finalizar, funcionario não encontrado!'
      });
    }

    if (funcionario.tipo !== 'TI') {
      return res.status(400).json({
        sucess: false,
        msg: 'Falha ao finalizar, funcionario sem permissão!'
      });
    }    

    const chamadoFinalizado = await Chamado.updateOne({
      _id: id
    },
    { 
      status,
      "resolvido.data_hora_finalizado": Date(),
      "resolvido.descricao": descricao
    })

    return res.json({
      sucess: true,
      msg: 'Chamado finalizado com sucesso!',
      chamadoFinalizado: chamadoFinalizado
    });
  }
}