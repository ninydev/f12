

// Получение текущего пользователя
exports.getMe = function (request, response) {

    return response.status(200).json(request.user)

}