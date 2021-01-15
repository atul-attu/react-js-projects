import React, { Component } from 'react';
import Photos from "./photos";

class App extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <Photos />
                </div>
            </React.Fragment>
        )
    };
}

export default App;
