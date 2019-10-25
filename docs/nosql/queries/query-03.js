db.chamados.aggregate([
  {$lookup: {
    from: "funcionarios",
    localField: "funcionario_id",
    foreignField: "_id",
    as: "funcionario"
  }},
  {$match:
    {$and:[
      {"funcionario.setor": 
        {$eq: "CONTABIL.  RH"}
      },
      {"data_hora_abertura":
        {$gte: ISODate("2019-10-19T17:09:12.000Z")}
      },
      {"data_hora_abertura":
        {$lte: ISODate("2019-10-19T17:10:43.000Z")}
      },
    ]}
  }
]);