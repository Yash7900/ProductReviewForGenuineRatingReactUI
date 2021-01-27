import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/action'

class AdminUpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.productId = React.createRef();
        this.productName = React.createRef();
        this.category = React.createRef();
        this.sellerName = React.createRef();
        this.description = React.createRef();
        this.price = React.createRef();
        this.state = {
            productId: props.product.productId,
            productName: props.product.productName,
            category: props.product.category,
            sellerName: props.product.sellerName,
            description: props.product.description,
            price: props.product.price
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }
    componentDidMount() {
        this.props.clearState()
    }
    componentDidUpdate() {
        let check = this.props.returnedMessage.split(' ')
        if (check[0] === 'After') {
            setTimeout(() => {
                this.props.history.push('/viewProduct')
            }, 200)
        }
    }
    update() {
        let product = {
            productId: this.productId.current.value,
            productName: this.productName.current.value,
            category: this.category.current.value,
            sellerName: this.sellerName.current.value,
            description: this.description.current.value,
            price: this.price.current.value,
        }
        this.props.onUpdateProduct(product)
       
    }
    back(){
        // this.props.history.push('/admin');
        window.location.href = 'http://localhost:3000/admin'
    }

    onChangeHandler(e, name) {
        console.log(e, name)
        this.setState(
            {
                [name]: e.target.value
            }
        )
    }
    render() {
        return (
            <div>
                <div className="container mt-5" id="adminForm">
                <h5><b>Update Form</b></h5>
                    <div className="conntainer row">
                        <div className="col"><br />
                            <form encType="multipart/form-data">
                                <div className="mb-3 row">
                                    <label htmlFor="productId" className="col-sm-4 col-form-label">
                                        Product ID
                                </label>
                                    <div className="col-sm-5" >
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Enter Product Id"
                                            ref={this.productId}
                                            name="productId"
                                            value={this.state.productId}
                                            disabled={true}
                                            // onChange={(e)=>{this.onChangeHandler(e,"productId")}} 
                                            required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="productName" className="col-sm-4 col-form-label">
                                        Product Name
                                        </label>
                                    <div className="col-sm-5">
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Enter Product Name"
                                            ref={this.productName}
                                            name="productName"
                                            value={this.state.productName}
                                            onChange={(e) => { this.onChangeHandler(e, "productName") }}
                                            required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="category" className="col-sm-4 col-form-label">
                                        Product Category
                                        </label>
                                    <div className="col-sm-5 ">
                                        <input type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Enter Product Category"
                                            ref={this.category}
                                            name="category"
                                            value={this.state.category}
                                            onChange={(e) => { this.onChangeHandler(e, "category") }}
                                            required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="sellerName" className="col-sm-4 col-form-label">
                                        Seller Name:
                                        </label>
                                    <div className="col-sm-5 ">
                                        <input type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Enter Seller Name"
                                            ref={this.sellerName}
                                            name="sellerName"
                                            value={this.state.sellerName}
                                            onChange={(e) => { this.onChangeHandler(e, "sellerName") }}
                                            required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="description" className="col-sm-4 col-form-label">
                                        Description:
                                        </label>
                                    <div className="col-sm-5 ">
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Enter Description"
                                            ref={this.description}
                                            name="description"
                                            value={this.state.description}
                                            onChange={(e) => { this.onChangeHandler(e, "description") }}
                                            required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="price" className="col-sm-4 col-form-label">
                                        Price :
                                        </label>
                                    <div className="col-sm-5 ">
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Enter Price"
                                            ref={this.price}
                                            value={this.state.price}
                                            onChange={(e) => { this.onChangeHandler(e, "price") }}
                                            name="price"
                                            required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-5" id="addButton">
                                        <button type="button" onClick={this.update.bind(this)} className="btn btn-primary add-button">Update</button>
                                    </div>
                                    <div className="mb-3 row">
                                        <input type="button" onClick={this.back.bind(this)} value="Back" to="/viewProduct" class="btn btn-outline-secondary"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={(this.props.returnedMessage === '') ? '' : "alert"} role="alert">
                        {this.props.returnedMessage}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.Adminreducer.returnedMessage)
    return {
        returnedMessage: state.Adminreducer.returnedMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateProduct: (productId, newProductObject) => {
            dispatch(actionCreators.updateProduct(productId, newProductObject))
        },

        clearState: () => {
            dispatch(actionCreators.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminUpdateProduct))
