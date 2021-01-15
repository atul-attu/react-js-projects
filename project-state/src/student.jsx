import React, { Component } from 'react'
class Student extends Component{
    // state = {
    //     name:"Atul Dalvi",
    //     employeeId:this.props.employeeId
    // };
    constructor(props){
        super(props);
        this.state = {
            name:"Atul Dalvi",
            employeeId:this.props.employeeId,
            isSwitchOn:false
        };
    };
    handleClick = () => {
        console.log("Button Clicked");
        this.setState({
            employeeId:104,
            isSwitchOn:!this.state.isSwitchOn
        })
    }
    render(){
        return(
            <React.Fragment>
                <h1 className={this.state.isSwitchOn ? "heading active" : "heading"}>
                    Hello, {this.state.name} Your employee id is {this.state.employeeId}
                </h1>
                <button 
                    className={this.state.isSwitchOn ? "square active" : "square"} 
                    onClick={this.handleClick}
                >
                    {this.state.isSwitchOn ? 'Click Me Active' : 'Click Me'}
                </button>
            </React.Fragment>
        )
    }
}
export default Student;