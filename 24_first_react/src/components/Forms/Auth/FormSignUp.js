// Подключение модуля реакт
import React from "react";
import NinyInputEmail from "../../UI/Forms/Inputs/NinyInputEmail";
import NinyInputPassword from "../../UI/Forms/Inputs/NinyInputPassword";
import NinyInputSubmit from "../../UI/Forms/Inputs/NinyInputSubmit";

// Создание компонента (тут будет меняться только название)
class FormSignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            err: [],
            p: '',
            cp: ''
        }
    }

    onPasswordChange(ev){
        let oldState = this.state;
        oldState.p = ev.target.value;
        this.setState(oldState);
        this.validate()
    }

    onPasswordConfirmChange(ev){
        let oldState = this.state;
        oldState.cp = ev.target.value;
        this.setState(oldState);
        this.validate()
    }

    validate(){
        let err = []
        if (this.state.p !== this.state.cp) {
            err.push('Пароли на совпадают')
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



    render() {

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


        return(
            <>
                <NinyInputEmail></NinyInputEmail>
                <NinyInputPassword label="пароль" onChange={this.onPasswordChange.bind(this)}></NinyInputPassword>
                <NinyInputPassword onChange={this.onPasswordConfirmChange.bind(this)}></NinyInputPassword>
                {err}
                <NinyInputSubmit></NinyInputSubmit>
            </>
        )
    }
}

export default FormSignUp;
/*

                <div>
                    <label>Email:</label>
                </div>
                <div>
                    <label>Password:</label>
                </div>
                <div>
                    <label>Password Conform:</label>
                </div>
                <div>

                </div>

 */