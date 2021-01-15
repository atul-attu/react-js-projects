import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import uuid from 'uuid';
class App extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-4">
                            <h3 className="text-capitalize text-center">
                                Todo Input
                            </h3>
                            <TodoInput />
                            <TodoList />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default App;