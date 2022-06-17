/**
 * Получить данные о квартире
 * @param request
 * @param response
 */

// Данные, которые я хочу передавать
let flat = {
    table: {
        name : 'Стол в гостинной'
    }
}

exports.index = function (request, response) {
    return response.status(200).json(flat)
}