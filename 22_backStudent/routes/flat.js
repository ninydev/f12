// Методы для прокладки дороги
let express = require('express');
let router = express.Router();

// Ссылка на того - к кому я прокладываю дорогу
let cFlat = require('./../controllers/flatController')

// Правила - как отвечать тому, кто пришел
router.get('/', cFlat.index)

// Подготовится к подключению к общей сети дорог
module.exports = router;