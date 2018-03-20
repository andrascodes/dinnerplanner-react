import React from 'react';

import './Recipe.css';

const Recipe = ({ name, image, preparation }) => {
  return (
    <div className="Recipe">
      <div className="RecipeNameAndImageContainer">
        <img src={image} alt={name} className="RecipeImage"/>
        <div className="RecipeName">
          {name}
        </div>
      </div>

      <div className="RecipePreparation">
        {preparation}
      </div>
    </div>
  );
};

export default Recipe;