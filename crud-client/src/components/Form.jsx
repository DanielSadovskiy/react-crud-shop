import React, { Component } from 'react';



class Form extends Component {
    state = {
        product: {
            ...this.props.product
        }
    }
    
    valueChange = (event) => {
        const { name, value,type } = event.target;
        console.log(name,value)
        this.setState((prevState) => ({
            product: {
                ...prevState.product,
                [name]: type === 'number' ? parseFloat(value) : value
               
                
            }
        }));
    };
    
    render() {
        const {product} = this.state;
        return (
            <form onSubmit={this.props.submitForm}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" onChange={this.valueChange} value={product.Title} className="form-control" name="Title" id="title"  placeholder="Enter title" required />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" onChange={this.valueChange} value={product.Description} name="Description" id="description" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Price</label>
                    <input type="number" onChange={this.valueChange} value={product.Price} step="0.01" min="0" name="Price" className="form-control" id="price" aria-describedby="emailHelp" placeholder="Enter price" required />

                </div>
                <div className="form-group">
                    <label htmlFor="title">Quantity</label>
                    <input type="number" onChange={this.valueChange} value={product.Quantity} step="1" min="0" name="Quantity" className="form-control" id="quantity" aria-describedby="emailHelp" placeholder="Enter quantity" required />

                </div>
                <div className="form-group">
                    <label htmlFor="title">Image URL</label>
                    <input type="url" onChange={this.valueChange} value={product.Image} className="form-control" name="Image" id="image" aria-describedby="emailHelp" placeholder="Enter image URL" required />

                </div>
                <div className="form-group">
                    <label htmlFor="title">Type</label>
                    <select className="form-control" onChange={this.valueChange} value={product.Type} name="Type">
                        <option value="laptops" >laptops</option>
                        <option value="iphone">iphone</option>
                    </select>

                </div>
                <div className="form-group">
                    <label htmlFor="title">Year</label>
                    <input type="date" onChange={this.valueChange} value={product.Year} className="form-control" name="Year" id="year" aria-describedby="emailHelp" placeholder="Enter year" required />

                </div>
                <div className="form-group">
                    <label htmlFor="title">RAM</label>
                    <input type="number" onChange={this.valueChange} value={product.RAM} step="1" min="0" name="RAM" className="form-control" id="ram" aria-describedby="emailHelp" placeholder="Enter RAM" required />

                </div>
                <div className="form-group">
                    <label htmlFor="title">Class</label>
                    <input type="text" onChange={this.valueChange} value={product.class} className="form-control" name="class" id="class" aria-describedby="emailHelp" placeholder="Enter class" required />

                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
export default Form;

