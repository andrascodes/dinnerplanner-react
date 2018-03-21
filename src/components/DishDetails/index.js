import React, { Component } from 'react';

import './DishDetails.css';

import AppBarWithBackButton from '../AppBarWithBackButton';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Loading from '../Loading';

class DishDetails extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dish: undefined
    }
  }

  componentDidMount() {
    this.props.fetchDish(this.props.dishId)
        .then(dish => this.setState({ dish }))
  }

  renderDishDetails = dish => {
    if(dish === undefined) {
      return <Loading />;
    }
    else {
      return (
        <div className="DishDetailsContent">
          <div className="DishImageAndIngredientsContainer">
            {/* <img className="DishImage" src={dish.image} alt={dish.name} /> */}
            <div className="DishImage" style={{
              backgroundImage: `url(${dish.image})`
            }} />
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
  }
  
  render() {
    return (
      <div className="DishDetails">
        <AppBarWithBackButton
          title={(this.state.dish !== undefined) ? this.state.dish.name : 'Loading dish...'}
        />
        {this.renderDishDetails(this.state.dish)}
      </div>
    );
  }
}

export default DishDetails;