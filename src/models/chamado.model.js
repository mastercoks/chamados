const mongoose = require('mongoose');

const tipoServicoSchema = new mongoose.Schema({
  nome: {
    type: String,
    enum : [
      'ALTERAR CPS',
      'AVISO DE LENTIDÃO',
      'DESTRAVAR SAÍDA',
      'GERENCIAR USUÁRIO',
      'MANUT. DE CÃMERAS',
      'MANUT. DE COMPUTADOR',
      'MANUT. DE EMAIL',
      'MANUT. DE IMP/SCAN.',
      'MANUT. DE INTERNET',
      'MANUT. OUTROS EQUIP.',
      'MANUT. OUTROS PROG.',
      'MANUT.DE TEL/RAMAL',
      'MANUT. CALL CENTER',
      'MANUT. DO ECG/MAPA',
      'MANUT. SISTEMA CPC',
      'MANUT. SIS. DE PONTO',
      'MANUT. SIS. DO SUS',
      'MANUT. SIS. DOMÍNIO',
      'MANUT. UROFLUXO MICA',
      'RETIRAR ALTA',
      'SOLICI. DESBLOQUEIOS',
      'SOLICI.EQUIPAMENTOS',
      'SUPORTE AO USUÁRIO',
      'TROCA DE TONER',
      'UNIFICAR CADASTRO'
    ],
    required: true
  },
  prioridade: {
    type: String,
    enum: ['Baixa', 'Media', 'Alta'],
    required: true
  }
});

const produtosUtilizadosSchema = new mongoose.Schema({
  produto_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produto',
    required: true
  }, 
  quantidade: {
    type: Number,
    required: true
  }
});

const resolvidoSchema = new mongoose.Schema({
  funcionario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Funcionario',
    required: true
  },
  data_hora_vinculo: {
    type: Date,
    required: true
  },
  data_hora_finalizado: {
    type: Date
  },
  descricao: {
    type: String
  },
  produtosUtilizados: [produtosUtilizadosSchema]
});

const ChamadoSchema = new mongoose.Schema({
  descricao: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Aberto', 'Cancelado', 'Resolvido'],
    required: true
  },
  funcionario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Funcionario',
    required: true
  },  
  data_hora_abertura: {
    type: Date,
    required: true
  },
  tipo_servico: {
    type: tipoServicoSchema,
    required: true
  },
  resolvido: resolvidoSchema
});

module.exports = mongoose.model('Chamado', ChamadoSchema);