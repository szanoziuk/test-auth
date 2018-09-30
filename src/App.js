import React, { Component } from 'react';
import MyForm from './componets/auth-form';
import './index.css';  

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyForm />
      </div>
    );
  }
}

export default App;
