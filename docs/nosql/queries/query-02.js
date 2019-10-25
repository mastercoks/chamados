db.chamados.aggregate([
  {$match: {"tipo_servico.nome": "MANUT. DE EMAIL"}},
  {$project :{ resolvido: 0 }}
]);