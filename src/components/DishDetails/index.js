import React from 'react';

import './DishDetails.css';

import AppBar from 'material-ui/AppBar';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Loading from '../Loading';

const renderDishDetails = (dish) => {
  if(dish === undefined) {
    return <Loading />
  }
  else {
    return (
      <div className="DishDetailsContent">
        {/* <Card className="DishImageCard">
          <CardMedia>
            <img src={dish.image} alt={dish.name} />
          </CardMedia>
        </Card> */}
        <div className="DishImageAndIngredientsContainer">
          <img className="DishImage" src={dish.image} alt={dish.name} />
          <Card className="DishIngredientsCard">
            <CardTitle title="Ingredients" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <FlatButton label="Add To Menu" />
            </CardActions>
          </Card>
        </div>

        <Card className="DishPreparationCard">
          <CardTitle title="Preparation" />
          <CardText>
            {dish.preparation}
          </CardText>
        </Card>
      </div>  
    );
  }
};

const DishDetails = ({ dish }) => (
  <div className="DishDetails">
    <AppBar
      title={dish ? dish.name : 'Loading dish...'}
      showMenuIconButton={false}
    />
    {renderDishDetails(dish)}
  </div>
);

export default DishDetails;