// Подключиение модуля работы с базой
const mongoose = require("mongoose");
const {Schema} = require("mongoose");


const productSchema = new mongoose.Schema({
    name: { type: String }, // Можно указывать так, если будут расширенные параметры
    price: Number // Необходимое и достаточное описание
    // ...
});

module.exports = mongoose.model("products", productSchema);