let express = require('express');
let router = express.Router();

// Получить модуль управления продуктами
let cProduct = require('./../controllers/productController')

// Создать новую запись
// Create === POST
router.post('/', cProduct.create)

// назначить маршрут в корень на метод
// Read (All) === GET
router.get('/', cProduct.index)

// назначить маршрут с параметром
// Read (One) === GET
router.get('/:productId', cProduct.show)

// назначить маршрут с параметром
// Update (One) === PUT
router.put('/:productId', cProduct.update)

// назначить маршрут с параметром
// Delete (One) === DELETE
router.delete('/:productId', cProduct.delete)

router.post('/find', cProduct.find)

// Подготовить модуль для работы в приложении
module.exports = router;