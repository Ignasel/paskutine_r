import React, {Component} from 'react';
import {Link} from "react-router-dom"


function Products(props) {
    const products = props.products.map(product => {
    const link = `/product/${product.id}`;
    return(
        <div>
            <h5>{product.title}</h5>
            <img src='/skelbimai.test/public/{product.img}'/>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>patalpinta: {product.created_at}</p>
            <Link to={link} type="submit" class="btn btn-info">More...</Link>
        </div>

    )})
    return(
            <div className="row">
                {products}
            </div>
    )
}

export default Products;