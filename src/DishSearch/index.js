import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import './DishSearch.css'

class DishSearch extends Component {
  
  state = {
    dishes: undefined
  }

  getAllDish = this.props.getAllDish

  componentDidMount() {
    // TODO: call this.getAllDish and set the state.dishes to the result
  }
  
  render() {
    return (
      <div className="DishSearch">
        <AppBar
          title="Find a dish"
          showMenuIconButton={false}
        />

        <div className="SearchInputGroup">
          <TextField
            floatingLabelText="Enter keywords"
          />

          <SelectField
            multiple={true}
            hintText="Select a type"
          >
            {['All', 'Starter', 'Main Course', 'Dessert'].map(type => (
              <MenuItem
                key={type}
                insetChildren={true}
                value={type}
                primaryText={type}
              />
            ))}
          </SelectField>

          <RaisedButton label="Search"/>

        </div>

        <div className="SearchResultsGallery">
          <div className="DishThumbnail">
            <GridTile
              key={'123'}
              title={'Hello GridTile'}
              subtitle={<span>by <b>a Chef</b></span>}
            >
              <img src={'https://spoonacular.com/cdn/ingredients_100x100/blue-cheese.png'} />
            </GridTile>
          </div>

          <div className="DishThumbnail">
            <GridTile
              key={'123'}
              title={'Hello GridTile'}
              subtitle={<span>by <b>a Chef</b></span>}
            >
              <img src={'https://spoonacular.com/cdn/ingredients_100x100/blue-cheese.png'} />
            </GridTile>
          </div>

          <div className="DishThumbnail">
            <GridTile
              key={'123'}
              title={'Hello GridTile'}
              subtitle={<span>by <b>a Chef</b></span>}
            >
              <img src={'https://spoonacular.com/cdn/ingredients_100x100/blue-cheese.png'} />
            </GridTile>
          </div>


          <div className="DishThumbnail">
            <GridTile
              key={'123'}
              title={'Hello GridTile'}
              subtitle={<span>by <b>a Chef</b></span>}
            >
              <img src={'https://spoonacular.com/cdn/ingredients_100x100/blue-cheese.png'} />
            </GridTile>
          </div>


          <div className="DishThumbnail">
            <GridTile
              key={'123'}
              title={'Hello GridTile'}
              subtitle={<span>by <b>a Chef</b></span>}
            >
              <img src={'https://spoonacular.com/cdn/ingredients_100x100/blue-cheese.png'} />
            </GridTile>
          </div>
          
        </div>

      </div>
    );
  }
}

export default DishSearch;