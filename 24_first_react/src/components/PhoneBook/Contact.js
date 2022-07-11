import React from "react"

class Contact extends React.Component {

    /**
     * Конструктор для того, что бы описать флаг редактирования
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            contact: props.contact, // сохранить пользователя
            isEdit: false // флаг, который будет переводить систему в режим редактирования
        }
        this.onChange = this.onChange.bind(this)
    }

    /**
     * Тут можно сдлеать проверку формы - как в примере
     */
    validate(){
    }

    /**
     * Читает данные с полей input и сохраняет их в стейте
     * @param e
     */
    onChange(e) {
        const oldState = this.state
        oldState[e.target.name] = e.target.value
        this.setState(oldState)
        this.validate()
    }

    /**
     * Выводит данные в формочке - удобной для редактирования
     * @returns {JSX.Element}
     */
    renderForm(){
        return (
        <>
        <tr>
           <td><label> Name:  <input type="text" name="name" value={this.state.name} onChange={this.onChange} /> </label></td>
            <td><label>SubName:  <input type="text" name="subName" value={this.state.subName} onChange={this.onChange} /> </label></td>
            <td><label>Number: <input type="text" name="number" value={this.state.number} onChange={this.onChange} /> </label></td>
            <td>
                <button onClick={this.stopEdit.bind(this)}>Cancel</button>
                <button onClick={this.save.bind(this)}>Save</button>
            </td>
        </tr>
        </>
        )
    }

    /**
     * Убирает флаг редактирования - что приводит к выводу только данных
     */
    stopEdit(){
        const oldState = this.state
        oldState.isEdit = false
        this.setState(oldState)
    }

    /**
     * Готовит новй объект и передает его на обновление в главный компонент
     */
    save(){
        this.props.update(this.props.contact.id, {
            name: this.state.name,
            subName: this.state.subName,
            number: this.state.number
        })
        this.stopEdit()
    }

    /**
     * Устанавливает флаг - отображать в режиме редактирования
     * А так же переносит значения полей из пропсов в стейт
     */
    startEdit(){
        const oldState = this.state
        oldState.isEdit = true
        oldState.name = this.props.contact.name
        oldState.subName = this.props.contact.subName
        oldState.number = this.props.contact.number
        this.setState(oldState)
    }

    /**
     * Вывод информации о записи в телефонной книге
     * @returns {JSX.Element}
     */
    renderInfo(){
        return (
            <tr>
                <td>
                    {this.props.contact.name}
                </td>
                <td>
                    {this.props.contact.subName}
                </td>
                <td>
                    {this.props.contact.number}
                </td>
                <td>
                    <button onClick={this.startEdit.bind(this)}>Edit</button>
                    <button data-id={this.props.contact.id} onClick={this.props.delete.bind(this)}>del</button>
                </td>
            </tr>
        )
    }


    /**
     * Выводит или форму для воода данных, или информацию о контакте
     * @returns {JSX.Element}
     */
    render() {
        if(this.state.isEdit) return this.renderForm()
        else return this.renderInfo()
    }
}

export default Contact