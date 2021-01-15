import React, { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            mobileno:'',
            UserLogin:{
                userId:'',
                email:'',
                password:''
            }
        };
    };

    handlerSubmit = (e) => {
        e.preventDefault();
    };

    handlerInputdata = (e) => {
        console.log(e);
    }

    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={this.handlerSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="enter firstname" name="firstname" value={this.state.firstname} onChange={this.handlerInputdata} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="enter lastname" name="lastname" value={this.state.firstname} onChange={this.handlerInputdata} />
                            </div>
                            <button type="submit" className="btn btn-outline-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    };
}

export default Form;