db.chamados.insertMany([
  { 
    "_id":ObjectId("5dab436f3db2734f40519379"),
    "descricao":"Email não está abrindo",
    "funcionario_id":ObjectId("5dab43603db2734f40519378"),
    "status":"Resolvido",
    "data_hora_abertura":ISODate("2019-10-19T17:10:07Z"),
    "tipo_servico":{ 
      "nome":"MANUT. DE EMAIL",
      "prioridade":"Media"
    },
    "resolvido":{ 
       "funcionario_id":ObjectId("5dab43503db2734f40519377"),
       "data_hora_vinculo":ISODate("2019-10-19T17:10:43Z"),
       "produtosUtilizados":[ 
          { 
            "produto_id":ObjectId("5dab43103db2734f40519376"),
            "quantidade":1
          }
       ],
       "data_hora_finalizado":ISODate("2019-10-19T17:26:29Z"),
       "descricao":"Configurei o proxy no computador do usuário."
    }
 },
 { 
    "_id":ObjectId("5dab4374ab67fb0017d58811"),
    "descricao":"Novo Chamado",
    "funcionario_id":ObjectId("5dab43503db2734f40519377"),
    "status":"Aberto",
    "data_hora_abertura":ISODate("2019-10-19T17:10:12Z"),
    "tipo_servico":{ 
      "nome":"ALTERAR CPS",
      "prioridade":"Baixa"
    },
    "resolvido":{ 
       "funcionario_id":ObjectId("5dab43503db2734f40519377"),
       "data_hora_vinculo":ISODate("2019-10-19T17:28:24Z"),
       "produtosUtilizados":[ 
          { 
            "produto_id":ObjectId("5dab43103db2734f40519376"),
            "quantidade":1
          }
       ]
    }
 },
 { 
    "_id":ObjectId("5dab4c0676dc72001747641e"),
    "descricao":"Fonte Queimada",
    "funcionario_id":ObjectId("5dab4abb7e0ba600174f3df4"),
    "status":"Resolvido",
    "data_hora_abertura":ISODate("2019-10-19T17:46:46Z"),
    "tipo_servico":{ 
      "nome":"MANUT. DE COMPUTADOR",
      "prioridade":"Alta"
    },
    "resolvido":{ 
       "funcionario_id":ObjectId("5dab43503db2734f40519377"),
       "data_hora_vinculo":ISODate("2019-10-19T17:50:55Z"),
       "produtosUtilizados":[ 
          { 
            "produto_id":ObjectId("5dab50f136fa96001709db6b"),
            "quantidade":2
          },
          { 
            "produto_id":ObjectId("5dab51c836fa96001709db86"),
            "quantidade":20
          }
       ],
       "data_hora_finalizado":ISODate("2019-10-19T18:21:53Z"),
       "descricao":"Conserto Realizado"
    }
 },
 { 
    "_id":ObjectId("5dab5493637fcc5f34644c9c"),
    "descricao":"Email não está abrindo",
    "funcionario_id":ObjectId("5dab4df976dc720017476436"),
    "status":"Aberto",
    "data_hora_abertura":ISODate("2019-10-19T17:10:07Z"),
    "tipo_servico":{ 
      "nome":"MANUT. DE EMAIL",
      "prioridade":"Media"
    },
    "resolvido":{ 
 
    }
 },
 { 
    "_id":ObjectId("5dab76c7fa4a8300172fd9a7"),
    "descricao":"Novo Chamado",
    "funcionario_id":ObjectId("5dab43603db2734f40519378"),
    "status":"Resolvido",
    "data_hora_abertura":ISODate("2019-10-19T20:49:11Z"),
    "tipo_servico":{ 
      "nome":"AVISO DE LENTIDÃO",
      "prioridade":"Alta"
    },
    "resolvido":{ 
       "_id":ObjectId("5dab76e0fa4a8300172fd9b3"),
       "funcionario_id":ObjectId("5dab43503db2734f40519377"),
       "data_hora_vinculo":ISODate("2019-10-19T20:49:36Z"),
       "produtosUtilizados":[ 
          { 
            "produto_id":ObjectId("5dab512136fa96001709db6f"),
            "quantidade":10
          }
       ],
       "data_hora_finalizado":ISODate("2019-10-19T20:50:48Z"),
       "descricao":"Chamado Finalizado"
    }
 },
 { 
    "_id":ObjectId("5dab99ee91d9640017398f72"),
    "descricao":"Pc não liga",
    "funcionario_id":ObjectId("5dab506536fa96001709db69"),
    "status":"Aberto",
    "data_hora_abertura":ISODate("2019-10-19T23:19:10Z"),
    "tipo_servico":{ 
      "nome":"MANUT. DE COMPUTADOR",
      "prioridade":"Alta"
    },
    "resolvido":{ 
       "funcionario_id":ObjectId("5dab43503db2734f40519377"),
       "data_hora_vinculo":ISODate("2019-10-19T23:28:22Z"),
       "produtosUtilizados":[ 
 
       ]
    }
 }
])