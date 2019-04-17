import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './App.scss';

import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import PageII from './pages/PageII';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
    return (
      <div>
        <Navbar >
          <NavLink id="first" to="/">Home</NavLink>
          <NavLink id="second" to="/list">List</NavLink>
          <NavLink id="third" to="/signin">Login</NavLink>
          <NavLink id="fourth" to="/signup">Register</NavLink>
        </Navbar>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={PageII}/>
          <Route path='/signin' component={Signin}/>
          <Route path='/signup' component={Signup}/>
        </Switch>
      </div>
    );
};

export default App;
