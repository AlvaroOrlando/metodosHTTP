var express = require('express');
var router = express.Router();
var produtosController = require('../controllers/produtosController')

router.get('/', produtosController.viewProdutos);
router.post('/', produtosController.criarProdutos);
router.get('/sucesso', produtosController.criarProdutos)


module.exports = router;