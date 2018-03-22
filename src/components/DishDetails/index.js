import React, { Component } from 'react';

import './DishDetails.css';

import AppBarWithBackButton from '../AppBarWithBackButton';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

import trimNumber from '../../utils/trimNumber';

class DishDetails extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dish: undefined,
      open: true,
      error: false,
      errorMessage: undefined
    }
  }

  componentDidMount() {
    this.props.fetchDish(this.props.dishId)
      .then(dish => this.setState({ dish }))
      .catch(error => this.setState({ error: true, errorMessage: error.message }))
  }

  renderDishDetails = ({dish, numberOfGuests, onAddToMenuButtonClick, error, errorMessage}) => {
    if(error === true) {
      return <ErrorMessage message={errorMessage} />;
    }
    else if(dish === undefined) {
      return <Loading />;
    }
    else {
      const alignRight = {'textAlign': 'right' };

      return (
        <div className="DishDetailsContent">
          <div className="DishImageAndIngredientsContainer">
            <div className="DishImage" style={{
              backgroundImage: `url(${dish.image})`
            }} />
            <Card className="DishIngredientsCard">
              <CardTitle title="Ingredients" />
              <CardText>
                <Table
                  fixedHeader={true}
                  fixedFooter={true}
                  selectable={false}
                  multiSelectable={false}
                >
                  <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                  >
                    <TableRow>
                      <TableHeaderColumn>
                        Amount
                      </TableHeaderColumn>
                      <TableHeaderColumn style={alignRight}>
                        Ingredient
                      </TableHeaderColumn>
                    </TableRow>
                  </TableHeader>

                  <TableBody
                    displayRowCheckbox={false}
                  >
                    {
                      dish.ingredients.map(({ name, amount, unit }, index) => (
                        <TableRow key={`${name}-${index}`}>
                          <TableRowColumn>{`${trimNumber(numberOfGuests * amount, 2)} ${unit}`}</TableRowColumn>
                          <TableRowColumn style={alignRight}>
                            {name}
                          </TableRowColumn>
                        </TableRow>
                      ))
                    }
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableRowColumn>Total Price:</TableRowColumn>
                      <TableRowColumn>{trimNumber(numberOfGuests * dish.price, 2)}</TableRowColumn>
                    </TableRow>
                  </TableFooter>
                </Table>
              </CardText>
              <CardActions>
                <div className="AddToMenuButtonContainer">
                  <RaisedButton 
                    label="Add To Menu" 
                    primary={true}
                    onClick={onAddToMenuButtonClick(dish)}
                  />
                </div>
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
        {
          this.renderDishDetails({
            dish: this.state.dish, 
            numberOfGuests: this.props.numberOfGuests, 
            onAddToMenuButtonClick: this.props.onAddToMenuButtonClick,
            error: this.state.error,
            errorMessage: this.state.errorMessage
          })
        }
      </div>
    );
  }
}

export default DishDetails;