import React, { Component } from 'react';
import Form from '../components/Form';



class ProductForm extends Component {
    state = {
        product: {
           
        }
    }
    static getDerivedStateFromProps(nextProps,prevState){
        if(prevState.product !== nextProps.product){
            return{
                product: nextProps.product
            }
        }
        return null;
    }
    // valueChange = (event) => {
    //     const { name, value } = event.target;
    //     this.setState((prevState) => ({
    //         product: {
    //             ...prevState.product,
    //             [name]: value
                
    //         }
    //     }));
    // };
    validateProductForm = () => {
        const { product } = this.state;
        const hasTitle = product.Title.trim() !== "";
        const hasDescription = product.Description.trim() !== "";
        const hasPrice = !isNaN(product.Price) && Number(product.Price) >= 0;
        const hasQuantity = !isNaN(product.Quantity) && Number(product.Quantity) >= 0;
        const hasURL = product.Image.trim() !== "";
        // const hasYear = !isNaN(product.Year) && Number(product.Year) >= 0;
        const hasRam = !isNaN(product.RAM) && Number(product.RAM) >= 0;
        const hasClass = product.class.trim() !== "";
        return hasTitle && hasDescription && hasPrice && hasQuantity && hasURL
              && hasRam && hasClass;

    }
    submitForm = (event) => {
        event.preventDefault();
        if(this.validateProductForm()){
            this.props.confirmForm(this.state.product);
            
        }
        
    };
    // valueChange = (event) => {
    //     const { name, value,type } = event.target;
    //     console.log(name,value)
    //     this.setState((prevState) => ({
    //         product: {
    //             ...prevState.product,
    //             [name]: type === 'number' ? parseFloat(value) : value
               
                
    //         }
    //     }));
    // };

    render() {
        console.log(this.state.product);
        const {product} = this.state;
        return (
            <Form product={product} key={product.id} submitForm={this.submitForm}/>
        )
    }
}

// ProductForm.propTypes = {
//     product: React.PropTypes.object
//   };
export default ProductForm;

