import React, { Component } from "react";


class Products extends Component {

    state = {
        isLoading: true,
        products: []
    };
    componentDidMount() {
        const API_PRODUCTS = 'https://my-json-server.typicode.com/DanielSadovskiy/react-crud-shop/db';
        fetch(API_PRODUCTS)
            .then(res => res.json())
            .then(products => {
                this.setState({
                    products,
                    isLoading: false
                });
            })
            Object.keys(this.state.products).map((e)=>console.log(e));
    }
    render() {
        return (
            <div>
                <h1>Products</h1>
                
                {this.state.isLoading ? <h2>Loading products...</h2> : Object.keys(this.state.products
                    .map((e) => 
                     <h1>{e}</h1> ))}
            </div>
        );
    }
};
export default Products;