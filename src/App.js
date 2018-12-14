import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
    showBurger: {},
    again: ''
  }

  onBurgerSelect = (burger) => {
    this.setState({
      showBurger: burger
    })
  }

  changey = (burger, e) => {
    fetch('http://localhost:3001/burgers/' + burger.id, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({category: e.target.value})
    }).then(r => this.setState({
      again: ''
    }))
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer onBurgerSelect={this.onBurgerSelect} />
        <BurgerDisplay burger={this.state.showBurger} changey={this.changey} />
      </div>
    );
  }
}

export default App;
