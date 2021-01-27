import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreated from '../actions/action'
import AdminUpdateProduct from './AdminUpdateProduct ';


export class AdminProductView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product:{},
            renderPage: "ADMIN_PRODUCT_VIEW",
        }

    }
    componentDidMount() {
        this.props.onGetProducts()
    }

    componentDidUpdate(){
        this.props.onGetProducts()
    }
    delete(productId) {
        this.props.onDeleteProduct(productId);
      
    }

    update = (product) => {
        this.setState({
            product,
            renderPage: "ADMIN_UPDATE_PRODUCT"

        })
      
    }
    render() {
        const renderComponent = this.state.renderPage;
        if (renderComponent === "ADMIN_PRODUCT_VIEW") {
            if(this.props.productList!=null){
            var productList = this.props.productList.map((product, index) => {
                return (
                    <tr key={index}>
                        <th>{product.productId}</th>
                        <td>{product.productName}</td>
                        <td>{product.category}</td>
                        <td>{product.sellerName}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td >
                            <button onClick={this.update.bind(this,product)} className="btn btn-primary">Update</button>

                            <span>  </span>
                            <button type='submit' onClick={this.delete.bind(this, product.productId)} className="btn btn-danger">DELETE</button>
                        </td>
                    </tr>
                )
            })
        }
            return (
                <div>  <h2>{this.props.returnedMessage}</h2>
                    <div id="adminProductView" id="adminView">
                        <div className="table-responsive-md">
                            <table className="table table-info ">
                                <thead >
                                    <tr>
                                        <th scope="col" >ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Seller</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productList}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.state.renderPage === "ADMIN_UPDATE_PRODUCT") {
            return (
                <div>
                    <AdminUpdateProduct product={this.state.product} ></AdminUpdateProduct>
                </div>
            );

        }
        else {
            return <div>{this.state.renderPage}</div>;
        }
    
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.Adminreducer.productList,
        returnedMessage: state.Adminreducer.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetProducts: () => {
            return dispatch(actionCreated.getAllProducts())
        },
        onDeleteProduct: (productId) => {
            return dispatch(actionCreated.deleteProduct(productId))
        },
        clearState: () => {
            return dispatch(actionCreated.clearState())
        }

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(AdminProductView)
