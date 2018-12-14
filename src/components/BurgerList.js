import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

class BurgerList extends Component {

  state = {
    burgers: [],
    newBurgers: []
  }

  deleteThisGuy = (e) => {
    let newB = this.state.burgers
    this.setState({
      burgers: newB.filter(burger => burger !== e)
    })
  }

  componentDidMount() {
    fetch('http://localhost:3001/burgers').then(r => r.json()).then(burgerss => this.setState({
      burgers: burgerss
    }))
  }
  render() {
  let burg
  if (this.props.sort === "All") {
    burg = this.state.burgers.map(burger => <BurgerItem burger={burger} changeList={this.props.changeList} deleteThisGuy={this.deleteThisGuy} onBurgerSelect={this.props.onBurgerSelect} />)
  } else if (this.props.sort === "Relatable") {
    burg = this.state.burgers.filter(burger => burger.category === "Relatable").map(burger => <BurgerItem burger={burger} changeList={this.props.changeList} deleteThisGuy={this.deleteThisGuy} onBurgerSelect={this.props.onBurgerSelect} />)
  } else if (this.props.sort === "Bougie") {
    burg = this.state.burgers.filter(burger => burger.category === "Bougie").map(burger => <BurgerItem burger={burger} changeList={this.props.changeList} deleteThisGuy={this.deleteThisGuy} onBurgerSelect={this.props.onBurgerSelect} />)
  }
  return (
    <div className="BurgerList">
      { burg }
    </div>
  )}
}

export default BurgerList
