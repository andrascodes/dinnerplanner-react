import React from 'react';

import { Recipes } from '../../components'

const RecipesView = (props) => {
  return (
    <div className="RecipesView">
      <Recipes 
        {...props}
      />
    </div>
  );
};

export default RecipesView;