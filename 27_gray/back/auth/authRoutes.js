// Методы для прокладки дороги
let express = require('express');
let router = express.Router();

// Ссылка на того - к кому я прокладываю дорогу
let controller = require('./AuthController')

// Правила - как отвечать тому, кто пришел
router.post('/register', controller.register)
router.post('/login', controller.login)

// Подготовится к подключению к общей сети дорог
module.exports = router;