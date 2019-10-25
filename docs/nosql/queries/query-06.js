db.produtos.aggregate([
  {$match: {"nome":"PC"}},
  {$project: {nome: 1, quantidade: 1}}
]);