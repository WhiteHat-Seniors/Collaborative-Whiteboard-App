import React from 'react';
import './App.css'
import Home from './Containers/Home';
import Login from './Containers/Home/Login';
import Signup from './Containers/Home/Signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = (props) => {
return(
  <div>
    <Switch>
         <Route  path='/'  exact component={Home} />   {/* home   Page */}
         <Route path="/login" component={Login}   />   {/* Login  Page */}
         <Route path="/signup" component={Signup} />   {/* Signup Page */}
    </Switch>
  </div>
)
}

export default App