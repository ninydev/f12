// Подключение модуля реакт
import React from "react";
import NinyInputEmail from "../../UI/Forms/Inputs/NinyInputEmail";
import NinyInputPassword from "../../UI/Forms/Inputs/NinyInputPassword";
import NinyInputSubmit from "../../UI/Forms/Inputs/NinyInputSubmit";

// Создание компонента (тут будет меняться только название)
class FormSignUp extends React.Component {
    render() {
        return(
            <>
                <NinyInputEmail></NinyInputEmail>
                <NinyInputPassword></NinyInputPassword>
                <NinyInputPassword></NinyInputPassword>
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