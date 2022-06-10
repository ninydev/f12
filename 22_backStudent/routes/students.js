let express = require('express');
let router = express.Router();

// Получить модуль управления продуктами
let cStudents = require('./../controllers/studentsController')

// Создать новую запись
// Create === POST
router.post('/', cStudents.create)

// назначить маршрут в корень на метод
// Read (All) === GET
router.get('/', cStudents.index)

// назначить маршрут с параметром
// Read (One) === GET
router.get('/:studentId', cStudents.show)

// назначить маршрут с параметром
// Update (One) === PUT
router.put('/:studentId', cStudents.update)

// назначить маршрут с параметром
// Delete (One) === DELETE
router.delete('/:studentId', cStudents.delete)


module.exports = router;