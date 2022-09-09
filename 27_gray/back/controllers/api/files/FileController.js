

exports.getFile = function (request, response) {
    console.log("Get File")
    let res = {} // Объект для ответа

    return response.status(200).json(res)
}