let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');



let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Настройка машрутов
let indexRouter = require('./routes/index');
app.use('/', indexRouter);
let usersRouter = require('./routes/users');
app.use('/users', usersRouter);

let productRouter = require('./routes/products');
app.use('/api/products', productRouter);
let studentRouter = require('./routes/students');
app.use('/api/students', studentRouter);

module.exports = app;
