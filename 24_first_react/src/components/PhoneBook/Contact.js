import React from "react"

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contact: props.contact, // сохранить пользователя
            isEdit: false // флаг, который будет переводить систему в режим редактирования
        }
        this.onChange = this.onChange.bind(this)
    }

    validate(){

    }

    onChange(e) {
        const oldState = this.state
        oldState[e.target.name] = e.target.value
        this.setState(oldState)
        this.validate()
    }

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

    stopEdit(){
        const oldState = this.state
        oldState.isEdit = false
        this.setState(oldState)
    }

    save(){
        this.props.update(this.props.contact.id, {
            name: this.state.name,
            subName: this.state.subName,
            number: this.state.number
        })
        this.stopEdit()
    }

    startEdit(){
        const oldState = this.state
        oldState.isEdit = true
        oldState.name = this.props.contact.name
        oldState.subName = this.props.contact.subName
        oldState.number = this.props.contact.number
        this.setState(oldState)
    }

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



    render() {
        if(this.state.isEdit) return this.renderForm()
        else return this.renderInfo()
    }
}

export default Contact