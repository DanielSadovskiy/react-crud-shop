import React, { Component } from 'react';
import ProductForm from './ProductForm';
import { createProduct } from '../API';



class CreateProduct extends Component {
    state = {
        creating: false,
        product: {
            "Title": "",
            "Description": "",
            "Price": 0,
            "Quantity": 0,
            "Image": "",
            "Type": "",
            "Year": "",
            "RAM": 0,
            "class": "",


        }
    }
    confirmForm = (product) =>{
        console.log("I am created", product);
        this.setState({
            creating:true
        });
        createProduct(product)
            .then((res)=>{
                console.log(res);
            })
    }
    render() {
        return (
            <div>
                <h1>Create</h1>
                <ProductForm product={this.state.product} confirmForm={this.confirmForm}/>
            </div>
        )
    }
}
export default CreateProduct;

