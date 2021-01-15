import React from 'react';
import Items from './items';

const Lists = (props) => {
    //console.log(props);
    if(!props){
        return null;
    }
    return(props.videolist.map((item) => <Items videoItem={item} videodata={props.videoData} key={item.id.videoId} />))
};

export default Lists;