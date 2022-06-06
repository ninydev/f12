let express = require('express');
let router = express.Router();

// Получить модуль управления продуктами
let cStudents = require('./../controllers/studentsController')

// назначить маршрут в корень на метод
router.get('/', cStudents.index);

// CRUD - каждой операции свой метод и маршрут

module.exports = router;