jwt = require('jsonwebtoken')
const userModel = require('./../models/User')

let bcrypt = require('bcrypt')
let salt = process.env.BCRYPT_SALT // bcrypt.genSaltSync(10)
//let salt = bcrypt.genSaltSync(10)


/**
 * Авторизация
 */
exports.login = function (request, response) {
    //console.log(salt)
    let user = request.body
    bcrypt.hash(user.password, salt, function (err, result) {
        if (err) {
            console.log(err)
            return response.status(422).json(err)
        }
        user.password = result
        console.log(result)

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
                let jwtUser = {
                    // user: dbUser, // Посылать данные - ну можно имя например
                    token: jwt.sign(
                        {
                            _id: dbUser._id,
                            email: dbUser.email
                        }, // Что я шифрую
                        process.env.JWT_KEY) // Ключ шифра
                }
                return response.status(200).json(jwtUser)
            })
    })


}


/**
 * Регистрация нового пользователя
 */
exports.register = function (request, response) {
    let user = request.body
    console.log(user)
    bcrypt.hash(user.password, salt, function (err, result) {

        if (err) {
            console.log(err)
            return response.status(422).json(err)
        }
        user.password = result
        console.log(result)
        console.log(user)

        const newUser = new userModel(user)

        newUser.save( async function (err) {
            if (err) { // Если ошибка - вернуть ошибку
                console.log(err)
                return response.status(422).json(err)
            }
            return response.status(201).json(newUser)
        })
    })
}
