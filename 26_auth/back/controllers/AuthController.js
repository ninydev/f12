jwt = require('jsonwebtoken')
const  generateUUID = require('./../lib/guid')
const nodemailer = require("nodemailer")

const userModel = require('./../models/User')
const verifyModel = require('./../models/EmailConfirmation')

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
    user.created_at = Date.now() // Когда пользователь зарегистрировался
    user.verify_at = null // Когда он подтвердил свою почту
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
            // Отправить письмо пользователю
            // с сформированной ссылкой
            return response.status(201).json(newUser)
        })
    })
}


async function sendVerityEmail (user){
    //verifyModel

    verifyModel.findOne({email: user.email},
        async function (err, dbVerify) {
            // Если ошибка - вернуть ошибку
            if (err) {
                console.log(err)
                return err
            }
            // Если в базе не найдено вернуть 403
            if(dbVerify === null) {
                dbVerify = new verifyModel()
                dbVerify.email = user.email
                dbVerify.key = generateUUID()
                dbVerify.save()
            }

            console.log(dbVerify)

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

            let link = "http://localhost:3000/auth/verifyEmail/" + dbVerify.key

            let toUser = await transporter.sendMail({
                from: process.env.MAIL_FROM_ADDRESS, // sender address
                to: user.email, // list of receivers
                subject: "Спасибо за обращение", // Subject line
                text: link, // plain text body
                html: "< a href='"+ link + "' target='_blank'> Verify </a>", // html body
            });

            dbVerify.sendToUser = toUser.messageId

            dbVerify.save(function (err) {
                if (err) { // Если ошибка - вернуть ошибку
                    console.log(err)
                    return err
                }
                return "Ok"
            })

        })

}
