
const productModel = require('./productModel')


exports.getAll = function (request, response) {
        productModel.find({},
            function (err, data) {
                if (err) {
                    console.log(err)
                    return err
                }
                console.log(data)

                return response.status(200).json(data);
            })
}

exports.create = function (request, response) {
    let productBody = request.body
    productBody.likeCount = 0
    let newProduct = new productModel(productBody)

    newProduct.save(function (err) {
        if (err) {
            console.log(err)
            return err
        }
        return response.status(201).json(newProduct)
    })


}