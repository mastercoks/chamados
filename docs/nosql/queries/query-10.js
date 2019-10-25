db.chamados.aggregate([
  {$match: {$and:[
    {"resolvido.produtosUtilizados.0":{$exists: false}},
    {"status":'Resolvido'},
    {"resolvido.data_hora_finalizado": {
      $gte: ISODate("2019-10-19T17:26:29.000Z")
    }},
    {"resolvido.data_hora_finalizado": {
      $lte: ISODate("2019-10-19T18:21:53.000Z")
    }}
  ]}}
]);
