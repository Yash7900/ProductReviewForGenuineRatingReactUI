import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/UserAction'
import Login from './Login'
import login from '../Assest/login.jpg'


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.address = React.createRef();
    this.phoneNumber = React.createRef();
    this.emailId = React.createRef();
    this.password = React.createRef();
    this.state = {
      firstNameError: '',
      lastNameError: '',
      addressError: '',
      phoneNumberError: '',
      emailIdError: '',
      passwordError: '',
      renderPage: "REGISTER_PAGE",
    }
  }
  componentDidMount() {
    this.props.clearState();
  }
  validate = (e) => {
    let { firstNameError, lastNameError, addressError, phoneNumberError, emailIdError, passwordError } = this.state
    if (!this.firstName.current.value) {
      firstNameError = "This field can not be blank"
    }
    if (!this.lastName.current.value) {
      lastNameError = "This field can not be blank"
    }
    if (!this.address.current.value) {
      addressError = "This field can not be blank"
    }
    if (!this.phoneNumber.current.value) {
      phoneNumberError = "This field can not be blank"
    }
    else if (this.phoneNumber.current.value.length !== 10) {
      phoneNumberError = "Number must be 10 digit long"
    }
    if (!this.emailId.current.value) {
      emailIdError = "This field can not be blank"
    }
    if (!this.password.current.value) {
      passwordError = "This field can not be blank"
    }
    else if (this.password.current.value.length < 8) {
      passwordError = "Password must be 8 character long"
    }
    if (firstNameError || lastNameError || addressError || phoneNumberError || emailIdError || passwordError) {
      this.setState({ firstNameError, lastNameError, addressError, phoneNumberError, emailIdError, passwordError })
      setTimeout(() => {
        this.setState({ firstNameError: '', lastNameError: '', addressError: '', phoneNumberError: '', emailIdError: '', passwordError: '' })

      }, 1000);
      return false;
    }
    
    return true;

  };

  // componentDidUpdate(){
   
  // }

  Register = (e) => {
    const valid = this.validate(e)
    console.log(valid)
    if (valid === true) {
      let User = {
        firstName: this.firstName.current.value,
        lastName: this.lastName.current.value,
        address: this.address.current.value,
        phoneNumber: this.phoneNumber.current.value,
        emailId: this.emailId.current.value,
        password: this.password.current.value
      }
      this.props.onRegister(User)
      this.firstName.current.value = '';
      this.lastName.current.value = '';
      this.address.current.value = '';
      this.phoneNumber.current.value = '';
      this.emailId.current.value = '';
      this.password.current.value= '';
      if(this.props.returnedMessage==='Registered Successfully !!'){
        return <Redirect to='/'/>

      }
    }
  }
  login=()=>{
   this.props.history.push('/')
   window.location.href = 'http://localhost:3000/'
  }
  render() {
    const componentRender = this.state.renderPage
    if (componentRender === "REGISTER_PAGE") {
      return (
        <div>
          <img src={login} style={{width:"100%",height:"100vh"}} />
          <h3 style={{ width: '50%',position:'absolute',top:'5%',justifyContent:'center',left:'25%',color:'white'}}>Registeration Page</h3>
        <div className="container mt-5 px-3 py-3 border border-dark rounded bg-light text-dark form-group required" style={{ width: '50%',position:'absolute',top:'7%',justifyContent:'center',left:'25%' }}>
          <div className="row">
            <div className="col">
              <form>
                <div className="mb-3 row">
                  <label htmlFor="firstName" className="col-sm-4 col-form-label control-label">
                    First Name<span style={{color:'red'}}>*</span>
                    </label>
                  <div className="col-sm-5 ">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      ref={this.firstName}
                      name="firstName"
                      required
                    /><br/>
                     <div className="font-size-small text-danger"  style={{marginLeft:'90px'}}>{this.state.firstNameError}</div>
                  </div>
                 
                </div>

                <div className="mb-3 row">
                  <label htmlFor="feedback-description" className="col-sm-4 col-form-label control-label">
                    Last Name<span style={{color:'red'}}>*</span>
                    </label>
                  <div className="col-sm-5">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      ref={this.lastName}
                      name="lastName"
                      required
                    /><br/> <div className="font-size-small text-danger"style={{marginLeft:'90px'}}>{this.state.lastNameError}</div>
                  </div>
                 
                </div>
                <div className="mb-3 row">
                  <label htmlFor="address" className="col-sm-4 col-form-label control-label">
                    Address<span style={{color:'red'}}>*</span>
                    </label>
                  <div className="col-sm-5">
                    <textarea
                      type="text"
                      className="form-control form-control-sm"
                      ref={this.address}
                      name="address"
                      required
                    /><br/><div className="font-size-small text-danger"style={{marginLeft:'90px'}}>{this.state.addressError}</div>
                  </div>
                  
                </div>
                <div className="mb-3 row">
                  <label htmlFor="phoneNumber" className="col-sm-4 col-form-label control-label">
                    Phone Number<span style={{color:'red'}}>*</span>
                    </label>
                  <div className="col-sm-5">
                    <input
                      type="tel"
                      className="form-control form-control-sm"
                      ref={this.phoneNumber}
                      name="phoneNumber"
                      maxLength="10"
                      pattern="^[7-9]{1}[0-9]{9}$"
                      title="Eg:9234567891"
                      required
                    /><br/> <div className="font-size-small text-danger"style={{marginLeft:'90px'}}>{this.state.phoneNumberError}</div>
                  </div>
                 
                </div>
                <div className="mb-3 row">
                  <label htmlFor="emailId" className="col-sm-4 col-form-label control-label">
                    Email ID<span style={{color:'red'}}>*</span>
                    </label>
                  <div className="col-sm-5">
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      ref={this.emailId}
                      name="emailId"
                      required
                      title="Eg:abc@gmail.com"
                    /><br/><div className="font-size-small text-danger"style={{marginLeft:'90px'}}>{this.state.emailIdError}</div>
                  </div>
                  
                </div>
                <div className="mb-3 row">
                  <label htmlFor="password" className="col-sm-4 col-form-label control-label">
                    Password<span style={{color:'red'}}>*</span>
                    </label>
                  <div className="col-sm-5">
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      ref={this.password}
                      name="password"
                      pattern='^[a-zA-Z0-9]+$'
                      title="Combination of letters and numbers of length to be 6. eg:abc123"
                      required
                    /><br/> <div className="font-size-small text-danger"style={{marginLeft:'90px'}}>{this.state.passwordError}</div>
                  </div>
                 
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <input type="button" className="btn btn-success btn-sm"
                      onClick={this.Register.bind(this)} value="Register"  />
                  </div>
                  <div className="col">
                    <input type="button" className="btn btn-primary btn-sm"
                      onClick={this.login} value="Back to Login"  />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className={"alert"} role="alert">
            {
              this.props.returnedMessage === 'Registered Successfully !!' ? this.setState({ renderPage: "LOGIN_PAGE" }) : <div></div>

            }
          </div>
          <div><h5>{this.props.returnedMessage}</h5></div>
        </div>
        
        </div>
      )
    }
    else if (componentRender === "LOGIN_PAGE") {
      return (
        <div>
          <Login />
        </div>
      )
    }
  }
}
const mapStateToProps = (state) => {
  console.log(state.UserReducer.status)
  console.log(state.UserReducer.returnedMessage)
  return {
    returnedMessage: state.UserReducer.returnedMessage,
    personList: state.UserReducer.personList,
    status: state.UserReducer.status
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (User) => {
      dispatch(actionCreators.addUser(User))
    },
    clearState: () => {
      dispatch(actionCreators.clearState())

    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register))