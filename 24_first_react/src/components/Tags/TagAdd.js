import React from "react";

class TagAdd extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            newTagName: '', //  Место для реактивного хранения данных
            help: ''
        }
        this.onChange= this.onChange.bind(this) // Разрешить методу доступ к классу
    }

    /**
     * Метод, который при любом изменении будет переносить данные из поля ввода в state
     */
    onChange(e){
        console.log('OnChange: ' + e.target.name)

        // Сохранить данные с импута в стейт
        const oldState = this.state;
        oldState[e.target.name] = e.target.value;

        // проанализировать данные, и изменить подсказку
        if(oldState[e.target.name].length <3) {
            oldState.help = 'Метка должна быть больше 3 символов'
        } else {
            oldState.help = ''
        }

        // Вернуть состояние стейта
        this.setState(oldState);
    }

    /**
     * Вызовем метод внешнего компонента - передав туда новую метку
     */
    addNewTag(){
        this.props.addNewTag(this.state.newTagName)
    }



    render() { // Обязательный метод, который  отвечает за вывод компонента на страницу
        return (
            <>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addTag">
                    Add
                </button>

                <div className="modal fade" id="addTag" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label> NewTag: <span>{this.state.help}</span> <input type="text" name="newTagName" onInput={this.onChange}/></label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={this.addNewTag.bind(this)} type="button"  data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default TagAdd;