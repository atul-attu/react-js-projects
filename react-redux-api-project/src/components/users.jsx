import React, { Component } from 'react';
import {connect} from "react-redux";
import usersAction from "../actions/userslist";

class Users extends Component{
    // constructor(props){
    //     super(props);
    // };
    componentDidMount(){
        this.props.usersAction(this.props.uid);
    };
    render(){
        if(!this.props.user){return null;}
        return(
            <React.Fragment>
                <h4>
                    {this.props.user.name}
                </h4>
            </React.Fragment>
        )
    }
};

const mapStateToProps = (state, ownprops) => {
    //console.log(state);
    return {user:state.users.find(user => user.id === ownprops.uid)};
}

export default connect(mapStateToProps, {usersAction})(Users);