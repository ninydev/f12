import React from "react";
import './kinokrad.css';

class KinoKradItem extends React.Component {
    constructor(props) {
        super(props);
    }


    /**
     * Тут мы используем только 1 рендер
     * Поскольку это статический компонент - он не меняет своих состояний
     */
    render() {
        return (
            <div className="card" style={{width:"18rem"}}>
                <img src={this.props.item.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.item.name}</h5>
                        <p className="card-text">{this.props.item.des}</p>
                    </div>
            </div>
        )
    }

}

//                         <a href="#" className="btn btn-primary">Go somewhere</a>

export default KinoKradItem