import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './name';
import Cohort from './cohort';
import Address from './address';
import Car from './favoriteCar';
import Pet from './pet';
//class is basically Object.create()
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to NSS React</h1>
        </header>
        <p className="App-intro"></p>
        <Name/>
        <Cohort/>
        <Address/>
        <Car/>
        <Pet/>
      </div>
    );
  }
}
export default App