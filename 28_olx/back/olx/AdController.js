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
        return response.status(403).json({message: "Вы не вошли в систему"})
    }

    let bodyAd = request.body
    bodyAd.author_id = request.user._id // Фиксируем пользователя (автора объявления)

    // TODO: потом тут получать картинки

    let newAd = new adModel (bodyAd)

    // Сохранили запись в базе данных
    newAd.save(function(err){
        if(err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        }
        else { // Если все хорошо - вренуть нового студента
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
    adModel.find({}, function(err, allAds){

        if(err) {
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
    let findId = request.params.adId

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

