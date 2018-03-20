import React from 'react';

import AppBarWithBackButton from '../AppBarWithBackButton';
import Recipe from './Recipe';

import './Recipes.css';

const Recipes = ({ numberOfGuests, menu }) => {
  return (
    <div className="Recipes">
      <AppBarWithBackButton
        title={`My Dinner: ${numberOfGuests} people`}
      />

      <div className="RecipesContent">
        {
          menu.map(({ id, name, image, preparation }) => (
            <Recipe
              key={`recipe-${id}`}
              name={name}
              image={image}
              preparation={preparation}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Recipes;