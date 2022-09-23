jwt = require('jsonwebtoken')

const authMiddleware = function (request, response, next) {

    // Получаю ключ из любой точки
    const token =
        request.body.token ||
        request.query.token ||
        request.headers["x-access-token"] ||
        request.headers.authorization;

    // console.log("Проверяю ключ: " + token)

    // Если передали ключ - проверю его
    if (token !== null && token !== "null" ) {
        // console.log("Проверяю ключ1: " + token)

        jwt.verify(
            token,
            process.env.JWT_KEY,
            (err, jwtUser) => {

                if (err) {
                    // console.log("Ошибка расшифровки")
                    // console.log(err)
                } // если ошибка - просто пойду дальше
                else {
                    // console.log("Восстановленные данные")
                    // console.log(jwtUser)
                    request.user = jwtUser // передаю всем кто пришел
                }
            }
        )
    }

    // Пойти дальше
    next()
}

module.exports = authMiddleware;