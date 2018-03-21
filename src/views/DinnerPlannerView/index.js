import React, { Component } from 'react';

import './DinnerPlanner.css';

import Snackbar from 'material-ui/Snackbar';

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
    showDishAddedNotification, dishAddedNotificationMessage, onDishAddedNotificationClose,
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
      <Snackbar
        open={showDishAddedNotification}
        message={dishAddedNotificationMessage}
        autoHideDuration={3000}
        onRequestClose={onDishAddedNotificationClose}
      />
    </div>
  );
};

export default DinnerPlannerView;