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
  constructor (props) {
    super(props)

    this.state = {
      name: "Meghan Debity",
      cohort: "Day 25",
      address: "Earth",
      car: "Tardis",
      pet: "Genetically Modified Tiger"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is me</h1>
        </header>
        <p className="App-intro"></p>
        <Name name={this.state.name}/>
        <Cohort cohort={this.state.cohort}/>
        <Address address={this.state.address}/>
        <Car car={this.state.car}/>
        <Pet pet={this.state.pet}/>
      </div>
    );
  }
}
export default App