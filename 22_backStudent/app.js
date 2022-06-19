// Сам веб сервер (приложение)
let express = require('express');
let app = express();

// Для технических сообщений
let logger = require('morgan');
app.use(logger('dev'));

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

/**
 * Маршрутизация
 */

// Для главной страницы
let indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Для блока пользователей
let usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// Для работы со студентами
let studentsRouter = require('./routes/students');
app.use('/api/students', studentsRouter);

// Для работы с кватрирами
let flatRouter = require('./routes/flat');
app.use('/api/flat', flatRouter);

// Для работы с хлебом
let breadRouter = require('./routes/bread')
app.use('/api/bread', breadRouter);

// Для работы с метками
let tagRouter = require('./routes/tags')
app.use('/api/tags', tagRouter)

// Для работы с продуктами
let productRouter = require('./routes/product')
app.use('/api/products', productRouter)

// ...
// для работы с продуктами, елками, животными ... e.t.c.
// ...


// Подготовка модуля к работе
module.exports = app;
