/**
 * Получить данные о квартире
 * @param request
 * @param response
 */

// Формирование кухни
let kitchen = {
    table: {
        name : 'Стол в кухне'
    },
    gaz: {
        burner: [
            {name: 'Малая'},
            {name: 'Средняя'},
            {name: 'Большая'},
        ]
    }
}


// Данные, которые я хочу передавать
let flat = [
    kitchen,
]



exports.index = function (request, response) {
    return response.status(200).json(flat)
}