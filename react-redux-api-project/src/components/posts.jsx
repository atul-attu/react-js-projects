import React,{Component} from "react";
import {connect} from "react-redux";
import {usersPostData} from "../actions/posts";
import Users from "./users";
class Posts extends Component{ 
    componentDidMount(){
        this.props.usersPostData();
    }
    render(){
        if(!this.props.userspost){return <h2>Loading...</h2>;}
        return(
            <div className="row">
                {
                    this.props.userspost.slice(0,10).map(data => {
                        return(
                            <div className="col-md-4" key={data.id}>
                                <div className="card text-left">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {data.title}
                                        </h4>
                                        <p className="card-text">
                                            {data.body}
                                        </p>
                                        <Users uid={data.id} /> 
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    //console.log(state);
    return {userspost:state.post};
}

export default connect(mapStateToProps, {usersPostData})(Posts);