

// Получение текущего пользователя
exports.getMe = function (request, response) {

    // request.user
    // будет содержать только те данные, которые мы зашифровали при передаче ключа
    // значит - нам нужно обратиться в базу - и вернуть ВСЕ данные (кроме пароля) для их редактирования


    return response.status(200).json(request.user)
}

/**
 * Сохранить мой профиль
 */
exports.setMe = function () {

}