-- 1

SELECT COUNT(*) quantidade
FROM chamado_resolvido
WHERE chamado_resolvido.data_hora_resolucao BETWEEN '2018-07-11 08:50:17' AND '	2018-08-04 12:45:47'
AND chamado_resolvido.funcionario_matricula = '20180010';

-- 2
SELECT chamado.id,
  chamado.descricao,
  chamado.status,
  chamado.funcionario_matricula,
  chamado.data_hora_abertura,
  tipo_de_servico.nome,
  tipo_de_servico.prioridade
FROM chamado
JOIN tipo_de_servico ON chamado.servico_codigo = tipo_de_servico.codigo
WHERE tipo_de_servico.nome LIKE 'TROCA DE TONER';

-- 3
SELECT chamado.id,
	chamado.descricao,
    chamado.status,
    chamado.funcionario_matricula,
    chamado.data_hora_abertura,
    chamado.servico_codigo
FROM chamado
JOIN funcionario ON funcionario.matricula = chamado.funcionario_matricula
JOIN setor ON setor.codigo = funcionario.setor_codigo
WHERE setor.nome LIKE 'CONTABIL.  RH'
AND chamado.data_hora_abertura BETWEEN '2018-08-04 12:30:45' AND '	2018-08-10 12:30:45';

-- 4
SELECT chamado_resolvido.funcionario_matricula,
	chamado.id
FROM chamado
JOIN chamado_resolvido ON chamado.id = chamado_resolvido.chamado_id
WHERE chamado.funcionario_matricula = '20180001';

-- 5
SELECT chamado_resolvido.chamado_id,
  produto.nome,
	produto_utilizado.quantidade
FROM chamado_resolvido
JOIN produto_utilizado ON produto_utilizado.chamado_resolvido_id = chamado_resolvido.id
JOIN produto ON produto.id = produto_utilizado.produto_id
WHERE chamado_resolvido.chamado_id = 6;

-- 6
SELECT produto.nome,
	SUM(produto.quantidade) quantidade
FROM produto
WHERE produto.nome LIKE 'HD'
GROUP BY produto.nome;

-- 7
SELECT *
FROM chamado
JOIN chamado_resolvido ON chamado_resolvido.chamado_id = chamado.id
WHERE chamado.status = 'ABERTO';

-- 8
SELECT *
FROM chamado
JOIN chamado_resolvido ON chamado_resolvido.chamado_id = chamado.id
ORDER BY chamado.data_hora_abertura, chamado_resolvido.data_hora_resolucao;

-- 9
SELECT funcionario.matricula,
	funcionario.nome
FROM chamado
JOIN funcionario ON funcionario.matricula = chamado.funcionario_matricula
WHERE chamado.id = 1;

-- 10
SELECT *
FROM chamado_resolvido
WHERE chamado_resolvido.id NOT IN (SELECT produto_utilizado.chamado_resolvido_id FROM produto_utilizado);

-- 11
SELECT SEC_TO_TIME(
    AVG(
        TIMESTAMPDIFF(
                SECOND,
                chamado.data_hora_abertura,
                chamado_resolvido.data_hora_resolucao
        	)
    	)
	) MEDIA
FROM chamado
JOIN chamado_resolvido ON chamado_resolvido.chamado_id = chamado.id
JOIN tipo_de_servico ON tipo_de_servico.codigo = chamado.servico_codigo
WHERE chamado.status = 'RESOLVIDO'
AND chamado.servico_codigo = 6;
