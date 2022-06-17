// Подключиение модуля работы с базой
const mongoose = require("mongoose");
const {Schema} = require("mongoose");

// Настройка полей (схемы)
const studentSchema = new mongoose.Schema({
    name: { type: String }, // Можно указывать так, если будут расширенные параметры
    age: Number // Необходимое и достаточное описание
});

module.exports = mongoose.model("students", studentSchema);