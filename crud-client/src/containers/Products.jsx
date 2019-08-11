import React, { Component } from "react";


                class Products extends Component {

    state = {
        isLoading: true,
        products: []
    };
    componentDidMount(){
        const API_PRODUCTS = 'https://my-json-server.typicode.com/DanielSadovskiy/react-crud-shop/db';
        fetch(API_PRODUCTS)
            .then(res => res.json())
            .then(products =>{
                this.setState({
                    products,
                    isLoading:false
                });
            })
    }
    render() {
        return (
            <h1>Products</h1>
        );          
    }
};
export default Products;