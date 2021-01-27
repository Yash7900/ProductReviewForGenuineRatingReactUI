import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/UserAction'
import AddReview from './AddReview';
import '../CSS/viewproduct.css'

class ProductViewByCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product:{},
            renderPage: "PRODUCT_VIEW_BY_CATEGORY",
        }
        this.category = React.createRef()
    }

    search() {
        this.props.onSeacrhByCategory(this.category.current.value)
        console.log(this.props)
    }

    // componentDidMount() {
    //     this.props.clearState()
    // }

    review = (product) => {
        this.setState({
            product,
            renderPage: "ADD_REVIEW"

        })
      
    }
    // componentDidUpdate(){
    //     this.props.onSeacrhByCategory(this.category.current.value)
    // }
    render() {
        console.log(this.props)
        const renderComponent = this.state.renderPage;
        if (renderComponent === "PRODUCT_VIEW_BY_CATEGORY") {
            if(this.props.productList!=null){
        var productList = this.props.productList.map((product, index) => {
            return (
                <div class="col">
                <div class="card  p-4 d-inline-block" style={{height:'90%',width:'90%',backgroundColor:''}}>
                        <div class="card-body">
                            <h5 class="card-title">Name:{product.productName}</h5>
                            <p class="card-text" >Category:<small class="text-muted"><h5>{product.category}</h5></small></p>
                            <p class="card-text">Seller:<small class="text-muted"> {product.sellerName}</small></p>
                            <p class="card-text">Description:<small class="text-muted"> {product.description}</small></p>
                            <p class="card-text price" style={{color:'red'}}><h6>{product.price} INR</h6></p>
                            {/* <p class="card-text" style={{color:'red'}}>review:<h6>{product.review.map((review,index)=>
                    <ul key={index}>
                       {review.description}
                    </ul>
                    )}</h6></p> */}
                            <p class="card-text" style={{color:'black'}}>rate:<h6>{product.review.map((review,index)=>
                    <ul key={index}>
                       {review.rate}
                    </ul>
                    )}</h6></p>
                            <button onClick={this.review.bind(this,product)} className="btn btn-success">Review</button>
                        </div>
                        </div>
                </div>
                
                // <tr key={index}>
                           
                //     <td>{product.productName}</td>
                //     <td>{product.category}</td>
                //     <td>{product.sellerName}</td>
                //     <td>{product.description}</td>
                //     <td>{product.price}</td>
                    // <td>{product.review.map((review,index)=>
                    // <ul key={index}>
                    //    {review.rate}
                    // </ul>
                    // )}</td>
                    // <td>{product.review.map((review,index)=>
                    // <ul key={index}>
                    //     {review.description}
                    // </ul>
                //     )}</td>
                //     <td >
                //         <button onClick={this.review.bind(this,product)} className="btn btn-primary">Review</button>
                // </td>
                // </tr>
            )
        })
    }
    else{
        return (
            <div><h4>No Product Found</h4></div>
        )
    }
        return (
            <div className="search-product-category">
                <div className="mb-3 input-search-category ">
                    <br/>
                    <input
                        type="text"
                        ref={this.category}
                        className="form-control"
                        id="category"
                        placeholder="Product Catgory" />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={this.search.bind(this)}>Search</button>
                </div>
                <div>
                    <div class="row row-cols-1 row-cols-md-3 g-4" style={{padding:"20px"}}>
                        {productList}
                        
                                    </div> 
                                    </div>
                {/* <div className="tra-table-div" id="productViewByCategory">
                    <table className="table table-info trainee-table">
                        <thead>
                            <tr>
                               
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Seller</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Rate</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {productList}
                        </tbody>
                    </table>
                </div> */}
            </div>
        )
        }
        else if(this.state.renderPage === "ADD_REVIEW"){
            return (
                <div>
                    <AddReview product={this.state.product} ></AddReview>
                </div>
            );
        }

    }

}

const mapStateToProps = (state) => {
    console.log(state.UserViewReducer.productList)
    return {
        productList: state.UserViewReducer.productList,
        returnedMessage: state.UserViewReducer.returnedMessage
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        //onSeacrhByCategory: (category) => dispatch(actionCreators.getProductByCategory(category)),
        onSeacrhByCategory: (category) => {
            let response =  dispatch(actionCreators.getProductByCategory(category))
            console.log(response)
            return response
        },
        // clearState: () => dispatch(actionCreators.clearState())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewByCategory)
