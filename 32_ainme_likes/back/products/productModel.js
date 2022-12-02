// Подключение модуля работы с базой
const mongoose = require("mongoose");

// Настройка полей (схемы)
const productSchema = new mongoose.Schema({

    name: { type: String, unique: true },
    photo: String,
    price: Number,
    created_at: Date,

    likeUsers: [], // Собраны все, кто лайкал этот продукт
    likeCount: Number, // Количество лайков

    comments: [], // UserId, Message

    starsUsers: [], // Кто поставил оценки
    stars: Number, // Вычесленный средний бал

    // ......

});

module.exports = mongoose.model("products", productSchema);