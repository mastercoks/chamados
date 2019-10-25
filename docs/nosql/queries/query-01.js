db.chamados.find({
  $and:[
    {"resolvido.data_hora_finalizado":{
      $gte: ISODate("2019-10-01T00:00:00.000Z")
    }},
    {"resolvido.data_hora_finalizado":{
      $lte: ISODate("2019-10-24T00:00:00.000Z")
    }},
    {"resolvido.funcionario_id": ObjectId("5dab43503db2734f40519377")}
  ]
}).count();