import React, { Component } from 'react';
import SignInForm from './componets/sign-in-form';
import Home from './componets/home'; 
import './index.css';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={ Home } /> 
          <Route path='/log-in' exact component={ SignInForm } /> 
        </Switch>
      </div>
    );
  }
}

export default App;
