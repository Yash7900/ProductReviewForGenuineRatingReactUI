import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Link, Route } from "react-router-dom";
import Home from './components/Home'
import AdminRouter from './components/AdminRouter'
import UserRouter from './components/UserRouter'
import Login from './components/Login'
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/admin" component={AdminRouter}></Route>
        <Route path="/user" component={UserRouter}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
