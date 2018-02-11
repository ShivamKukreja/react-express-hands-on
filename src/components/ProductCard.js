import React from 'react';

export default function ProductCard (props) {
    let product = props.product;
    return (
        <div className="card col-sm-3" >
            <div className="card-body">
                <img className="card-img-top" src={product.image} alt="Card Caption" />            
                <h5 className="card-title">{product.name}</h5>
                <h5 className="card-price">Price: {product.price}</h5>
                <p className="card-text">{product.description}</p>
            </div>           
            <button className="btn btn-primary">Add to Cart</button>
        </div>
    )
}