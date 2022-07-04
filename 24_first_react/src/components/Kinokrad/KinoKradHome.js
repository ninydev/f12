import React from "react";
import './kinokrad.css';

class KinoKradHome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null, // Храним состояние ошибки
            isLoaded: false, // Храним состояние - загрузились ли данные
            items: []
        }
    }

    /**
     * Простое наполнение данными
     */
    getSimpleData(){
        let f1 = {
            id: Date.now(),
            name: "Род мужской (2022)",
            imgUrl: "https://s.kinokrad.co/uploads/img/1e7ae8be7e5e2b79f4972b9ef74b02ce.jpeg",
            des: "Для Харпер отдых в поместье с живописными пейзажами и неимоверно высокими счетами не является большой проблемой. Это все в порядке вещей. Главная героиня фильма «Род мужской» оказалась в небольшой деревушке всего лишь в четырех часах от Лондона."
        }

        const oldState = this.state
        oldState.items[0] = f1
        oldState.isLoaded = true
        this.setState(oldState)
    }

    componentDidMount() {
        this.getSimpleData()
    }


    // Отвечает за то, как будет выглядеть компонент
    renderData() {
        console.log('Работает рендер данных')
        return (
            <ul>
                {
                    this.state.items.map( item => (
                        <li key={item.id} className="clearfix">
                            <h4>{item.name}</h4>
                            <div>
                                <img src={item.imgUrl} style={{float:"left"}}/>
                                <p>{item.des}</p>
                            </div>
                        </li>
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
            <div className="alert alert-danger d-flex align-items-center" role="alert">
                <div>
                    <header  className="alert-heading"> Произошла ошибка компонента </header>
                </div>
            </div>
        )
    }

    /**
     * Выводим состояние - жду получения данных
     */
    renderPreload(){
        return(
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

}

export default KinoKradHome;