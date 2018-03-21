import React, { Component } from 'react';

import './DinnerPlanner.css';

import {
  Sidebar,
  DishSearch,
  DishDetails
} from '../../components';

const renderView = (
  selectedDishId, { 
    fetchDish, numberOfGuests, onAddToMenuButtonClick,
    dishes, fetchAllDishes, onFetchAllDishesResponse,
  }
) => {

  if(selectedDishId === undefined) {
    return (
      <DishSearch 
        dishes={dishes}
        fetchAllDishes={fetchAllDishes}
        onFetchAllDishesResponse={onFetchAllDishesResponse}
      />
    );
  }
  else {
    return (
      <DishDetails 
        dishId={selectedDishId}
        fetchDish={fetchDish}
        numberOfGuests={numberOfGuests}
        onAddToMenuButtonClick={onAddToMenuButtonClick}
      />
    );
  }
};

const DinnerPlannerView = props => {

  const { 
    numberOfGuests, menu, dishes,
    onNumberOfGuestsChange, onNumberOfGuestsIncrement,
  } = props;

  return (
    <div className="DinnerPlannerView">
      <Sidebar 
        numberOfGuests={numberOfGuests} 
        menu={menu}
        onNumberOfGuestsChange={onNumberOfGuestsChange}
        onNumberOfGuestsIncrease={onNumberOfGuestsIncrement(1)} 
        onNumberOfGuestsDecrease={onNumberOfGuestsIncrement(-1)} 
      />
      { renderView(props.match.params.id, props) }
    </div>
  );
};

export default DinnerPlannerView;