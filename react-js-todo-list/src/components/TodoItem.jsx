import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <li classNam="list-group-item text-capitalize d-flex justify-content-between my-2">
                        <h6>Title</h6>
                        <div className="todo-icon">
                            <span className="mx-2 text-success">
                                <i className="fas fa-pen" />
                            </span>
                            <span className="mx-2 text-danger">
                                <i className="fas fa-trash" />
                            </span>
                        </div>
                    </li>
                </React.Fragment>
            </div>
        )
    }
}
