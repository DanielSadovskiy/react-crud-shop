import React, { Component } from "react";
import { getAllProducts, deleteProduct } from '../API'
import { withRouter } from 'react-router-dom'
import ProductCard from "../components/ProductCard";



const flexible = {
    display: 'flex',
    flexFlow: "row wrap",
    width: "100%"
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
        getAllProducts()
            .then(productList => {
                this.setState({
                    products: productList,
                    isLoading: false
                });
            })

    }
    deleteProduct = (prod) => {
        console.log(prod);
        deleteProduct(prod)
            .then(() => {
                getAllProducts()
                    .then(productList => {
                        this.setState({
                            products: productList,
                            isLoading: false
                        });
                    })
            })
    }
    render() {

        console.log(this.state.products)
        return (

            <div>
                <h1>Products</h1>

                <div >
                    {this.state.isLoading ? <h2>Loading products...</h2> : Object.keys(this.state.products)
                        .map((category) =>
                            <div style={flexible} key={category}>
                                <h1 style={likeAblock}>{category}</h1>
                                {Object.keys(this.state.products[category])
                                    .map((product) => <ProductCard deleteProduct={this.deleteProduct} edit={true} product={this.state.products[category][product]} key={this.state.products[category][product]["id"]} />)}
                            </div>)}
                </div>
            </div >
        );
    }
};
export default withRouter(Products);