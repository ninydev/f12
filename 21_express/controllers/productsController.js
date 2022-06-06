
// Список доступных продуктов (массив объектов)
let products = [
    {id: 1, name: 'телевизор', price:40},
    {id: 2, name: 'холодильник', price:50},
];

// прочитать все продукты
exports.index = function (request, response) {
    return response.status(200).json(products);
};



// CRUD - Create, Read, Update, Delete