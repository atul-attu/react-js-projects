import React, { Component } from 'react';
import Posts from "../components/posts";
class App extends Component{
    render(){
        return(
            <div className="container">
                <Posts />
            </div>
        )
    };
};

export default App;