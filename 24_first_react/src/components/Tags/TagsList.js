import React from "react";
import TagAdd from "./TagAdd";

class TagsList extends React.Component{

    // Фрагмент кода который будет запущен обязательно в момент создания элемента
    // Тут принято описывать все данные, с которыми мы будем работать в компоненте
    // props - то что мы ему прислали
    // state - данные внутри компонента
    constructor(props) {
        super(props);

        console.log(' Работает конструктор')

        // Опишем данные, которые у нас есть под вывод
        this.state = {
            error: null, // Храним состояние ошибки
            isLoaded: false, // Храним состояние - загрузились ли данные
            data: [] // Место, где будут храниться мои данные в данном случае метки
        }

    }

    // Метод, который добавит новую метку к имеющемуся массиву
    addNewTag(newTagName){
        const oldState = this.state;
        let newTag = {
            id : Date.now(),
            name: newTagName
        }
        oldState.data.push(newTag);
        this.setState(oldState);
    }

    // Получение данных с сервера
    getDataFromServer(){
        this.setState({
            data : [
                {id: 1, name: "Asp"},
                {id: 2, name: "Php"},
                {id: 3, name: "C#"},
                {id: 4, name: "C++"},
                {id: 5, name: "Html"},
                {id: 6, name: "Css"}
            ],
            isLoaded: true
        })
    }

    /*
    Эта функция будет вызвана лишь раз во всем жизненном цикле данного компонента и будет
    сигнализировать, что компонент и все его дочерние компоненты отрисовались без ошибок.
    Т.к. эта функция гарантирована будет вызвана лишь раз, то это превосходный кандидат для
    выполнения любых сайд-эффектов, как то AJAX запросы.
     */
    componentDidMount(){
        console.log('componentDidMount')
        // Получение данных для первой загрузки лучше делать тут!!!!!
        // fetch  - будет тут

        // эмитация задержки получения данных от сервера - с задержкой на 1 секунду
        // this - что я обращаюсь к методу в своем классе
        // имя метода (в данном случае getDataFromServer
        // bind(this) - разрешить обращение к компоненту
        setTimeout (this.getDataFromServer.bind(this), 300)

    }


    // Отвечает за то, как будет выглядеть компонент
    renderData() {
        console.log('Работает рендер - строит элемент с данными')
        return (
            <>
            <ul>
                {
                    this.state.data.map( tag => (
                        <li key={tag.id}>{tag.name}</li>
                    ))
                }
            </ul>
                <TagAdd addNewTag={this.addNewTag.bind(this)}></TagAdd>
            </>
        )
    }

    // Я принимаю решение - как я себя отображаю
    render(){
        console.log('Render - строит внешний вид компонента')
        // Если в компоненте произошла ошибка - вывести ее
        if(this.state.error){
            return this.renderError()
        }
        // Если данные еще не получены - вывести - ожидаю данные
        if(!this.state.isLoaded){
            return this.renderPreload()
        }
        // Если нет ни ошибки ни получения данных - значит вывожу данные
        return this.renderData()
    }

    /**
     * Выводим что у нас проблемы Хьюстон
     */
    renderError(){
        return (
            <div>
                <header> Произошла ошибка компонента </header>
                <div> {this.state.error} </div>
            </div>
        )
    }

    /**
     * Выводим состояние - жду получения данных
     */
    renderPreload(){
        return(
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Ожидаю получения данных...</span>
        </div>
        )
    }
}


export default TagsList;