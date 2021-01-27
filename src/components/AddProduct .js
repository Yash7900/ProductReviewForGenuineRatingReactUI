import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/action'

class AddProduct extends Component {
    constructor(props) {
        super(props);            
        this.state = {
            productNameError: "",
            categoryError: "",
            sellerNameError: "",
            descriptionError: "",
            priceError: "",

          };
        this.productName = React.createRef();
        this.category = React.createRef();
        this.sellerName = React.createRef();
        this.description = React.createRef();
        this.price = React.createRef();
    }
    componentDidMount() {
        this.props.clearState()
    }
    componentDidUpdate() {
        console.log("component updated")
        // let check = this.props.returnedMessage.split(' ')
        //  if (check[0] === 'Successfully') {
        //      setTimeout(() => {
               //  this.props.history.push('/viewProduct')
        //      }, 2000)
        //  }
     }

     validate = (e) => {
        let {productNameError,categoryError,sellerNameError,descriptionError,priceError} = this.state;
      
        if (!this.productName.current.value) {
            productNameError="Product Name can not be blank"
        }
        if(!this.category.current.value){
            categoryError= "Category can not be blank"
        }
        if (!this.sellerName.current.value) {
            sellerNameError= "Seller Name can not be blank"
        }
       if(!this.description.current.value){
        descriptionError="Description can not be blank"
       }
        if(!this.price.current.value){
            priceError= "Price field can not be blank"
        }
       
        if(productNameError||categoryError||sellerNameError||descriptionError||priceError){
          this.setState({productNameError,categoryError,sellerNameError,descriptionError,priceError})
          setTimeout(() => {
            this.setState({productNameError:'',categoryError:'',sellerNameError:'',descriptionError:'',priceError:''})
            
          }, 2000);
          return false;
        }
    
        return true;
        
      };

    add(e) {
       // e.preventDefault()
        const valid = this.validate(e);
        console.log(valid);
        if(valid === true)
        {
        let newProduct = {
            productName: this.productName.current.value,
            category: this.category.current.value,
            sellerName: this.sellerName.current.value,
            description: this.description.current.value,
            price: this.price.current.value,
        }

        this.props.onAddProduct(newProduct)
        

    }
}
    render() {
        return (
            <div className="card"  id="adminForm" style={{width:'50%',marginLeft:'auto',marginRight:'auto',marginTop:'30px',backgroundColor:'#c1b0c2',border:'1px solid black'}}>  
                <div className="container mt-5" >
                <h4>Add Product Form</h4>
                    <div className="conntainer row">
                        <div className="col">
                            <form id="addform" encType="multipart/form-data">                         
                                <div className="mb-3 row">
                                    <div className="col-sm-5" >
                                        <input 
                                        type="text"
                                        className="form-control" 
                                        placeholder="Enter Product Name" 
                                        ref={this.productName} 
                                        name="productName" 
                                        required /><span style={{color:'red'}}>*</span>
                                        <br/>  <div className="font-size-small text-center text-danger">{this.state.productNameError}</div>
                                    </div>
                                  
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-5 ">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Enter Product Category" 
                                        ref={this.category} 
                                        name="category" 
                                        required />
                                     <br/>   <div  className="font-size-small text-center text-danger">{this.state.categoryError}</div>
                                    </div>
                                    
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-5 ">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Enter Seller Name" 
                                        ref={this.sellerName} 
                                        name="sellerName"
                                        required />
                                        <br/>  <div  className="font-size-small text-center text-danger">{this.state.sellerNameError}</div>
                                    </div>
                                  
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-5 ">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Enter Description" 
                                        ref={this.description} 
                                        name="description" 
                                        required />
                                      <br/>  <div  className="font-size-small text-center text-danger">{this.state.descriptionError}</div>
                                    </div>
                                    
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-5 ">
                                        <input 
                                        className="form-control" 
                                        placeholder="Enter Price" 
                                        ref={this.price} 
                                        name="price" 
                                        type="number" 
                                        required />
                                       <br/>   <div className="font-size-small text-center text-danger">{this.state.priceError}</div>
                                    </div>
                                    
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-5" id="addButton">
                                        <button onClick={this.add.bind(this)} type="reset" className="btn btn-primary btn-lg" >Add Product</button>
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
    console.log(state.returnedMessage)
    return {
        returnedMessage: state.Adminreducer.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddProduct: (product) => {
            dispatch(actionCreators.addProduct(product))
        },
        clearState: () => {
            dispatch(actionCreators.clearState())

        }

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddProduct))
