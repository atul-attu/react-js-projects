import React from 'react';
import {connect} from 'react-redux';

const SelectedSong = (props) => {
    if(!props.song){return null;}
    return(
        <React.Fragment>
            <div className="card text-left">
              <div className="card-body">
                <h4 className="card-title">
                    {props.song.title}
                </h4>
                <p className="card-text">
                    {props.song.duration}
                </p>
              </div>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    //console.log(state);
    return {song:state.selectedsong};
}

export default connect(mapStateToProps)(SelectedSong);