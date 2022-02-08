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

    viewAttForm: (req,res)=>{
        let {id} = req.params;
        produtos = [
            {id:1, nome:'Produto X', preco: 10},
            {id:2, nome:'Produto Y', preco: 20},
            {id:3, nome:'Produto Z', preco: 30}
        ];
''
        res.render('editarProduto', {title:'Editar Produto', 
                                     produto: produtos[id]});
    },

    editar: (req,res)=>{
        let {nomeProduto,precoProduto} = req.body 
        res.send("Produto " + nomeProduto + " editado com sucesso! Novo preço: " + precoProduto)
    }
    
}

module.exports = produtosController;