import React, { Component } from 'react';

import './DishSearch.css'

class DishSearch extends Component {
  
  state = {
    dishes: undefined
  }

  getAllDish = this.props.getAllDish

  componentDidMount() {
    // TODO: call this.getAllDish and set the state.dishes to the result
  }
  
  render() {
    return (
      <div>
        <h3>This is the DishSearch</h3>
      </div>
    );
  }
}

export default DishSearch;