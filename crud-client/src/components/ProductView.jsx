import React from 'react';
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"
import view from "../css/ProductView.css"


const ProductView = ({ product,edit}) => {
    return (

        <div className="wrapper">
            <div className="row">
                <div className="product-img col-12 col-md-5">
                    <img src={product.Image} alt={product.Title} />
                </div>
                <div className="product-info col-12 col-md-7">
                    <div className="product-text">
                        <h1>{product.Title}</h1>
                        <h2>by studio and friends</h2>
                        <p>{product.Description}</p>
                    </div>
                    <div className="product-price-btn">
                        <p><span>78</span>$</p>
                        <button type="button">buy now</button>
                        { edit ? <Link to={`/${product.Type}/${product.id}/edit`}>Edit</Link>:
                            <div>You</div>}
                    </div>
                </div>
            </div>
        </div>
        /* <img className="card-img-top" src="..." alt="cat" />
            <div className="card-body h-100">
                <h5 className="card-title">{product.Title}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
                <Link to={`/products/${product.id}`}>View</Link>
                
            </div> */


    )
}
export default ProductView;

