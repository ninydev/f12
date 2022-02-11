/**
 * Пример почему мне нужны переменные
 * @package Урок 2
 * @author Oleksander Nykytin <nikitin_a@itstep.academy>
 */


/**
 * Левая колонка сайта
 * @type {HTMLElement}
 */
let leftSidebar = document.getElementById('leftSidebar')

/**
 * Собака соседа
 * @type {{img: string, name: string, age: number}}
 */
let dog1 = {
    age: 12,
    name: 'Кора',
    img: 'https://petsi.net/images/dogbreed/big/kolli.jpg'
}

/**
 * Моя собака
 * @type {{img: string, name: string, age: number}}
 */
let dog2 = {
    age: 8,
    name: 'Арчи',
    img: 'https://www.purinaone.ru/dog/sites/default/files/2021-10/%D0%A8%D0%BF%D0%B8%D1%86%20OG_0.jpg'
}

/**
 * Массив (коллекция) собак на нашей улице
 * @type {{img: string, name: string, age: number}[]}
 */
let dogs = [dog1, dog2]

/**
 * Элемент, внутрик оторого я буду строить разметку
 * @type {HTMLElement}
 */
let main = document.getElementById("main")

let ul = document.createElement("ul")

/**
 * Перебор всех собак - и действия над каждой
 */
dogs.map(dog => {
    let li = document.createElement("li")
    let img = document.createElement("img")
    img.className = 'imgPhoto'
    img.src = dog.img
    li.appendChild(img)
    let span = document.createElement("span")
    span.innerText = dog.name
    li.appendChild(span)

    ul.appendChild(li)
})

main.appendChild(ul)




