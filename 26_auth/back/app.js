// Чтение данных из файла .env
require('dotenv').config();

// Сам веб сервер (приложение)
let express = require('express');
let app = express();

// Для технических сообщений
let logger = require('morgan');
app.use(logger('dev'));

// Для разрешения получать запросы с любого места
let cors = require('cors')
app.use(cors())

// Для работы JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Для работы с куками
let cookieParser = require('cookie-parser');
app.use(cookieParser());

// Для статических файлов
let path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Для работы с базой данных
require("./config/mongo").connect();

// Подключение маршрутов
const auth = require('./routes/auth')
app.use('/api/auth', auth)

// Подготовка модуля к работе
module.exports = app;