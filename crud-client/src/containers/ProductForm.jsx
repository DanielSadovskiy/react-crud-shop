import React, { Component } from 'react';



class ProductForm extends Component {
    state = {
        product: {}
    }

    valueChange = (event) => {
        const {name, value} = event.target;
        this.setState((prevState) => ({
            product: {
                ...prevState.product,
                [name]: value
            }

        }));
    };
    validateProductForm = () =>{
        const {product} = this.state;
        const hasTitle = product.Title.trim() !== "";
        const hasDescription = product.Description.trim() !== "";
        const hasPrice = !isNaN(product.Price) && Number(product.Price) >=0;
        const hasQuantity = !isNaN(product.Quantity) && Number(product.Quantity) >=0;
        const hasURL = product.Image.trim() !== "";
        const hasType = product.Type.trim() !== "";
        const hasYear = !isNaN(product.Year) && Number(product.Year) >= 0;
        const hasRam = !isNaN(product.RAM) && Number(product.RAM) >= 0;
        const hasClass = product.class.trim() !== "";
        return hasTitle && hasDescription && hasPrice && hasQuantity && hasURL
            && hasType && hasYear && hasRam && hasClass;

    }
    submitForm = (event) =>{
        event.preventDefault();
        this.props.confirmForm(this.state.product);
    };

    render() {
        return (
            <form onSubmit={this.submitForm}> 
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" onChange={this.valueChange} className="form-control" name="Title" id="title" aria-describedby="emailHelp" placeholder="Enter title" required />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" onChange={this.valueChange} name="Description" id="description" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Price</label>
                    <input type="number" onChange={this.valueChange} step="1" min="0" name="Price" className="form-control" id="price" aria-describedby="emailHelp" placeholder="Enter price" required />

                </div>
                <div className="form-group">
                    <label htmlFor="title">Quantity</label>
                    <input type="number" onChange={this.valueChange} step="1" min="0" name="Quantity" className="form-control" id="quantity" aria-describedby="emailHelp" placeholder="Enter quantity" required />

                </div>
                <div className="form-group">
                    <label htmlFor="title">Image URL</label>
                    <input type="url" onChange={this.valueChange} className="form-control" name="Image" id="image" aria-describedby="emailHelp" placeholder="Enter image URL" required />

                </div>
                <div className="form-group">
                    <label htmlFor="title">Type</label>
                    <input type="type" onChange={this.valueChange} className="form-control" name="Type" id="type" aria-describedby="emailHelp" placeholder="Enter type" required />

                </div>
                <div className="form-group">
                    <label htmlFor="title">Year</label>
                    <input type="number" onChange={this.valueChange} className="form-control" name="Year" id="year" aria-describedby="emailHelp" placeholder="Enter year" required />

                </div>
                <div className="form-group">
                    <label htmlFor="title">RAM</label>
                    <input type="number" onChange={this.valueChange} step="1" min="0" name="RAM" className="form-control" id="ram" aria-describedby="emailHelp" placeholder="Enter RAM" required />

                </div>
                <div className="form-group">
                    <label htmlFor="title">Class</label>
                    <input type="text" onChange={this.valueChange} className="form-control" name="class" id="class" aria-describedby="emailHelp" placeholder="Enter class" required />

                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
export default ProductForm;

