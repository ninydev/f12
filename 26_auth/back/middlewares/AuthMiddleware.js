jwt = require('jsonwebtoken')

exports.auth = function (request, response, next) {
    // Если передали ключ - проверю его
    if (request.headers.authorization) {
        jwt.verify(
            request.headers.authorization.split(' '),
            process.env.JWT_KEY,
            (err, jwtUser) => {
                if (err) {
                    console.log("Ошибка расшифровки")
                    console.log(err)
                    next()
                } // если ошибка - просто пойду дальше

                console.log("Восстановленные данные")
                console.log(jwtUser)
            }
        )
    }

    // Пойти дальше
    next()

}