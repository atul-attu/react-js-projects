import React, { Component } from 'react';
import {connect} from "react-redux";
import albumsAction from "../actions/albumlist";

class Albums extends Component{
    componentDidMount(){
        this.props.albumsAction(this.props.aid);
    };
    render(){
        if(!this.props.album){return null;}
        return(
            <React.Fragment>
                <h1>
                    {this.props.album.title}
                </h1>
            </React.Fragment>
        )
    }
};

const mapStateToProps = (state, ownprops) => {
    //console.log(ownprops);
    return {album:state.albums.find(album => album.id === ownprops.aid)}
}

export default connect(mapStateToProps,{albumsAction})(Albums);