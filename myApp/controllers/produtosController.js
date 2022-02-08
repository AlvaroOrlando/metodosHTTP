const produtosController = {
    viewProdutos: (req,res)=>{
        res.render('produtos', {title: 'Produtos'})
    },
    

    criarProdutos: (req,res)=>{
        let produto ={
            nome: null,
            preco: null
        };
        produto.nome = req.body.nome;
        produto.preco = req.body.preco;

        res.render('sucesso', {title: 'Sucesso',
                               nome:produto.nome,
                               preco:produto.preco
                            })
    },
    
    
}

module.exports = produtosController;