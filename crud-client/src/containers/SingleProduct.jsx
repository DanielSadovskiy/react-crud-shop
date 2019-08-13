import React, { Component } from 'react';
import { getProduct, findById, getAllProducts } from '../API';
import ProductView from '../components/ProductView';

class SingleProduct extends Component {
    state = {
        productId:0,
        isLoading: true,
        products: {},
        singleProduct: {}
    }
    componentDidMount() {
        let {id} = this.props.match.params;
        getAllProducts()
            .then(products=>{
                this.setState({
                    isLoading:false,
                    products:products,
                    productId:id
                })
                let singleProduct = findById(products,parseInt(this.state.productId));
                this.setState({singleProduct:singleProduct});
            })
            

    }

    render() {
        return (
            <h1><ProductView product={this.state.singleProduct}/></h1>
        )
    }
}
export default SingleProduct;