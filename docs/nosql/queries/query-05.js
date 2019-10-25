db.chamados.aggregate([
  {$match: {"_id": ObjectId("5dab436f3db2734f40519379")}},
  {$project: {"produtos": "$resolvido.produtosUtilizados"}},
  {$lookup: {
    from: "produtos",
    localField: "produtos.produto_id",
    foreignField: "_id",
    as: "produto"
  }},
  {$project: {
    "produtos": "$produto.nome", 
    "quantidade":"$produtos.quantidade"
  }},
]);