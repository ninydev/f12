import React from "react";
import './TagsList.css'; // Подключение стилей для компонента

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
            tags : [
                {id: 1, name: "Asp"},
                {id: 2, name: "Php"},
                {id: 3, name: "C#"},
                {id: 4, name: "C++"},
                {id: 5, name: "Html"},
                {id: 6, name: "Css"}
            ]
        }

    }


    // Отвечает за то, как будет выглядеть компонент
    renderData() {
        console.log('Работает рендер')
        return (
            <ul>
                {
                    this.state.tags.map( tag => (
                        <li key={tag.id}>{tag.name}</li>
                    ))
                }
            </ul>
        )
    }


    /**
     * Я принимаю решение - как я себя отображаю
     */
    render(){
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
            <div> Ожидаю получения данных </div>
        )
    }
}


export default TagsList;