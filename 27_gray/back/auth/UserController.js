const modelUser = require('./models/User')

// Получение текущего пользователя
exports.getMe = function (request, response) {

    // Если пользователь не авторизован - нет ключа
    if(!request.user) {
        return response.status(403).json({message: "Вы не вошли в систему"})
    }

    modelUser.findById(request.user._id, function(err, user){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            user['password'] = null
            // delete user.password

            return response.status(200).json(user);
        }
    });
}

/**
 * Сохранить мой профиль
 */
exports.setMe = function () {

}