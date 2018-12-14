import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  state = {
    sort: 'All'
  }

  changeList = (e) => {
    this.setState({
      sort: e.target.value
    })
  }

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter changeList={this.changeList} />
        <BurgerList changeList={this.changeList} onBurgerSelect={this.props.onBurgerSelect} sort={this.state.sort} />
      </div>
    )
  }
}
