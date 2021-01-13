const express = require('express');

const AtribuirController = require('./controllers/atribuir.controller');
const AddProdutoController = require('./controllers/addProduto.controller');
const ChamadoController = require('./controllers/chamado.controller');
const FuncionarioController = require('./controllers/funcionario.controller');
const ProdutoController = require('./controllers/produto.controller');
const HealthcheckController = require('./controllers/healthcheck.controller');
const FinalizarController = require('./controllers/finalizar.controller');

const routes = express.Router();

routes.get('/healthcheck', HealthcheckController.index);

routes.post('/atribuir', AtribuirController.update);

routes.post('/addProduto', AddProdutoController.update);

routes.post('/finalizar', FinalizarController.update);

routes.get('/funcionarios/:matricula', FuncionarioController.index);
routes.get('/funcionarios', FuncionarioController.show);
routes.post('/funcionarios', FuncionarioController.store);

routes.get('/produtos/:id', ProdutoController.index);
routes.post('/produtos/:id', ProdutoController.update);
routes.get('/produtos', ProdutoController.show);
routes.post('/produtos', ProdutoController.store);

routes.get('/chamados/:id', ChamadoController.index);
routes.get('/chamados', ChamadoController.show);
routes.post('/chamados', ChamadoController.store);

module.exports = routes;