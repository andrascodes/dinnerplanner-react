import React from 'react';

import './DishSearchView.css';

import {
  Sidebar,
  DishSearch
} from '../../components';

const DishSearchView = ({ 
  numberOfGuests, menu, 
  onNumberOfGuestsChange, onNumberOfGuestsIncrement,
  getAllDish 
}) => {
  return (
    <div className="DishSearchView">
      <Sidebar 
        numberOfGuests={numberOfGuests} 
        menu={menu}
        onNumberOfGuestsChange={onNumberOfGuestsChange}
        onNumberOfGuestsIncrease={onNumberOfGuestsIncrement(1)} 
        onNumberOfGuestsDecrease={onNumberOfGuestsIncrement(-1)} 
      />
      <DishSearch getAllDish={getAllDish} />
    </div>
  );
};

export default DishSearchView;