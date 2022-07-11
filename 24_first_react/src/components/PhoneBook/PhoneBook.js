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
            search: '', // Для поиска
            oldContacts: null, // Для сохранения старой коллекции
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
        let newEl = {
            id: Date.now(), // + "_" + Math.random(),
            name: newContact.name,
            subName: newContact.subName,
            number: newContact.number
        }
        const oldState = this.state
        oldState.contacts.push(newEl)
        this.setState(oldState)
    }

    /**
     * (U) Update
     * Ищет в коллекции элемент с нужным нам id и обновляет информацию в нем
     * @param id
     * @param newData
     */
    update(id, newData){
        const oldState = this.state
        oldState.contacts[oldState.contacts.findIndex(el=> el.id === id)] = {
            id: id,
            name: newData.name,
            subName: newData.subName,
            number: newData.number
        }
        this.setState(oldState)
    }


    /**
     * Удаление элемента по его Id
     * @param contactId - Id записи
     */
    deleteById(contactId){
        const oldState = this.state
        let index = oldState.contacts.findIndex(c=> c.id === contactId)
        console.log(index)
        oldState.contacts.splice( index, 1)
        this.setState(oldState)
    }


    /**
     * Эелемнт, в котором в атрибуте data-id зафиксирован Id записи
     * @param el - tag с data-id
     */
    deleteByEl(el){
        let id = el.target.getAttribute('data-id')
        console.log(id)
        this.deleteById(id)
    }

    onChange(e) {
        const oldState = this.state
        oldState[e.target.name] = e.target.value
        this.setState(oldState)
    }



    /**
     * Заргузка в коллекцию демо данные.
     * Такой метод позволяет другим разработчикам понять, какие поля вы используете
     */
    loadSimpleData(){
        // Создадим контакт с полями, по описанию задачи
        let contact = {
            id: Date.now()  + "_" +  Math.random(), // Случайный номер
            name: "Имя", // поля для хранения имени контакта
            subName: "Фамилия", // фамилия
            number: "Номер телефона" // номер его телефона
        }

        const oldState = this.state // Взять старый стейт (мы не знаем что там храниться - но хотим оставить)
        oldState.contacts = [contact] // Поместим в контакты массив (коллекцию) с 1 контактом
        this.setState(oldState) // Поместим стейт обратно
    }


    search(){
        let search = this.state.search
        console.log(search)
        const oldState = this.state
        if(search.length > 0) { // Обозначает что надо что то искать
            if (oldState.oldContacts === null ) {
                oldState.oldContacts = oldState.contacts
            }
            oldState.contacts = []
            oldState.oldContacts.map( c=> {
                if (c.name.includes(this.state.search) || c.subName.includes(this.state.search))
                    oldState.contacts.push(c)
            })
            if(!oldState.contacts) oldState.contacts = []
            console.log(oldState.contacts)

        } else {
            if (oldState.oldContacts !== null ) {
                oldState.contacts = oldState.oldContacts // Если я что то сохранял
                oldState.oldContacts = null // востановлю на место и сотру старое
            }
        }
        console.log('Назад ставлю массив')
        this.setState(oldState)
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
                    <input type="text" name="search" onChange={this.onChange.bind(this)}  />
                    <button onClick={this.search.bind(this)}> Search </button>
                </div>
                <table  className="table" id="tblPhoneBook">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Subname</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                {
                    this.state.contacts.map(contact => (
                        <Contact  key={contact.id} contact={contact}
                                  update={this.update.bind(this)}
                                  delete={this.deleteByEl.bind(this)}></Contact>
                    ))
                }
                    </tbody>
                </table>
            </>
        )
    }


}
export default PhoneBook
