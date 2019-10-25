db.chamados.aggregate([
  {$match: {"funcionario_id": ObjectId("5dab43603db2734f40519378")}},
  {$project: {"resolvido.funcionario_id": 1, "chamado._id": 1}}
]);