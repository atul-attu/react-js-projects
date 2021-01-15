import React, { Component } from 'react';
import Navbar from "./navbar/navbar";
import "../scss/app-v1.css";
import TourList from "./tourlist/index";

class App extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <TourList />
            </React.Fragment>
        )
    };
};

export default App;