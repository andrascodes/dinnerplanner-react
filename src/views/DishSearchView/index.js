import React, { Component } from 'react';

import './DishSearchView.css';

import {
  Sidebar,
  DishSearch
} from '../../components';

class DishSearchView extends Component {

  componentDidMount() {
    if(this.props.dishes === undefined) {
      this.props.fetchAllDishes()
        .then(this.props.onFetchAllDishesResponse)
    }
  }

  render() {

    const { 
      numberOfGuests, menu, dishes,
      onNumberOfGuestsChange, onNumberOfGuestsIncrement,
    } = this.props;

    return (
      <div className="DishSearchView">
        <Sidebar 
          numberOfGuests={numberOfGuests} 
          menu={menu}
          onNumberOfGuestsChange={onNumberOfGuestsChange}
          onNumberOfGuestsIncrease={onNumberOfGuestsIncrement(1)} 
          onNumberOfGuestsDecrease={onNumberOfGuestsIncrement(-1)} 
        />
        <DishSearch dishes={dishes}/>
      </div>
    );
  }
}

export default DishSearchView;