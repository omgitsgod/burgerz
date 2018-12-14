import React, { Component } from 'react';

class BurgerFilter extends Component {
  render() {
  return (
    <div className="BurgerFilter">
      <select onChange={this.props.changeList}>
        <option value="All">All</option>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )}
}

export default BurgerFilter
