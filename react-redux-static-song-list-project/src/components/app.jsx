import React, {Component} from 'react';
import SongsList from "../components/songlist";
import SelectedSong from "../components/selectedsong";
class App extends Component{
    constructor(){
        super();
    };
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <SongsList />
                        </div>
                        <div className="col-md-4">
                            <SelectedSong />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
};

export default App;
