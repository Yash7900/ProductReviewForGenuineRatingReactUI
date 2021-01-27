import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/UserAction'

class ProfileUpdate extends React.Component{
    constructor(props){
        super(props)
        const user = localStorage.getItem('User');
        console.log(user)
        console.log(JSON.parse(user)[0].personId)
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.address = React.createRef();
        this.phoneNumber = React.createRef();
        this.emailId = React.createRef();
        this.password = React.createRef();
        this.state={
            personId:JSON.parse(user)[0].personId,
            person:{}
        }
    }
  componentDidMount(){
    console.log(this.state.personId)
      this.props.onGetUser(this.state.personId);
      
  }
  // componentDidUpdate(){
  //   this.props.onGetUser(this.state.personId);
  // }
  
  Update(){
    let User={
          personId: this.state.personId,
          firstName: this.firstName.current.value,
        lastName: this.lastName.current.value,
        address: this.address.current.value,
        phoneNumber: this.phoneNumber.current.value,
        emailId: this.emailId.current.value,
        password: this.password.current.value
      };
      console.log(JSON.stringify(User));
      console.log(User)
     this.props.onUpdate(User)
     this.props.onGetUser(this.state.personId);
  }
  
  Cancel(){
    this.props.history.push('/user');
  }
    render(){
      //const{personId,firstName,lastName,address,phoneNumber,emailId,password}=this.state
      if(this.props.person!=null){
        return(
            <div  className="container  px-3 py-3 border border-dark rounded bg-light text-dark" style={{ width: '70%',height:'40%' }}>
            <div className="row">
              <div className="col">
                <form>
                <div className=" row">
                    <label htmlFor="id" className="col-sm-4 col-form-label">
                      User ID <span style={{color:'red'}}>*</span>
                    </label>
                    <div className="col-sm-5 ">
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        name="personId"
                        value={this.state.personId}
                        //onChange={this.changePersonIdHandler}
                        disabled={true}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="firstName" className="col-sm-4 col-form-label">
                      First Name <span style={{color:'red'}}>*</span>
                    </label>
                    <div className="col-sm-5 ">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.firstName}
                        name="firstName"
                        defaultValue={this.props.person.firstName}
                        //onChange={this.changefirstNameHandler}
                        required
                      />
                    </div>
                  </div>
    
                  <div className="mb-3 row">
                    <label htmlFor="lastname" className="col-sm-4 col-form-label">
                      Last Name <span style={{color:'red'}}>*</span>
                    </label>
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.lastName}
                        name="lastname"
                        defaultValue={this.props.person.lastName}
                        //onChange={this.changelastNameHandler}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="address" className="col-sm-4 col-form-label">
                      Address <span style={{color:'red'}}>*</span>
                    </label>
                    <div className="col-sm-5">
                      <textarea
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.address}
                        name="address"
                        defaultValue={this.props.person.address}
                        //onChange={this.changeAddressHandler}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="phoneNumber" className="col-sm-4 col-form-label">
                      Phone Number <span style={{color:'red'}}>*</span>
                    </label>
                    <div className="col-sm-5">
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        ref={this.phoneNumber}
                        name="phoneNumber"
                        maxLength="10"
                        defaultValue={this.props.person.phoneNumber}
                        //onChange={this.changePhoneNumberHandler}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="emailId" className="col-sm-4 col-form-label">
                     Email ID <span style={{color:'red'}}>*</span>
                    </label>
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.emailId}
                        name="emailId"
                        defaultValue={this.props.person.emailId}
                        //onChange={this.changeEmailIdHandler}
                        disabled={true}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="password" className="col-sm-4 col-form-label">
                      Password <span style={{color:'red'}}>*</span>
                    </label>
                    <div className="col-sm-5">
                      <input
                        type="password"
                        className="form-control form-control-sm"
                        ref={this.password}
                        name="password"
                        defaultValue={this.props.person.password}
                        //onChange={this.changePasswordHandler}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <button type="button"
                        className="btn btn-success"
                        onClick={this.Update.bind(this)}
                      >
                        Update
                      </button>
                      <button 
                      className = "btn btn-danger" 
                      onClick = {this.Cancel.bind(this)} 
                      style = {{marginLeft: "10px"}}
                      >
                        Cancel
                        </button>
                    </div>
                   </div>
                </form>
            </div>
        </div>
        <div class="push"></div>
        </div>     
        )
      }
      else{
        return (
          <div>Profile Updated</div>
        )
      }
    }
}
const mapStateToProps = (state) => {
  console.log(state.UserReducer.User)
  return {
      person:state.UserReducer.User,
      returnedMessage: state.UserReducer.returnedMessage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      onUpdate: (User) => {
          dispatch(actionCreators.updateUser(User))
      },
      onGetUser: (personId,personObj) => {
        dispatch(actionCreators.getUser(personId,personObj))
    },
      clearState: () => {
          dispatch(actionCreators.clearState())

      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProfileUpdate))