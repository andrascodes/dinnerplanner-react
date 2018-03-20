import React from 'react';

import './DishDetailsView.css'

import {
  Sidebar,
  DishDetails
} from '../../components/';

const DishDetailsView = (props) => {
  return (
    <div className="DishDetailsView">
      <Sidebar numberOfGuests={props.numberOfGuests} />
      <DishDetails {...props}/>
    </div>
  );
};

export default DishDetailsView;