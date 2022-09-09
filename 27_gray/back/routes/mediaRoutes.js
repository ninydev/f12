// Методы для прокладки дороги
let express = require('express');
let router = express.Router();

let fileController = require('./../controllers/api/files/FileController')

router.post('/file', fileController.getFile)

module.exports = router;