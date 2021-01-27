import React, { Component } from "react";
//import '../css/CompareProduct.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/UserAction'
import '../CSS/CompareProduct.css'
class CompareProduct extends Component {
    constructor(props) {
        super(props)
        let productCategory =localStorage.getItem('category');
        console.log(productCategory)
        productCategory=productCategory.split(',')
        this.state = {
            category: productCategory,
            renderPage:'CatogryPage'
        }
    }

    componentDidMount() {
        this.props.onGetCategory();

    }
    componentDidUpdate() {
      let check = this.props.categoryMessage.split(' ')
      if (check[0] === '') {
        setTimeout(() => {
          this.props.history.push('/compare')
        }, 2000)
      }
    }
    selectedCategory = (e) => {
        
        this.setState({ category: e.target.value })
        const productCategory = this.state.category
        
        this.props.onSelectProductByCategory(productCategory)


    }
    render() {
        const serializedState = this.props.category;
        localStorage.setItem('category', this.props.category);
        let productCategory = this.state.category.map((category, index) => {
            console.log(category+index)
            return (
                <option key={index} value={category.value}>
                    {category}
                </option>
            )
        })
        if(this.props.productList!=null){
        let productList=this.props.productList.map((product,index)=>{
            return(
                <tr key={index}>
                    <th>{product.productId}</th>               
                    <td>{product.productName}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    <td>{product.review}</td>
                </tr>
            )
        })
    }
        return (
            <div>
                <label className="category">Select Category:</label>
                <select value={this.state.category} onChange={this.selectedCategory} className="form-select" aria-label="Default select example" placeholder="Select Category">
                    {productCategory}
                </select><br />

                <input type="text" className="input1" placeholder="Enter product1 ID" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <input type="text" className="input2" placeholder="Enter product2 ID" aria-label="Example text with button addon" aria-describedby="button-addon2" /><br />
                <button type="button" className="btn btn-primary">Compare Product</button>
                <br />
                <br />
                <br />
                <br />
                <div>
                    <div className="trn-table-div">
                        <h2>{this.props.categoryMessage}</h2>
                        <table className="table table-info trn-table">
                            <thead>
                                <tr>
                                    <th scope="col">Product ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Seller</th>
                                    <th scope="col">Review</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {/* {productList}  */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   
    console.log(state.UserReducer.productList)
    return {
        categoryMessage: state.UserReducer.categoryMessage,
        category: state.UserReducer.categoryList,
        productList:state.UserReducer.productList
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetCategory: () => {
            dispatch(actionCreators.GetCategory())
        },
        onSelectProductByCategory: (productCategory) => {
            dispatch(actionCreators.SelectProductByCategory(productCategory))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CompareProduct))
