import React,{ Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route,Redirect } from 'react-router-dom';
import AddingFeedback from './AddingFeedback';
import CompareProduct from './CompareProduct'
import ProductViewByCategory from './ProductViewByCategory ';
import ProfileUpdate from './ProfileUpdate'
import { FaUserCircle } from 'react-icons/fa';
import { BiLogOut } from "react-icons/bi"
import Logout from './Logout'
// export function UserRouter() {
//     return (
//         <Router >
//             <div id="body">
//                 <div>
//                     <h2 id="main-heading"> 
//                         <br />
//                     PRODUCT REVIEW GENUINE RATING
//                     <FaUserCircle id="user" />                     
//                     </h2>
//                 </div>
//                 <div>
//                     <nav class="navbar navbar-light">
//                         <Link className="navbar-brand" to="/" >Home</Link>
//                         <Link className="navbar-brand" to="/category" >Category</Link>
//                         <Link className="navbar-brand" to="/compare" >Compare</Link>
//                         <Link className="navbar-brand" to="/aboutus" >About Us</Link>
//                     </nav>
//                 </div>


//                 <div class="footer">

//                     <p> All Rights Reserved.
//                     Product Review is Powered by Group 4</p>
//                 </div>


//                 <Switch>
//                     <Route exact path="/">
//                         <UserDashboard></UserDashboard>
//                     </Route>
//                     <Route path="/category">
//                        <ProductViewByCategory></ProductViewByCategory>
//                     </Route>
//                     <Route exact path="/compare">
//                         <CompareProduct/>
//                     </Route>
//                     <Route exact path="/aboutus">
//                         <AddingFeedback></AddingFeedback>
//                     </Route>
//                 </Switch>
//             </div>
//         </Router>
//     )
// }

// export default UserRouter

export class UserRouter extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token');
    
        console.log("token is",token);
        let loggedIn = true

        if(token === null)
        {
            loggedIn = false
        }

        this.state = {
             loggedIn
        }

        
    }
    render() {
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/" />
        }
        return (
            <Router >
            <div id="body">
                <div>
                <div  className="header" style={{display:'flex',justifyContent:'space-around'}}>
                    <h1 className="ml-5" style={{marginLeft:"100px!important"}} index="main-heading">PRODUCT REVIEW FOR GENUINE RATING </h1>
                   <div><Link className="navbar-brand" to="/logout"><BiLogOut id="user" />Logout</Link></div> 
                </div>
                </div>
                <div>
                    <nav class="navbar navbar-light">
                        <Link className="navbar-brand" to="/" ><FaUserCircle id="user"/>Profile</Link>
                        <Link className="navbar-brand" to="/category" >Category</Link>
                        <Link className="navbar-brand" to="/compare" >Compare</Link>
                        <Link className="navbar-brand" to="/aboutus" >About Us</Link>
                    </nav>
                </div>

               
                <div class="footer">

                    <p> All Rights Reserved.
                    Product Review is Powered by Group 4</p>
                </div>


                <Switch>
                    <Route exact path="/">
                        {/* <UserDashboard></UserDashboard> */}
                        <ProfileUpdate/>
                    </Route>
                    <Route path="/category">
                       <ProductViewByCategory></ProductViewByCategory>
                    </Route>
                    <Route exact path="/compare">
                        <CompareProduct/>
                    </Route>
                    <Route exact path="/aboutus">
                        <AddingFeedback></AddingFeedback>
                    </Route>
                    <Route  path="/logout" >
                        <Logout/>
                    </Route >
                </Switch>
            </div>
        </Router>

        )
    }
}

export default UserRouter

