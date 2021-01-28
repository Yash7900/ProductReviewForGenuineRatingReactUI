import React from 'react'
//import '../css/AddReview.css'
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import * as actionCreators from '../actions/UserAction';
import { FaUserPlus } from 'react-icons/fa';

class AddReview extends React.Component {
    constructor(props) {
        super(props);
        const user = localStorage.getItem('User');
        console.log(user)
        console.log(JSON.parse(user)[0].personId)
        //this.productId = React.createRef();
        // this.rate = React.createRef();
        // this.description = React.createRef();
        this.state = {
            productId: props.product.productId,
            userId: JSON.parse(user)[0].personId,
            rate: 0,
            description: ''
        }
        console.log("userId" + this.state.userId)
        //console.log("productId"+productId)  
    }
    componentDidMount() {
        this.props.clearState();
    }


    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({ rate: prevValue + nextValue })
    }
    submitClick() {

        let Review = {
            userId: this.state.userId,
            productId: this.state.productId,
            rate: this.state.rate,
            description: this.state.description,
            //  productId: this.state.productId,
            //  rate: this.state.rate,
            //  description:this.state.description
        };
        this.props.onSubmitReview(this.state.userId, this.state.productId, Review)
        // let check = this.props.returnedMessage.split(' ')
        // if (check[0] === 'Successfully' || check[4] === 'Already') {
        //     setTimeout(() => {
        //         <Redirect to='/user' />
        //     }, 100)
        // }
        this.props.history.push('/user')
    }
    render() {
        const { rate, description } = this.state
        return (
            <div className='divClass'>
                <br />
                <br />
                <br />
                <br />
                <div className="container  px-3 py-3 border border-dark rounded bg-light text-dark" style={{width:'50%'}}>
                    <form >
                        <div>
                            {/* <input type="text"
                        className="form-control"
                        placeholder="Enter Product Id"
                        //ref={this.productId}
                        name="productId"
                        value={this.state.productId}
                        // onChange={(e)=>{this.onChangeHandler(e,"productId")}} 
                        required /> */}
                            <label className="labelClass">
                                Rate
                    </label><br></br>

                            <StarRatingComponent
                                name="rate"
                                starCount={5}
                                value={rate}
                                onStarClick={this.onStarClick.bind(this)}
                                className="StarClass"
                                size={24}
                            // ref={this.rate}
                            />
                        </div>
                        <div>
                            <label className="labelClass">
                                Review
                    </label>
                            <div>
                                <textarea
                                    type="text"
                                    name="description"
                                    value={description}
                                    //  ref={this.description}
                                    onChange={this.changeDescriptionHandler}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <button type="button"
                                className="btn btn-success"
                                onClick={this.submitClick.bind(this)}>
                                Submit
                    </button>
                        </div>
                       
                    </form>
                    <h5>{this.props.returnedMessage}</h5>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.UserReducer.returnedMessage)
    return {
        returnedMessage: state.UserReducer.returnedMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitReview: (userId, productId, Review) => {
            dispatch(actionCreators.submitReview(userId, productId, Review))
        },
        clearState: () => {
            dispatch(actionCreators.clearState())

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddReview))