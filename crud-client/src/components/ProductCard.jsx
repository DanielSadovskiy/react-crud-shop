import React from 'react';
import { Link } from 'react-router-dom'

const marginLink = {
    marginRight: "20px"
}
const ProductCard = ({ product,edit }) => {
    return (
        
            <div className="card col-sm-6 col-lg-3 ">
                <img className="card-img-top" src={product.Image} alt="cat" />
                <div className="card-body h-100">
                    <h5 className="card-title">{product.Title}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    { edit ? <Link style={marginLink} to={`/${product.Type}/${product.id}/edit`}>Edit</Link>:
                            <div>You</div>}
                    <Link to={`/${product.Type}/${product.id}`}>View</Link>
                    
                </div>
            </div>
       
    )
}
export default ProductCard;

