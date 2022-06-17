// Методы для прокладки дороги
let express = require('express');
let router = express.Router();

// Ссылка на того - к кому я прокладываю дорогу
let cBread = require('./../controllers/breadController')

// Правила - как отвечать тому, кто пришел
router.get('/', cBread.index)

// Подготовится к подключению к общей сети дорог
module.exports = router;