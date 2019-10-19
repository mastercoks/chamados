const Funcionario = require('../models/funcionario.model');

module.exports = {
  
  async index(req, res) {
    const { matricula } = req.params;

    const funcionario = await Funcionario.findOne({ matricula });;

    return res.json(funcionario);
  },

  async show(req, res) {

    let { nome, matricula, tipo, setor } = req.query;
    
    let filter = {
      $and: []
    };

    nome = nome ? '.*'+nome+'*.' : '.*.'; 
    
    filter.$and.push({nome: new RegExp(nome, "i")})

    if (matricula) filter.$and.push({matricula});
    if (tipo) filter.$and.push({tipo});
    if (setor) filter.$and.push({setor});

    console.log(filter);
    

    const funcionarios = await Funcionario.find(filter);

    return res.json(funcionarios);
  },

  async store(req, res) {
    const { matricula, nome, tipo, senha, setor } = req.body;
    
    let funcionario = await Funcionario.findOne({ matricula });
    
    if (!funcionario) {
      funcionario = await Funcionario.create({ matricula, nome, tipo, senha, setor });
      return res.json({
        sucess: true,
        msg: 'Funcionário criado com sucesso!',
        funcionario: funcionario
      });
    } else {
      return res.status(400).json({
        sucess: false,
        msg: 'Falha na criação do Funcionário, matricula já existente!'
      });
    }
  }
}