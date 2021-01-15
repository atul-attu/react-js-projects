import React from "react";

const ProductCard = (props) => {
    console.log(props);
    if(!props.products){
        return null
    }
    return(
        <div className="row">
            {
                props.products.map(data => {
                    return(
                        <div className="col-md-4" key={data.id}>
                            <div className="card text-left">
                                <img className="card-img-top" src={data.largeImageURL} alt={data.tags} />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        {data.user}
                                    </h4>
                                    <p>
                                        like : {data.likes}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductCard;