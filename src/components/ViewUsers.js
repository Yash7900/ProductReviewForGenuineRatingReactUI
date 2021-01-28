import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreated from '../actions/action';
import { withRouter } from 'react-router-dom';

class ViewUsers extends Component {
    componentDidMount() {
        this.props.onGetUsers()
    }
    render() {
        if(this.props.UsersList!=null){    
       var UsersList=this.props.UsersList.map((user,index)=>{
            return(
                <tr key={index}>
                    <th>{user.personId}</th>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.address}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.emailId}</td>
                   
                </tr>
            )
        })
    }
    else{
        return (
            <div><h4>Nothing Found!!</h4></div>
        )
    }
        return (
             <div>
                    <div className="trn-table-div" id="adminView">
                        <h2>{this.props.returnedMessage}</h2>
                        <table className="table table-info trn-table">
                            <thead>
                                <tr>
                                    <th scope="col">User ID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Email Id</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {UsersList}
                            </tbody>
                        </table>
                    </div>
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        UsersList:state.Adminreducer.UsersList,
        returnedMessage: state.Adminreducer.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetUsers: () => {
          return  dispatch(actionCreated.getAllUsers())
        },
        clearState: () => {
          return  dispatch(actionCreated.clearState())

        }

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewUsers))