import React from 'react';

import AppBarWithBackButton from '../AppBarWithBackButton';

const Recipes = ({ numberOfGuests }) => {
  return (
    <div className="Recipes">
      <AppBarWithBackButton
        title={`My Dinner: ${numberOfGuests} people`}
      />
    </div>
  );
};

export default Recipes;