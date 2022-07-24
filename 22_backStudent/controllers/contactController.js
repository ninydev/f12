const contactModel = require("../models/contacts");

exports.create = function (request, response) {
    // console.log(request.body)
    // Получили новое обращение на сервере
    let contact = request.body
    // TODO тут бек проводит свое исследование еще раз. Проверки на длину валидность и тд
    // Создали запись в базе данных
    const newContact = new contactModel(contact)


    // Сохранили запись в базе данных
    newContact.save(function (err) {
        if (err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        } else { // Если все хорошо - вернуть что мы сохранили в обращении
            return response.status(201).json(newContact)
        }
    });
}