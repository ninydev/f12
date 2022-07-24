// Методы для прокладки дороги
let express = require('express');
let router = express.Router();

// Ссылка на того - к кому я прокладываю дорогу
let cContact = require('./../controllers/contactController')

// Правила - как отвечать тому, кто пришел
router.post('/', cContact.create)

// Подготовится к подключению к общей сети дорог
module.exports = router;