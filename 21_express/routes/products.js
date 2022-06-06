let express = require('express');
let router = express.Router();

// Получить модуль управления продуктами
let cProducts = require('./../controllers/productsController')

// назначить маршрут в корень на метод
router.get('/', cProducts.index);

// CRUD - каждой операции свой метод и маршрут

module.exports = router;