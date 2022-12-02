let express = require('express');
let router = express.Router();

const productController = require('./productController')
const likeController = require('./likeController')

router.get('/', productController.getAll )
router.post('/', productController.create)

router.put('/like', likeController.like)

// Подготовится к подключению к общей сети дорог
module.exports = router;