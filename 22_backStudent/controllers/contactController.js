const contactModel = require("../models/contacts")
const nodemailer = require("nodemailer")
const fetch = require("node-fetch")

exports.create = function (request, response) {
    // console.log(request.body)
    // Получили новое обращение на сервере
    let contact = request.body
    contact.created_at = Date.now()
    // TODO тут бек проводит свое исследование еще раз. Проверки на длину валидность и тд
    // Создали запись в базе данных
    const newContact = new contactModel(contact)


    // Сохранили запись в базе данных
    newContact.save( async function (err) {
        if (err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        } else { // Если все хорошо - вернуть что мы сохранили в обращении

            let transporter = nodemailer.createTransport({
                pool: true,
                host: process.env.MAIL_HOST,
                port: process.env.MAIL_PORT,
                secure: true, // use TLS
                auth: {
                    user: process.env.MAIL_USERNAME,
                    pass: process.env.MAIL_PASSWORD,
                },
            });

            // Это обращение к моему сотруднику
            let toMe = await transporter.sendMail({
                from: process.env.MAIL_FROM_ADDRESS, // sender address
                to: "keeper@ninydev.com", // list of receivers
                subject: "New Contact", // Subject line
                text: JSON.stringify(newContact), // plain text body
                html: JSON.stringify(newContact), // html body
            });

            // Это письмо клиенту - что он очень важен для нас
            let toUser = await transporter.sendMail({
                from: process.env.MAIL_FROM_ADDRESS, // sender address
                to: newContact.email, // list of receivers
                subject: "Спасибо за обращение", // Subject line
                text: JSON.stringify(newContact), // plain text body
                html: JSON.stringify(newContact), // html body
            });

            // Отправить сообщение в TG
            let api = "https://api.telegram.org/bot" + process.env.TG_API
                + "/sendMessage?chat_id=" + process.env.TG_ID + "&text=";

            // Подготовить сообщение (заменить проблемы на %20 и поставить переносы
            let msg = JSON.stringify(newContact) // Сообщение
            msg =  msg.replace(/ /g, '%20').split('\n').join('%0A');
            await fetch(api + msg)
                // При необходимости можем еще мониторить отправку (на статус 200)
                // .then(res => {console.log(res);
                //     if (res.json()) return res.json()
                //     return res.text()
                // })
                // .then(data => console.log(data))
                // .catch(err=> {console.log(err)})

            // Фиксируем номер отправки по данным сервера
            newContact.sendToMe = toMe.messageId
            newContact.sendToUser = toUser.messageId

            // Сохраняем номера отправки почты на сервере
            newContact.save(function (err) {
                if (err) { // Если ошибка - вернуть ошибку
                    console.log(err)
                    return response.status(422).json(err)
                }
                return response.status(201).json(newContact)
            })


        }
    });
}