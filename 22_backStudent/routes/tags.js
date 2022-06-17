let express = require('express');
let router = express.Router();

// Получить модуль управления продуктами
let cTags = require('./../controllers/tagController')

// Создать новую запись
// Create === POST
router.post('/', cTags.create)

// назначить маршрут в корень на метод
// Read (All) === GET
router.get('/', cTags.index)

// назначить маршрут с параметром
// Read (One) === GET
router.get('/:tagId', cTags.show)

// назначить маршрут с параметром
// Update (One) === PUT
router.put('/:tagId', cTags.update)

// назначить маршрут с параметром
// Delete (One) === DELETE
router.delete('/:tagId', cTags.delete)

// Подготовить модуль для работы в приложении
module.exports = router;