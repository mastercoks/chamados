db.chamados.aggregate([
  {$match: {$and:[
    {"resolvido.funcionario_id":{$exists: true}},
    {"status":'Aberto'}
  ]}}
]);
