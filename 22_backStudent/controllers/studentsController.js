// Получить библиотечную функцию для генерации ID
const lib = require ("../lib/guid")
const generateUUID = lib.generateUUID


// Список доступных студентов (массив объектов)
let students = [
    {_id: generateUUID(), name: 'Sasha', age:40},
    {_id: generateUUID(), name: 'Vasya', age:50},
];

/**
 * Создать нового студента
 * Create === POST
 * @param request
 * @param response
 */
exports.create = function (request, response) {
    // console.log(request.body)
    // Получили нового студента на сервере
    let newStudent = request.body
    newStudent._id = generateUUID()
    students.push(newStudent)
    return response.status(201).json(newStudent);
}

/**
 * Вернуть всех студентов
 * Read (All) === GET
 * @param request
 * @param response
 * @returns {*}
 */
exports.index = function (request, response) {
    return response.status(200).json(students);
};

