// Подключение модуля реакт
import React from "react";

// Создание компонента (тут будет меняться только название)
class NinyHeader extends React.Component {

    // Обязательная функция, которая отвечает за вывод компонента
    // То - как он будет отображаться
    render() {
        return (
            <header>
            <h1>Добро пожаловать на мой сайт</h1>
            </header>
        )
    }
}

// Экспорт модуля
export default NinyHeader;