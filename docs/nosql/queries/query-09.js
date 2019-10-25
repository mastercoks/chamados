db.chamados.aggregate([{
  $lookup: {
    from: "funcionarios",
    localField: "funcionario_id",
    foreignField: "_id",
    as: "funcionario"
  }},
  {$match:{_id: ObjectId("5dab436f3db2734f40519379")}},
  {$project:{_id: 0, id:"$funcionario._id", nome:"$funcionario.nome"}}
]);