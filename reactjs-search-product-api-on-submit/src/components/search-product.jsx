import React,{Component} from "react";
class SearchProduct extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchField : 'food',
        };
    };
    searchData = (e) => {
        e.preventDefault();
        this.props.filterData(this.state.searchField);
    }
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={this.searchData}>
                            <input type="search" placeholder="search product" className="form-control" onChange={(e) => this.setState({searchField : e.target.value})} value={this.state.searchField}/>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SearchProduct;