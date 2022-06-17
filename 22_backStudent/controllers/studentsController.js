// Получить модуль работы с базой данных
const Student = require('./../models/students')

/**
 * Создать нового студента
 * Create === POST
 * @param request
 * @param response
 */
exports.create = function (request, response) {
    // console.log(request.body)
    // Получили нового студента на сервере
    let bodyStudent = request.body
    // Создали запись в базе даннх
    const newStudent = new Student(bodyStudent)

    // Сохранили запись в базе данных
    newStudent.save(function(err){
        if(err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        }
        else { // Если все хорошо - вренуть нового студента
            return response.status(201).json(newStudent);
        }
    });

    // Теперь за хранение отвечает база данных
    // newStudent._id = generateUUID()
    // students.push(newStudent)
    // return response.status(201).json(newStudent);
}

/**
 * Вернуть всех студентов
 * Read (All) === GET
 * @param request
 * @param response
 */
exports.index = function (request, response) {
    Student.find({}, function(err, allStudents){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(allStudents);
        }
    });
}

/**
 * Вернуть конкретного студента
 * Read (One) === GET
 * @param request
 * @param response
 */
exports.show = function (request, response) {
    // console.log(request.params.studentId)
    let findId = request.params.studentId

    Student.findById(findId, function(err, allStudents){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(allStudents);
        }
    });
}

/**
 * Обновить конкретного студента
 * Update (One) === PUT
 * @param request
 * @param response
 */
exports.update = function (request, response) {
    let findId = request.params.studentId
    let upStudent = request.body

    Student.findByIdAndUpdate(findId, upStudent, function (err, newStudent) {
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
 * Удалить конкретного студента
 * Delete (One) === DELETE
 * @param request
 * @param response
 */
exports.delete = function (request, response) {
    let findId = request.params.studentId
    console.log('Delete:' + findId)

    Student.findByIdAndDelete(findId, function(err){

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
