import React from "react";

class AddContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            subName: '',
            number: '',
            isValid: false, // все ли поля верные
            err: [] // есть ли ошибки
        }
        this.onChange = this.onChange.bind(this) // Разрешить методу доступ к классу
    }

    /**
     * Метод, который будет анализировать введенные поля и описывать ошибки
     */
    validate(){
        let err = []
        if(this.state.name.length === 0) err.push("Имя короткое")
        if(this.state.subName.length === 0) err.push("Введите фамилию")
        if(this.state.number.length === 0) err.push("Введите номер телефона")
        // ...
        const oldState = this.state
        oldState.err = err
        if (err.length === 0)
            oldState.isValid = true
        else
            oldState.isValid = false
        this.setState(oldState)
    }

    /**
     * Динапический перенос данных в стейт
     * @param e
     */
    onChange(e) {
        const oldState = this.state
        oldState[e.target.name] = e.target.value
        this.setState(oldState)
        this.validate()
    }

    /**
     * Метод, который передаст информацию в главный компонент
     */
    onSave(){
        this.props.save(this.state);
    }


    render() {
        return(
            <>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addContact">
                    Add
                </button>

                <div className="modal fade" id="addContact" tabIndex="-1" aria-labelledby="addContactModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addContactModalLabel">Add Contact</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label> Name: <input type="text" name="name" onChange={this.onChange}/></label>
                                <label> SubName: <input type="text" name="subName" onChange={this.onChange}/></label>
                                <label> Number: <input type="text" name="number" onChange={this.onChange}/></label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button disabled={!this.state.isValid} onClick={this.onSave.bind(this)} type="button" data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


}

export default AddContact