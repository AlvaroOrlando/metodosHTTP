var express = require('express');
var router = express.Router();
var indexController = require ('../controllers/indexController')


router.get('/', (req,res)=> {
  res.render('index', {title: 'Home' });
});

router.get('/contato', indexController.viewContato);
router.get('/confirmarContato', indexController.confirmarContato);
   



module.exports = router;
