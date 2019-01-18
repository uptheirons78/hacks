import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let mySentence = 'Welcome to my React App';
    let user = { firstName: 'Mauro', lastName: 'Bono' };
    return (
      //this is JSX syntax
      //N.B. remember to use className instead of class!
      <div className="App">
        <h2>{mySentence}</h2>
        <h4>
          My name is {user.firstName} {user.lastName}
        </h4>
      </div>
    );
  }
}

export default App;
