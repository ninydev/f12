

exports.getFile = function (request, response) {
    console.log("Get File")
    let res = {} // Объект для ответа

    // Получаю мой файл
    let file = request.files.file;
    // Копирую файл в нужную мне папку
    console.log(file)
    // Проблема - одинаковые имена файлов от разных пользователей


    let uploadDir = './uploads/'

    // Формирование каждому пользователю своей папки в хранилище
    if (request.user) {
        uploadDir+= request.user._id
    } else {
        uploadDir+= 'guest'
    }

    // добавление папок год / месяц / число
    let date = new Date();
    uploadDir+= '/' + date.getFullYear();
    uploadDir+= '/' + (1 + date.getMonth());
    uploadDir+= '/' + date.getDate();

    // Изменение имени файла (случайное число, текущий момент времени, guid)
    let fullPath = uploadDir + '/' + Date.now() + file.name
    file.mv( fullPath);

    // Формирую ответ об успешной загрузке
    res = {
            status: "success",
            message: "File is uploaded",
        data: {
            oldName: file.name,
            fullPath: fullPath,
            mimetype: file.mimetype,
            size: file.size,
        },
    }


    return response.status(200).json(res)
}