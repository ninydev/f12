// Подключиение модуля работы с базой
const mongoose = require("mongoose");
const {Schema} = require("mongoose");

// Настройка полей (схемы)
const tagSchema = new mongoose.Schema({
    name: { type: String, unique: true }, // Можно указывать так, если будут расширенные параметры
});

module.exports = mongoose.model("tags", tagSchema);