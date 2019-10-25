db.chamados.aggregate([{
  $lookup: {
    from: "chamado_resolvido",
    localField: "_id",
    foreignField: "chamado_id",
    as: "chamados_resolvidos"
  }}, {
  $group: {
    _id:{
      abertura: "$data_hora_abertura",
      resolucao: "$resolvido.data_hora_finalizado"
    },
    count: { $sum: 1 },
    chamados: {$push:{
      _id: "$_id",
      descricao: "$descricao",
      funcionario_id: "$funcionario_id",
      status: "$status",
      tipo_servico: "$tipo_servico",
    }}
  }
}]);
