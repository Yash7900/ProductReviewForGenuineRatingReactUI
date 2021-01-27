import React, { Component } from 'react'



export class Logout extends Component {

    constructor(props) {
        super(props)
    
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        localStorage.removeItem('User')
       
    }

    componentDidMount(){
        window.location.href = 'http://localhost:3000/'
    }
    
    
    render() {
        return (
            <div>


                {/* <h1>You have been logged out</h1> */}
                {/* <input type="button" value = "Refresh" onclick="history.go(0)" /> */}
                {/* <button onClick={this.logout.bind(this)}>Log In Again</button> */}
            </div>
        )
    }
}

export default Logout