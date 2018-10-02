import React, { Component } from 'react';
import SignInForm from './componets/sign-in-form';
import './index.css';  

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignInForm />
      </div>
    );
  }
}

export default App;
