import React from 'react';

import './DishDetails.css';

import AppBar from 'material-ui/AppBar';

const DishDetails = (props) => {
  console.log(props.match.params.id)
  return (
    <div className="DishDetails">
      <AppBar
        title="Kale and Quinoa Salad with Black Beans"
        showMenuIconButton={false}
      />
    </div>
  );
};

export default DishDetails;