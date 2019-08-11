import React, { Component } from "react";


                class Products extends Component {

    state = {
        isLoading: true,
        products: []
    };
    componentDidMount(){
        const API_PRODUCTS = 'https://randomuser.me/api/';
        fetch(API_PRODUCTS)
            .then(res => res.json())
            .then(products =>{
                console.log(products); 
            })
    }
    render() {
        return (
            <h1>Products</h1>
        );          
    }
};
export default Products;