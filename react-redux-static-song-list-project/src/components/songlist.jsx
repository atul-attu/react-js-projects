import React, { Component } from 'react';
import {connect} from "react-redux";
import selectSong from "../actions/index";
class SongsList extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <h1>
                        Songs List
                    </h1>
                </div>
                {
                    this.props.songs.map((data) => {
                        return (
                            <div className="col-md-12" key={data.title} onClick={() => this.props.selectSong(data)}>
                                <div className="card text-left">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {data.title}
                                        </h4>
                                        <p className="card-text">
                                            {data.duration}
                                        </p>
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

// the value which is coming from reducers.
// creates a objects in this object we use a action method.

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        songs:state.songs
    };
}

export default connect(mapStateToProps, {selectSong})(SongsList);