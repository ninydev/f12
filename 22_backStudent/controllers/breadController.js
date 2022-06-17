/**
 * Получить хлеб
 * @param request
 * @param response
 */

// Данные которые я хочу передавать
let bread = {
    name: 'Горажанин',
    price: 12.5,
    ingredients : [
        { name: 'Мука', value: '1 кг'},
        { name: 'Сахар', value: ' по вкусу '},
        { name: 'Соль'},
    ]
}

// bread.name => 'Горажанин'
// bread.ingredients[0].name => 'Мука'

exports.index = function (request, response) {
    return response.status(200).json(bread)
}