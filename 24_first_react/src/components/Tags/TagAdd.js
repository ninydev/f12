import React from "react";

class TagAdd extends React.Component{

    constructor(props) {
        super(props);
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
                                <label> NewTag:  <input type="text"/></label>
                                <button> Add </button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default TagAdd;