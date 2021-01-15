import React, {Component} from 'react';
class Searchbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchvideo:''
        }
    };

    handleFormSubmit = (e) =>{
        e.preventDefault();
        this.props.inputdata(this.state.searchvideo);
    };

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={this.handleFormSubmit}>
                            <input type="search" placeholder="search video" className="form-control" name="searchvideo" onChange={(e) => this.setState({searchvideo : e.target.value})} value={this.state.searchvideo} />
                        </form>
                    </div>
                </div>
            </div>
        )
    };
};

export default Searchbar;