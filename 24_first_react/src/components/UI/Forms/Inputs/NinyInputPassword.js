// Подключение модуля реакт
import React from "react";

// Создание компонента (тут будет меняться только название)
class NinyInputPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            err: []
        }
    }

    onChange(ev){
        this.checkValid(ev) // Моя внутренняя проверка
        if(this.props.onChange) {    // Если родитель назначил еще свою обработку onChange
            this.props.onChange(ev)  // то передать управление и ему
        }
    }

    checkValid(ev){
        let pass = ev.target.value
        console.log(pass)
        let err = []

        // Регулярное выражение на наличие цифры
        let isNum = /\d{1,}/
        // Большие
        let isUpper = /.*[A-Z].*/
        // Маленькие
        let isLower = /.*[a-z].*/

        if(pass.length < 8) {
            err.push(' Пароль должен быть длинее 8 символов')
        }
        if(!isNum.test(pass)){
            err.push('Пароль должен содержать цифры')
        }
        if(!isUpper.test(pass)){
            err.push('Пароль должен содержать большие буквы')
        }
        if(!isLower.test(pass)){
            err.push('Пароль должен содержать маленькие буквы')
        }

        let oldState = this.state;
        if(err.length > 0) {
            oldState.isValid = false
        } else {
            oldState.isValid = true
        }
        oldState.err = err
        this.setState(oldState)
        console.log(err)
    }



    render(){

        let err = ''
        if(!this.state.isValid) {
            err = (
                <ul>
                    { this.state.err.map( e => {
                        return (
                        <li> {e} </li>
                        )
                    })}
                </ul>
            )
        }

        let label = ''

        if (this.props.label){
            label = (<label>{this.props.label}</label>)
        }


        return (
            <div>
                {label}
                <input type="password" onChange={this.onChange.bind(this)}/>
                {err}
            </div>
        )
    }
}
export default NinyInputPassword;
