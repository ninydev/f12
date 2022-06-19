const productModel = require('./../models/products')

/**
 * Создать новой метки
 * Create === POST
 * @param request
 * @param response
 */
exports.create = function (request, response) {
    // console.log(request.body)
    // Получили новую метку на сервере
    let bodyProduct = request.body
    // Создали запись в базе даннх
    const newProduct = new productModel(bodyProduct)


    // Сохранили запись в базе данных
    newProduct.save(function (err) {
        if (err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        } else { // Если все хорошо - вренуть нового студента
            return response.status(201).json(newProduct)
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
    productModel.find({}, function(err, allProducts){

        if(err) {
            console.log(err);
            return response.status(404).json(err)
        }
        else {
            return response.status(200).json(allProducts)
        }
    });
}

/**
 * Вернуть всех студентов
 * Read (All) === GET
 * @param request
 * @param response
 */
exports.find = function (request, response) {
    //params = request.body
    let txtFind = request.body.txtFind
    console.log('Try find: ' + txtFind)

    // Query for a movie that has the title 'The Room'
    const query = {'name': {'$regex': txtFind, '$options': 'i'}}
    const options = {};

    productModel.find(query, options, function(err, allProducts){

        if(err) {
            console.log(err);
            return response.status(404).json(err)
        }
        else {
            return response.status(200).json(allProducts)
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
    let productId = request.params.productId

    productModel.findById(productId, function(err, product){

        if(err) {
            console.log(err);
            return response.status(404).json(err)
        }
        else {
            return response.status(200).json(product)
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
    let productId = request.params.productId
    let upProduct = request.body

    productModel.findByIdAndUpdate(productId, upProduct, function (err, newProduct) {
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
    let productId = request.params.productId
    console.log('Delete:' + productId)

    productModel.findByIdAndDelete(productId, function(err){

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