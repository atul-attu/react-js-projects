import React from 'react';
const Items = (props) => {
    //console.log(props);
    if(!props){
        return <h1>Loading...</h1>
    }
    return(
        <React.Fragment>
            <div className="card" onClick={() => props.videodata(props.videoItem)}>
                <img className="card-img-top" 
                src={props.videoItem.snippet.thumbnails.high.url} 
                alt={props.videoItem.snippet.thumbnails.title} 
                />
                <div className="card-body">
                    <h4 className="card-title">
                        {props.videoItem.snippet.title}
                    </h4>
                    <p className="card-text">
                        {props.videoItem.snippet.description}
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Items;