import React, { Component } from 'react';
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <ul className="list-group my-5">
                        <h3 className="text-capitalize text-center">
                            todo list
                        </h3>
                        <TodoItem />
                        <button type="button" className="btn btn-danger btn-block text-capitalize mt-5">
                            Clear List
                        </button>
                    </ul>
                </React.Fragment>
            </div>
        )
    }
}
