import React from 'react';

import { Recipes } from '../../components'

const RecipesView = ({ numberOfGuests }) => {
  return (
    <div className="RecipesView">
      <Recipes 
        numberOfGuests={numberOfGuests}
      />
    </div>
  );
};

export default RecipesView;