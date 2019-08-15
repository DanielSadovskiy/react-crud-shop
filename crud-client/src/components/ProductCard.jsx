import React from 'react';
import { Link } from 'react-router-dom'
import card from '../css/ProductCard.css'
const marginLink = {
    marginRight: "20px"
}
const btnAbs = {
    position : "absolute",
    top: 0,
    right: 0
}
const ProductCard = ({ product, edit, deleteProduct }) => {
    
    return (
        
        <div className="card col-sm-6 col-lg-3 ">
            <img className="card-img-top" src={product.Image} alt="cat" />
            <div className="card-body h-100">
                <h5 className="card-title">{product.Title}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
                {edit ?
                    <span>
                        <Link style={marginLink} to={`/${product.Type}/${product.id}/edit`}>Edit</Link>
                        
                        <button onClick={() => deleteProduct(product)} className="btn btn-danger" style={btnAbs}>Delete</button>
                    </span>
                    :
                    <div>You</div>}
                <span><Link to={`/${product.Type}/${product.id}`}>View</Link></span>

            </div>
        </div>

    )
}
export default ProductCard;

