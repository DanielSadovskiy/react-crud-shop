import React, { Component } from "react";
import ProductCard from "../components/ProductCard";
import prod from "../css/Products.css"

const flexible = {
    display:'flex',
    flexWrap: 'wrap'
}
const likeAblock = {
    width: '100%'
}
class Products extends Component {

    state = {
        isLoading: true,
        products: {}
    };
    componentDidMount() {
        // const API_PRODUCTS = 'https://my-json-server.typicode.com/DanielSadovskiy/react-crud-shop/db';
        const API_PRODUCTS = "http://localhost:3000/test";
        fetch(API_PRODUCTS)
            .then(res => res.json())
            .then(productList => {
                this.setState({
                    products: productList,
                    isLoading: false
                });
            })




        console.log(this.state.products);
        // Object.keys(this.state.products).map((e)=>console.log(e));
    }
    render() {
        console.log(this.state.products);
        return (

            <div>
                <h1>Products</h1>
                <div >
                    {this.state.isLoading ? <h2>Loading products...</h2> : Object.keys(this.state.products)
                        .map((category) =>
                            <div style={flexible} key={category}>
                                <h1 style={likeAblock}>{category}</h1>
                                {Object.keys(this.state.products[category])
                                    .map((product)=> <ProductCard key={this.state.products[category][product]["Title"]} name={this.state.products[category][product]["Title"]} />)}
                            </div>)}
                </div>
            </div>
        );
    }
};
export default Products;