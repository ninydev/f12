// Сам веб сервер (приложение)
let express = require('express');
let app = express();

// Для технических сообщений
let logger = require('morgan');
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Для работы с куками
let cookieParser = require('cookie-parser');
app.use(cookieParser());

// Для статических файлов
let path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Маршрутизация
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let studentsRouter = require('./routes/students');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/students', studentsRouter);

module.exports = app;
