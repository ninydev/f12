/**
 * Получает продукт
 * Читает из localStorage user._id
 * Ищет _id  в массиве - кто лайкал
 * Выводит счетчик, сердечко (кто лайкнул и тд)
 * При нажатии отправляет запрос на сервер - что бы добавить или убрать пользователя для всех
 * В случае успеха - изменяет состояние количества лайков и моего лайка
 *
 * Информация хранится в модели ПРОДУКТА
 */

export default function ProductLike(product) {

    let user = localStorage.getItem('user')
    let like = 'NoLike'
    if (user) {
        if (product.likeUsers.includes(user._id)) {
            like = 'Like'
        }
    }

    const doLike = function () {
        fetch('http://localhost:3333/api' + '/like'  ,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Back  узнает пользователя по его ключу
                    'authorization': localStorage.getItem('jwtToken')
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    // А вот в какой продукт нужно добавить лайк - мы должны передать или в теле запроса
                    // или второй вариант - в url
                    productId: product._id
                })
            })
            .then(res => {
                // console.log(res)
                if(res.status !==200) {
                    toast.error("Ошибка")
                    return null
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err=> {
                console.log(err)
                toast.error(err)
            })
    }

    return (
        <span>
            {product.likeCount}
            {like}
        </span>
    )
}