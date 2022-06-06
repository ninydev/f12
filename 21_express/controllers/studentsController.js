// Список доступных продуктов (массив объектов)
let students = [
    {id: 1, name: 'Sasha', age:40},
    {id: 2, name: 'Vasya', age:50},
];

// вернуть всех студентов
exports.index = function (request, response) {
    return response.status(200).json(students);
};