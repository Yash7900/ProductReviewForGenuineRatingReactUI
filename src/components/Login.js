import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter,Redirect } from 'react-router-dom';
import * as actionCreators from '../actions/LoginAction'
import UserRouter from "./UserRouter";
import AdminRouter from './AdminRouter'
import Register from './Register'
import login from '../Assest/login.jpg'
class Login extends Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    console.log("token is", token);
    console.log("role is", role);
    var isLoggedIn = true
    var uRole = ''

    if (token === null) {
      isLoggedIn = false
    }
    if (role !== null) {
      uRole = role
    }

    this.setState({
      isLoggedIn: isLoggedIn,
      role: uRole
    })
    this.state = {
      login: '',
      emailId: '',
      password: '',
      emailError: '',
      passwordError: '',
      roleError: '',
      renderPage: 'Login_Page',
      isLoggedIn,
      role
    }
  }
  eventHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    let Admin = document.getElementById("admin");
    let User = document.getElementById("user");
    let element = document.getElementById("registerLink");
    if (User.checked) {
      element.classList.add("d-block");
    }
    else if (Admin.checked) {
      element.classList.remove("d-block");
    }
  }
  componentDidMount() {
    this.props.clearState()
  }
  componentDidUpdate() {
    console.log('status:' + this.props.status)
    console.log('person:' + this.props.person)
    localStorage.setItem(this.state.login, JSON.stringify(this.props.person))
    console.log("This is local storage")
    console.log(localStorage.getItem('User'))
  }
  validate = (e) => {
    let { emailError, passwordError, roleError } = this.state
    if (!this.state.emailId) {
      emailError = "This Email field can not be blank"
    }
    if (!this.state.password) {
      passwordError = "This Password field can not be blank"
    }
    else if (this.state.password.length < 8) {
      passwordError = "Password must be 8 character long"
    }
    if (!this.state.login) {
      roleError = "First Select a Role"
    }
    if (emailError || passwordError || roleError) {
      this.setState({ emailError, passwordError, roleError })
      setTimeout(() => {
        this.setState({ emailError: '', passwordError: '', roleError: '' })

      }, 1000);
      return false;
    }

    return true;
  }
  adminLogin = (e) => {
    e.preventDefault()
    const valid = this.validate(e)
    if (valid === true) {
      let credentials = {
        emailId: this.state.emailId,
        password: this.state.password,
        login: this.state.login

      }
      this.props.onValidateLogin(credentials)
     
    }
  }
  resetLogin = () => {
    this.setState({
      login: '',
      emailId: '',
      password: ''
    })
  }
  renderRegister = () => {
    this.setState({
      renderPage: "USER_REGISTER"
    })
  }

  render() {
    console.log("this.props.status ",this.props.status)
  console.log("this.state.loggedIn ",this.state.isLoggedIn)
  console.log("this.state.userRole ",this.state.login)
  console.log("this.state.role ",this.state.role)
    if((this.props.status === 200 || this.state.isLoggedIn === true)&& (this.state.login === "Admin" || this.state.role === "Admin"))
    {
      // console.log("You are logged in");
      localStorage.setItem("token","khfhdskhfkjsdhfkhdfsdjfhsd");
      localStorage.setItem("role","Admin");
      console.log(localStorage.getItem("role"))
      // sessionStorage.setItem("token","sdukfhksdhfkshdfksdhfk")
      return <Redirect to="/admin" />
    }
    else if((this.props.status === 200 || this.state.isLoggedIn === true)&& (this.state.login === 'User' || this.state.role === 'User'))
    {
      // console.log("You are logged in");
      localStorage.setItem("token","khfhdskhfkjsdhfkhdfsdjfhsd");
      localStorage.setItem("role",'User');
      // sessionStorage.setItem("token","sdukfhksdhfkshdfksdhfk")
      return <Redirect to="/user" />
    }
    const renderComponent = this.state.renderPage
    if (renderComponent === "Login_Page") {
      return (
        <div>
          <div className="navbar-brand">
            <h1>PRODUCT REVIEW FOR GENUINE RATING</h1>
          </div>
          <img src={login} style={{width:"100%",height:"90vh"}} />
        <div id="container" className="container mt-5 px-3 py-3 border border-dark rounded bg-light text-dark" style={{ width: '50%',position:'absolute',top:'12%',justifyContent:'center',left:'25%' }}>
          <div className="row">
            <div className="col">
              <h2>Login</h2>
              <br></br>
              <form>
                <div className="mb-3 row">
                  <div className="col-sm-4 ">
                    <input style={{ marginLeft: "110%" }}
                      type="text"
                      className="form-control form-control-sm"
                      name='emailId'
                      value={this.state.emailId}
                      onChange={this.eventHandler}
                      placeholder="Enter the Email Id"
                      required="required"
                    />
                    <br/>
                  </div>
                  <div className="font-size-small text-center text-danger">{this.state.emailError}</div>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-4">
                    <input style={{ marginLeft: "110%" }}
                      type="password"
                      className="form-control form-control-sm"
                      name='password'
                      pattern="^[a-zA-z]+[0-9]+$"
                      title="Password should contain letters and numbers e.g. john1234"
                      value={this.state.password}
                      placeholder="Enter Password"
                      onChange={this.eventHandler}
                      required
                    />
                    <br/>
                  </div>
                  <div className="font-size-small text-center text-danger" >{this.state.passwordError}</div>
                </div>
                <div className="font-size-small text-center text-danger">{this.state.roleError}</div>
                <div>
                  <div className="form-check">
                    <label style={{ marginRight: '75px' }}>
                      <input type="radio" id='admin' onChange={this.eventHandler} className="form-check-input radio-inline" value="Admin" name="login" />Admin
                      </label>
                    <label>
                      <input type="radio" id='user' onChange={this.eventHandler} className="form-check-input radio-inline" value="User" name="login" />User
                      </label> 
                  </div>
                </div>
                <br/>
                <div className="row mt-2">
                  <div className="col">
                    <button id="btnlogin" type='button' style={{ margintop: '30px', marginRight: '80px' }}
                      className="btn btn-primary"
                      onClick={this.adminLogin}>
                      Login
                  </button>
                    <button id="btnClear" type='reset' style={{ margintop: '30px' }}
                      className="btn btn-success"
                      onClick={this.resetLogin}>
                      Clear
                  </button>
                  </div>
                </div>
              </form>
              <div class="row mt-3 d-none" id="registerLink">
                <div class="col">
                  <h6 onClick={this.renderRegister} style={{ color: 'blue', textDecoration: 'underline' }}>
                    Don't have an account?
                  </h6>
                </div>
              </div>
              <br>
              </br>
              <div className={(this.props.returnedMessage === '') ? '' : "alert"} role="alert">
            {this.props.returnedMessage}
              </div>
            </div>
          </div>
          <div className={"alert"} role="alert">
            {/* {
              this.props.status === 200 ?
                (this.state.login === 'Admin' ? this.setState({ renderPage: "Admin_Routing" }) :
                  (this.state.login === 'User' ? this.setState({ renderPage: "User_Routing" }) :
                    <div></div>)) : <div></div>
            } */}
          </div>
        </div>
        </div>
      );
    }
    else if (this.state.renderPage === 'USER_REGISTER') {
      return (
        <div>
          <Register />
        </div>
      )
    }
    // else if (this.state.renderPage === 'Admin_Routing') {
    //   return (
    //     <div>
    //       <AdminRouter />
    //     </div>);
    // }
    // else if (this.state.renderPage === 'User_Routing') {
    //   return (
    //     <div>
    //       <h1><UserRouter /></h1>
    //     </div>);
    // }
    else {
      return <div>{this.state.renderPage}</div>;
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state.Reducer.status)
  console.log(state.Reducer.returnedMessage)
  return {
    returnedMessage: state.Reducer.returnedMessage,
    person: state.Reducer.personList,
    status: state.Reducer.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onValidateLogin: (credentials) => {
      //console.log(credentials)
      dispatch(actionCreators.validateLogin(credentials))
    },
    clearState: () => {
      dispatch(actionCreators.clearState())

    }

  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
