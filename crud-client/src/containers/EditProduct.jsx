import React, { Component } from 'react';
import { getProduct, updateProduct } from '../API';
import {withRouter} from 'react-router-dom'

import ProductForm from './ProductForm';

class editProduct extends Component {
    state = {
        product: {},
        isLoading: true
    }
    
    componentDidMount() {
        let { category, id } = this.props.match.params;
        getProduct(category, id)
            .then(product => {
                this.setState({
                    isLoading: false,
                    product: product

                })
                
            })
            
    }
    updateProduct = (product) =>{
        updateProduct(product)
            .then((result)=>{
                console.log(result);
                this.props.history.push(`/${result.Type}/${result.id}`);
            })
    }
    render() {
        
        return (
            <div>
                {this.state.isLoading ? <h1>Loading edit</h1> : <ProductForm product={this.state.product} confirmForm={this.updateProduct}/> }
                
            </div>
        )
    }
}

export default withRouter(editProduct);

