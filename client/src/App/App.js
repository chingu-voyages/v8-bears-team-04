import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home';
import PageII from './pages/PageII';

function App() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={PageII}/>
        </Switch>
      </div>
    );
};

export default App;