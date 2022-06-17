const tagModel = require('./../models/tags')

/**
 * Создать новой метки
 * Create === POST
 * @param request
 * @param response
 */
exports.create = function (request, response) {
    // console.log(request.body)
    // Получили новую метку на сервере
    let bodyTag = request.body
    // Создали запись в базе даннх
    const newTag = new tagModel(bodyTag)

    // Сохранили запись в базе данных
    newTag.save(function (err) {
        if (err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        } else { // Если все хорошо - вренуть нового студента
            return response.status(201).json(newTag)
        }
    });
}

/**
 * Вернуть всех студентов
 * Read (All) === GET
 * @param request
 * @param response
 */
exports.index = function (request, response) {
    tagModel.find({}, function(err, allTags){

        if(err) {
            console.log(err);
            return response.status(404).json(err)
        }
        else {
            return response.status(200).json(allTags)
        }
    });
}

/**
 * Вернуть конкретную метку
 * Read (One) === GET
 * @param request
 * @param response
 */
exports.show = function (request, response) {
    // console.log(request.params.studentId)
    let tagId = request.params.tagId

    tagModel.findById(tagId, function(err, tag){

        if(err) {
            console.log(err);
            return response.status(404).json(err)
        }
        else {
            return response.status(200).json(tag)
        }
    });
}

/**
 * Обновить конкретную метку
 * Update (One) === PUT
 * @param request
 * @param response
 */
exports.update = function (request, response) {
    let tagId = request.params.tagId
    let upTag = request.body

    Student.findByIdAndUpdate(tagId, upTag, function (err, newStudent) {
        if(err) {
            console.log(err);
            return response.status(500).json(err);
        }
        else {
            console.log('Update Ok')
            return response.sendStatus(204);
        }
    })

}


/**
 * Удалить конкретную метку
 * Delete (One) === DELETE
 * @param request
 * @param response
 */
exports.delete = function (request, response) {
    let tagId = request.params.tagId
    console.log('Delete:' + tagId)

    Student.findByIdAndDelete(tagId, function(err){

        if(err) {
            console.log(err);
            return response.status(500).json(err);
        }
        else {
            console.log('Del Ok')
            return response.sendStatus(200);
        }
    });
}