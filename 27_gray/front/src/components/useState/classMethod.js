
import React from "react";

export default class ClassMethod extends React.Component {

    /**
     * Конструктор
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            counter: localStorage.getItem('counter') || 0
            // Мы тут описываем - какие данные у нас возможны
        }
        this.onChange = this.onChange.bind(this) // Разрешить методу доступ к классу
    }

    /**
     * Метод, который меняет состояние стейта
     */
    plus(){
        const oldState = this.state
        oldState.counter++
        localStorage.setItem('counter', oldState.counter)
        this.setState(oldState)
    }
    minus(){
        const oldState = this.state
        oldState.counter--
        localStorage.setItem('counter', oldState.counter)
        this.setState(oldState)
    }


    /**
     * Динамический перенос данных в стейт
     * @param e
     */
    onChange(e) {
        const oldState = this.state
        oldState[e.target.name] = e.target.value
        this.setState(oldState)
    }

    /**
     * Вывод на экран - как выглядит компонент
     * @returns {JSX.Element}
     */
    render() {
        return (
            <>
                {this.state.counter}
                <button onClick={this.plus.bind(this)} type="button">+</button>
                <button onClick={this.minus.bind(this)} type="button">-</button>
            </>
        )
    }

}
