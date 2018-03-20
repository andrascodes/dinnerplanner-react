import React from 'react';

import { GridTile } from 'material-ui/GridList';

import './DishThumbnail.css'

const DishThumbnail = ({ id, name, image }) => (
  <div className="DishThumbnail">
    <GridTile
      key={`dish-${id}`}
      title={name}
      subtitle={<span>by <b>a Chef</b></span>}
      actionIcon={<div className="DishThumbnailPrice">{89.99}</div>}
    >
      <img src={image} alt={`${name}`}/>
    </GridTile>
  </div>
);

export default DishThumbnail;