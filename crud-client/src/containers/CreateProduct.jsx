import React, { Component } from 'react';
import ProductForm from './ProductForm';
import {withRouter} from 'react-router-dom';
import { createProduct } from '../API';



class CreateProduct extends Component {
    state = {
        isLoading: false,
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
        product.Price = Number(product.Price);
        product.RAM = Number(product.RAM);
        product.Quantity = Number(product.Quantity);
        createProduct(product)
            .then((result)=>{
                console.log(result);
                this.props.history.push(`/${result.Type}/${result.id}`);
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
export default withRouter(CreateProduct);

