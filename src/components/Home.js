import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Login from './Login'


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            renderPage: 'HOME_PAGE'
        }
    }
    onHandleChange = () => {
        this.setState({
            renderPage: 'LOGIN_PAGE'
        })
    }
    render() {
        const renderComponent = this.state.renderPage
        if (renderComponent === 'HOME_PAGE') {
            return (
                <div>
                    <div>
                        <nav className='navbar navbar-light justify-content-center' style={{backgroundColor:'darkgray'}}>
                            <div className='navbar-container'>
                                {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}> */}
           <h2>PRODUCT REVIEW FOR GENUINE RATING</h2> 
            <i class='fab fa-typo3' />
                                {/* </Link> */}
                            </div>
                        </nav>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        {/* <img src={image} alt="" style={{width:'100%',height:"100%",position:'absolute',top:'0',left:'0',zIndex:'-1'}}/>
                        <Button style={{position:'absolute',top:'60%'}} onClick={this.onHandleChange}>Welcome</Button> */}
                    </div>
                    <div>
                        </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Login />
                </div>
            )
        }
    }
}

export default Home
