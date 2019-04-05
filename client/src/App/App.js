import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home';
import PageII from './pages/PageII';
import Signup from './pages/Signup';

function App() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={PageII}/>
          <Route path='/signup' component={Signup}/>
        </Switch>
      </div>
    );
};

export default App;
