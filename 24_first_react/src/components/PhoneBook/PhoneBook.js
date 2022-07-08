import React from "react"
import Contact from "./Contact";
import AddContact from "./AddContact";

class PhoneBook extends React.Component {

    /**
     * Настройка моего компонента
     * Практически обязательный участок кода, в котором мы описываем, что в компоненте будет.
     * Особое внимание к this.state
     * @param props - то, что приходит снаружи - даже если мы ничего не ждем - мы фиксируем передачу
     */
    constructor(props) {
        super(props);

        this.state = {
            contacts: [] // Коллекция телефонной книги
        }
    }

    /**
     * Сохраняет коллекцию в локальное хранилище
     */
    saveToLS(){
        localStorage.setItem("phoneBook", JSON.stringify(this.state.contacts))
    }


    /**
     * Читает коллекцию из хранилища
     */
    loadFromLS(){
        const oldState = this.state // Получаю состояние хранилища компонента
        if(localStorage.getItem("phoneBook")) // Если в локальном хранилище есть данные
            oldState.contacts = JSON.parse(localStorage.getItem("phoneBook")); // получаю их
        else
            oldState.contacts = [] // Если данных нет - оставляю пустым
        this.setState(oldState) // Обновляю хранилище компонента
    }

    /**
     * (С) - Create
     * Метод, который отвечает за помещение нового контакта в телефонную книгу
     * @param newContact - новый контакт
     */
    create(newContact) {
        newContact.id = Date.now() + Math.random()
        const oldState = this.state
        oldState.contacts.push(newContact)
        this.setState(oldState)
    }


    /**
     * Удаление элемента по его Id
     * @param contactId
     */
    deleteById(contactId){
        const oldState = this.state
        oldState.contacts.splice( oldState.contacts.findIndex(c=> c.id === contactId), 1)
        this.setState(oldState)
    }

    deleteByEl(el){
        this.deleteById(el.target.getAttribute('data-id'))
    }



    /**
     * Заргузка в коллекцию демо данные.
     * Такой метод позволяет другим разработчикам понять, какие поля вы используете
     */
    loadSimpleData(){
        // Создадим контакт с полями, по описанию задачи
        let contact = {
            id: Date.now() + Math.random(), // Случайный номер
            name: "Имя", // поля для хранения имени контакта
            subName: "Фамилия", // фамилия
            number: "Номер телефона" // номер его телефона
        }

        const oldState = this.state // Взять старый стейт (мы не знаем что там храниться - но хотим оставить)
        oldState.contacts = [contact] // Поместим в контакты массив (коллекцию) с 1 контактом
        this.setState(oldState) // Поместим стейт обратно
    }





    /**
     * (R) Read - он как бы читает и выводит данные
     * Участок кода, который отвечает за построение компонента на странице
     * Обязательный для того, что бы компонент вообще назывался компонентом
     * @returns {JSX.Element}
     */
    render() {
        return (
            <>
                <div>
                    <button onClick={this.loadFromLS.bind(this)}> Load </button>
                    <button onClick={this.saveToLS.bind(this)}> Save </button>
                    <button onClick={this.loadSimpleData.bind(this)}> Simple </button>
                    <AddContact save={this.create.bind(this)}></AddContact>
                </div>
                <table>
                    <tbody>
                {
                    this.state.contacts.map(contact => (
                        <>
                        <Contact  key={contact.id} contact={contact}></Contact>
                            <button data-id={contact.id} onClick={this.deleteByEl.bind(this)}>del</button>
                        </>

                    ))
                }
                    </tbody>
                </table>
            </>
        )
    }


}
export default PhoneBook
