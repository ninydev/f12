const userModel = require('./../models/User')

/**
 * Авторизация
 */
exports.login = function (request, response) {
    let user = request.body
    console.log(user)

    userModel.findOne({email: user.email, password: user.password},
        function (err, dbUser) {
            // Если ошибка - вернуть ошибку
            if (err) {
                console.log(err)
                return response.status(422).json(err)
            }
            // Если в базе не найдено вернуть 403
            if(dbUser=== null) {
                return response.status(403).json('{"err":"Auth"}')
            }
            console.log('Find')
            console.log(dbUser)
            return response.status(201).json(dbUser)
    })


}


/**
 * Регистрация нового пользователя
 */
exports.register = function (request, response) {
    let user = request.body
    const newUser = new userModel(user)

    console.log(user)

    newUser.save( async function (err) {
        if (err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        }
        return response.status(201).json(newUser)
    })
}
