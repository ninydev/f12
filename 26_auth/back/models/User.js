// Подключиение модуля работы с базой
const mongoose = require("mongoose");

// Настройка полей (схемы)
const contactSchema = new mongoose.Schema({

    email: String,
    password: String,

// Относится к профилю пользователя:
//     name: String,
//     phone: String,
//     message: String,
//     created_at: Date,
//     sendToMe: String,
//     sendToUser: String
});

module.exports = mongoose.model("contacts", contactSchema);