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

    let { status, funcionario_criou, funcionario_atribuido, data_inicial, data_final, tipo_servico, prioridade, utilizouProduto } = req.query;

    let filter = {
      $and: []
    }

    if (status == 'NaoResolvido') {
      filter.$and.push({status: 'Aberto'})
      filter.$and.push({"resolvido.funcionario_id": {$exists: true}})
    } else {
      if (status) filter.$and.push({status});
    }    

    if (utilizouProduto ) {
      if (utilizouProduto == "true") {
        filter.$and.push({"resolvido.produtosUtilizados": {$exists:true, $not:{$size:0}}})
      } else if (utilizouProduto == "false") {
        filter.$and.push({"resolvido.produtosUtilizados.0": {$exists:false}})
      }
    }
    
    if (funcionario_criou) {
      let funcionario = await Funcionario.findOne({ matricula: funcionario_criou });
      filter.$and.push({funcionario_id : funcionario._id})
    };  

    if (funcionario_atribuido) {
      let funcionario = await Funcionario.findOne({ matricula: funcionario_atribuido });
      filter.$and.push({"resolvido.funcionario_id" : funcionario._id})
    };  

    if (data_inicial && data_final) filter.$and.push({$and: [{data_hora_abertura : {$gte : data_inicial}}, {data_hora_abertura : {$lte : data_final}}]});

    if (tipo_servico) filter.$and.push({"tipo_servico.nome" : tipo_servico});
    
    if (prioridade) filter.$and.push({"tipo_servico.prioridade" : prioridade});

    console.log(filter);
    if (filter.$and.length === 0) filter = {};
    const chamados = await Chamado.find(filter).populate("funcionario_id").populate("resolvido.funcionario_id").populate("resolvido.produtosUtilizados.produto_id").exec();

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