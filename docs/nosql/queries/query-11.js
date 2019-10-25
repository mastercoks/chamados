db.chamados.aggregate([
  {$match: {$and:[
    {"status":"Resolvido"},
    {"tipo_servico.nome": "MANUT. DE EMAIL"}
  ]}}, {
     $group: {
       _id: "_id", 
       media:{ $avg: { $multiply: [
          {$sum:{$subtract:[
            "$resolvido.data_hora_finalizado",
            "$data_hora_abertura"
          ]}},
          {$sum: 1}
        ]}}}
  }]);
