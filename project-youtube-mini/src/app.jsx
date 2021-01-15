import React, { Component } from 'react';
import axios from 'axios';  
import Lists from './components/lists';
import Searchbar from './components/searchbar';
import VideoDetails from './components/videodetail';

class App extends Component{
    constructor(){
        super();
        this.state = {
            videos : [],
            selectedVideo:''
        }
    };

    componentDidMount(){
        this.fetchSearchInputData('dil bechara');
    };

    fetchSearchInputData = async(data) => {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params:{
                q:data,
                part:'snippet',
                type:'video',
                maxResults:10,
                key:'AIzaSyCccBC--aNp4YJq5fyQPiWUhh5HcU8bxTg'
            }
        });
        //console.log(response.data.items);
        this.setState({
            videos : response.data.items,
            selectedVideo : response.data.items[0]
        })
    };

    selectedVideoDta = (data) => {
        console.log(data);
        this.setState({selectedVideo:data});
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Searchbar inputdata={this.fetchSearchInputData} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <VideoDetails selectedVideo={this.state.selectedVideo} />
                        </div>
                        <div className="col-md-4">
                            <Lists videolist={this.state.videos} videoData={this.selectedVideoDta} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
};

export default App;