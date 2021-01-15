import React,{Component} from 'react';
import axios from "axios";
import SearchProduct from './components/search-product';
import ProductCard from './components/product-card';
class App extends Component{
    constructor(){
        super();
        this.state = {
            products : []
        }
    }
    fetchData = async (data) => {
        let url = `https://pixabay.com/api/?key=19392297-967c7333af1e8db300d00c61e&q=yellow+${data}&image_type=photo&pretty=true`;
        let response = await axios.get(url);
        console.log(response);
        this.setState({
            products : response.data.hits
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SearchProduct filterData={this.fetchData}/>
                        </div>
                    </div>

                    <div className="row">
                        <ProductCard products={this.state.products} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default App;