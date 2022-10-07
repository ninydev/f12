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
exports.index = async function (request, response) {
    console.log("Пришел за всеми объявлениями")

    // Данные для постраничного вывода объявлений

    // Количество объявлений на страницу
    let per_page = 2;
    if (request.query.per_page !== undefined) per_page = request.query.per_page

    // Текущая страница
    let page = 1;
    if (request.query.page !== undefined) page = request.query.page

    console.log("Элементов на страницу: " + per_page)
    console.log("Текущая страница: " + page)

    let total = await adModel.count();
    let allAds = await adModel.find({}).sort('created_at').skip((per_page*(page - 1))).limit(per_page);
    let send = {
        total: total, // Сколько всего в коллекции
        page: page, // Какая сейчас страница открыта
        per_page: per_page, // Сколько элементов на страницу
        data: allAds // Сами элементы данной страницы
    }

    console.log(send)
    return response.status(200).json(send);

    // adModel.find({ skip: 0, limit: 2 }, function(err, allAds){
    //
    //     if(err) {
    //         console.log("Ошибка в запросе все объявления")
    //         console.log(err);
    //         return response.status(404).json(err);
    //     }
    //     else {
    //         // // ???? А видят ли все кто лайкнул ???
    //         // for (i = 0; i < allAds.length; i++) {
    //         //     if (allAds[i]['likeTotal'])
    //         //         allAds[i]['likeTotal'] =allAds[i]['likes'].length
    //         //     else
    //         //         allAds[i]['likeTotal'] = 0
    //         //     if (request.user) { // Если пользователь зарегистрирован
    //         //         if ( allAds[i]['likes'].find(request.user._id))
    //         //             allAds[i]['youLike'] = true
    //         //         else
    //         //             allAds[i]['youLike'] = false
    //         //     }
    //         // }
    //
    //
    //         return response.status(200).json(allAds);
    //     }
    // });
}

/**
 * ПОставить лайк
 * @param request
 * @param response
 * @returns {*}
 */
exports.like = function (request, response) {
    if(!request.user) {
        return response.status(401).json({message: "Вы не вошли в систему"})
    }

    let findId = request.params.ad_id
    let user_id = request.user._id

    adModel.findById(findId, function(err, ad){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            // Принимаю решение - а может ли лайкнуть этот пользователь ???

            if (ad.likes.find(user_id)) {
                // Этот пользователь лайкал это объявление
                return response.status(202).json({"message": "U liked ad"});
            }
            else {
                ad.likes.add(user_id)
                adModel.updateOne(ad)
                return response.status(201).json(ad)
            }

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