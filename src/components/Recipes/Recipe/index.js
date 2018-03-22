import React from 'react';

import './Recipe.css';

const Recipe = ({ name, image, preparation }) => {
  return (
    <div className="Recipe">
      <h2 className="RecipeName">
        {name}
      </h2>

      <div className="RecipeImageAndPreparationContainer">
        <div className="RecipeImageContainer">
          <img src={image} alt={name} className="RecipeImage"/>
        </div>

        <div className="RecipePreparation">
          <p>{preparation}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;