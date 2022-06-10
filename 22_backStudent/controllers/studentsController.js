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
 */
exports.index = function (request, response) {
    return response.status(200).json(students);
};

/**
 * Вернуть конкретного студента
 * Read (One) === GET
 * @param request
 * @param response
 */
exports.show = function (request, response) {
    // console.log(request.params.studentId)
    let findId = request.params.studentId
    let findStudent = students.find(s => s._id === findId)
    // console.log(findStudent)
    if (!findStudent) {
        // console.log(' Нет студента ')
        return response.status(404)
    }
    return response.status(200).json(findStudent)
};

/**
 * Вернуть конкретного студента
 * Update (One) === PUT
 * @param request
 * @param response
 */
exports.update = function (request, response) {
    let findId = request.params.studentId
    let findStudent = students.findIndex(s => s._id === findId)

    console.log(findStudent)
    if (findStudent === null && typeof (findStudent) === undefined) {
        console.log(' Нет студента ')
        return response.status(404).send()
    }
    students[findStudent] = request.body
    console.log(' Все обновил')
    return response.status(204).send()
}

/**
 * Удалить конкретного студента
 * Delete (One) === DELETE
 * @param request
 * @param response
 */
exports.delete = function (request, response) {
    let findId = request.params.studentId
    let findStudent = students.findIndex(s => s._id === findId)
    console.log(findStudent)
    if (findStudent === null && typeof (findStudent) === undefined) {
        console.log(' Нет студента ')
        return response.status(404).send()
    }

    students.splice(findStudent,1)
    return response.status(200).send()
}
