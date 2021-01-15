import React from 'react';
const VideoDetails = (props) => {   
    if(!props.selectedVideo){
        return <h4>Loading...</h4>
    }
    let url = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;
    //console.log(props.selectedVideo);
    return(
        <React.Fragment>
            <iframe width="560" height="315" src={url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h4>
                {props.selectedVideo.snippet.title}
            </h4>
        </React.Fragment>
    )
}

export default VideoDetails;