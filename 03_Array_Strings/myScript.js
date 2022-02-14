console.log('Start Script')

// Точка выдачи моих результатов
let divResult = document.getElementById("result")

document.getElementById("btnStart").onclick = function () {
    // Что ввел пользователь
    let userNumber = document.getElementById("userNumber").value
    console.log("Пользователь ввел: " + userNumber)
    // допустим пользователь ввел 1234 => 4321


    //*-----------------------------------------------------------------------
    // математическая версия решения задачи

    // определю временную переменную, с которой я буду работать
    let tmpNumber = userNumber
    let strResult = ' '

    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/while
    // организуем цикл, до тех пор, пока число делится на 10
    while (tmpNumber >= 10) {
        strResult += tmpNumber % 10 + ' '
        tmpNumber = Math.floor(tmpNumber / 10)
    }
    strResult += tmpNumber
    console.log(strResult)
    divResult.innerText = strResult

    console.log("----------------------------------------------------------")

    //*-----------------------------------------------------------------------
    // строковая версия решения задачи
    let tmpString = userNumber.toString()
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for
    console.log("+ ")
    for (let i = 0; i < tmpString.length; i = i + 1) {
        console.log(tmpString[i])
    }
    console.log("- ")
    for (let i = tmpString.length - 1; i >= 0; i = i - 1) {
        console.log(tmpString[i])
    }


    // Проверка возраста пользователя
    // result.innerText = "Пользователь щелкнул на кнопку"
    // let userNumber = document.getElementById("userNumber").value
    // console.log("Пользователь ввел: " + userNumber)
    // if (userNumber < 18) {
    //     result.style.backgroundColor = 'red'
    //     result.innerText = " Сайт для тех, кому больше 18"
    //     document.getElementById("userNumber").style.border = "1px solid red"
    // } else if (userNumber > 65) {
    //     result.innerText = " вы слишком стары для интернета"
    //     result.style.backgroundColor = 'gray'
    //     document.getElementById("userNumber").style.border = "1px solid grey"
    // } else {
    //     result.innerText = " Добро пожаловать "
    //     result.style.backgroundColor = 'white'
    //     document.getElementById("userNumber").style.border = "1px solid white"
    // }
}


// alert('Сообщение') // плохой стиль
// let userName = prompt('Enter U Name', 'Vasya')
// console.log('user enter: ' + userName)

console.log('End Script')