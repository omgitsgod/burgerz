import React, { Component } from 'react';

class BurgerItem extends Component {
  render() {
  return (
    <div>
      <div className="BurgerItem">
        { this.props.burger.name }
      </div>
      <div className="BurgerBottomBun">
        <button onClick={() => this.props.onBurgerSelect(this.props.burger)}>Show</button>
        <button onClick={() => this.props.deleteThisGuy(this.props.burger)}>Delete</button>
      </div>
    </div>
  )}
}

export default BurgerItem
