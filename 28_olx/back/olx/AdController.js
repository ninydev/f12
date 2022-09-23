const adModel = require('./AdModel')

/**
 * Создание нового объявления
 * Могут только зарегистрированные пользователи
 * @param request
 * @param response
 * @returns {*}
 */
exports.create = function (request, response){
    // Если пользователь не авторизован - нет ключа
    if(!request.user) {
        return response.status(401).json({message: "Вы не вошли в систему"})
    }

    let bodyAd = request.body
    bodyAd.author_id = request.user._id // Фиксируем пользователя (автора объявления)
    bodyAd.created_at = Date.now()

    // TODO: потом тут получать картинки

    let newAd = new adModel (bodyAd)

    console.log(newAd)

    // Сохранили запись в базе данных
    newAd.save(function(err){
        if(err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        }
        else { // Если все хорошо - вернуть новое объявление
            return response.status(201).json(newAd);
        }
    });

}


/**
 * Вернуть всe объявления
 * Read (All) === GET
 * @param request
 * @param response
 */
exports.index = function (request, response) {
    console.log("Пришел за всеми объявлениями")
    adModel.find({}, function(err, allAds){

        if(err) {
            console.log("Ошибка в запросе все объявления")
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(allAds);
        }
    });
}


/**
 * Вернуть конкретное объявление
 * Read (One) === GET
 * @param request
 * @param response
 */
exports.show = function (request, response) {
    // console.log(request.params.studentId)
    let findId = request.params.ad_id

    adModel.findById(findId, function(err, ad){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(ad);
        }
    });
}

// ....

exports.update = function (request, response) {
    if(!request.user) {
        return response.status(401).json({message: "Вы не вошли в систему"})
    }

    adModel.findById(findId, function(err, ad){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            // Если автор не совпадает - ошибка доступа
            // console.log(ad.author_id.toString() + " " + request.user._id)
            // console.log(typeof (ad.author_id) + " " + typeof (request.user._id))
            if (ad.author_id.toString() !== request.user._id ) {
                return response.status(403).json({message: "У вас нет прав удалить объявление"})
            }

            // ДЗ - Написать обновление записи

            return response.status(204).send("Success!");

        }
    });
}


exports.delete = function (request, response) {
    console.log("start del")
    // Если пользователь не авторизован - нет ключа
    if(!request.user) {
        return response.status(401).json({message: "Вы не вошли в систему"})
    }

    let findId = request.params.ad_id

    // Ищу запись в базе данных
    adModel.findById(findId, function(err, ad){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            // Если автор не совпадает - ошибка доступа
            // console.log(ad.author_id.toString() + " " + request.user._id)
            // console.log(typeof (ad.author_id) + " " + typeof (request.user._id))
            if (ad.author_id.toString() !== request.user._id ) {
                return response.status(403).json({message: "У вас нет прав удалить объявление"})
            }

            adModel.findByIdAndDelete(findId , function (err) {
                if(err) {
                    console.log(err);
                    return response.status(422).json(err);
                }

                return response.status(204).send("Success!");
            })

        }
    });

    // Найти то что нужно удалить
    // Сравнить автора и того, кто пришел - и удалять только тогда - когда автор совпадает


}