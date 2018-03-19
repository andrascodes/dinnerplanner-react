import React from 'react';

import './DishDetailsView.css'

import {
  Sidebar,
  DishDetails
} from '../../components/';

const DishDetailsView = ({ numberOfGuests, getDish }) => {
  return (
    <div className="DishDetailsView">
      <Sidebar numberOfGuests={numberOfGuests} />
      <DishDetails getDish={getDish} dishId={'id'} />
    </div>
  );
};

export default DishDetailsView;