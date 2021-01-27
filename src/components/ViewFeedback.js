import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreated from '../actions/action'


class ViewFeedback extends Component {
    componentDidMount() {
        this.props.onGetFeedbacks()
    }

    delete(feedbackId){
        this.props.onDeleteFeedback(feedbackId);
    }

    render() {
        if(this.props.feedbacksList!=null){
       var feedbacksList=this.props.feedbacksList.map((feedback,index)=>{
            return(
                <tr key={index}>
                    <th>{feedback.feedbackId}</th>
                    <td>{feedback.feedbackAbout}</td>
                    <td>{feedback.feedbackDescription}</td>
                    <td>
                        <button onClick={this.delete.bind(this,feedback.feedbackId)} className="btn btn-danger">DELETE</button>
                    </td>
                </tr>
            )
        })
    }
        return (
             <div>
                    <div className="trn-table-div" id="adminView">
                        <h2>{this.props.returnedMessage}</h2>
                        <table className="table table-info trn-table">
                            <thead>
                                <tr>
                                    <th scope="col">Feedback ID</th>
                                    <th scope="col">Feedback About</th>
                                    <th scope="col">Feedback Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feedbacksList}
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        feedbacksList:state.Adminreducer.feedbacksList,
        returnedMessage: state.Adminreducer.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetFeedbacks: () => {
          return  dispatch(actionCreated.getAllFeedbacks())
        },
        onDeleteFeedback: (feedbackId, feedbackObject) => {
          return dispatch(actionCreated.deleteFeedback(feedbackId, feedbackObject))
        },
        clearState: () => {
          return  dispatch(actionCreated.clearState())

        }

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ViewFeedback)