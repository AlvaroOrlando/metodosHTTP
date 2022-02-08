const controller = {
    viewContato:(req,res)=>{
        let{nome, idade} = req.query;
        res.render('index', {nomeUsuario:nome})
    },
    confirmarContato: (req,res)=>{
        let{nome,sexo} = req.query;
        res.render('contato', {
            nomeUsuario:nome,
            title: "Home",
            sexoUsuario: sexo
        })
    }
};

module.exports = controller;