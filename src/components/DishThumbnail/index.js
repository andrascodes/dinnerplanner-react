import React, { Component } from 'react';

import { GridTile } from 'material-ui/GridList';

import './DishThumbnail.css'

class DishThumbnail extends Component {
  render() {
    return (
      <div className="DishThumbnail">
        <GridTile
          key={'123'}
          title={'Hello GridTile'}
          subtitle={<span>by <b>a Chef</b></span>}
          actionIcon={<div className="DishThumbnailPrice">{89.99}</div>}
        >
          <img src={'https://spoonacular.com/cdn/ingredients_100x100/blue-cheese.png'} alt={'Dish'}/>
        </GridTile>
      </div>
    );
  }
}

export default DishThumbnail;