import React, { Component } from 'react';

class BurgerDisplay extends Component {
  render() {
  return (
    <div className="BurgerDisplay">
      <img src={this.props.burger.imgURL}/>
      <br/>
      <h1>{this.props.burger.name}</h1>
      <br/>
      <select value={this.props.burger.category} onChange={(e) => this.props.changey(this.props.burger, e)}>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )}
}

export default BurgerDisplay
