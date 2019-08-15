import React, { Component } from 'react';
import { getProduct, findById, getAllProducts } from '../API';
import ProductView from '../components/ProductView';

class SingleProduct extends Component {
    state = {
        isLoading: true,
        product: {}
    }
    componentDidMount() {
        let {category,id} = this.props.match.params;
        getProduct(category,id)
            .then(product=>{
                this.setState({
                    isLoading:false,
                    product:product
                    
                })
                console.log(this.state.product)
               
            })
            

    }

    render() {
        console.log(this.state.product)
        return (
            <ProductView id={this.state.product.id} product={this.state.product}/>
        )
    }
}
export default SingleProduct;