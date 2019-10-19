const express = require('express');
const FuncionarioController = require('./controllers/funcionario.controller');
const ProdutoController = require('./controllers/produto.controller');
const ChamadoController = require('./controllers/chamado.controller');
const AtribuirController = require('./controllers/atribuir.controller');
const AddProdutoController = require('./controllers/addProduto.controller');


const routes = express.Router();

routes.post('/addProduto', AddProdutoController.update);

routes.post('/atribuir', AtribuirController.update);

routes.get('/funcionarios/:id', FuncionarioController.index);
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