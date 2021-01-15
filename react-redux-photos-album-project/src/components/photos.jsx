import React, { Component } from 'react';
import {connect} from "react-redux";
import {photosPostData} from "../actions/posts";
import Albums from "./albums";

class Photos extends Component{
    componentDidMount(){
        this.props.photosPostData();
    }
    render(){
        if(!this.props.photospost){return <h2>Loading...</h2>}
        return(
            <React.Fragment>
                <div className="row">
                    {
                        this.props.photospost.slice(0,100).map(data => {
                            return(
                                <div className="col-md-4" key={data.id}>
                                    <div className="card text-left">
                                      <img className="card-img-top" src={data.thumbnailUrl} alt="" />
                                      <div className="card-body">
                                        <h4 className="card-title">
                                            {data.title}
                                        </h4>
                                        <Albums aid={data.id}/>
                                      </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
};

const mapStateToProps = (state) => {
    //console.log(state);
    return {photospost:state.photo};
}

export default connect(mapStateToProps, {photosPostData})(Photos);