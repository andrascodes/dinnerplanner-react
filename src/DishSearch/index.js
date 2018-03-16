import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

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

        <div className="SearchResults">
          
        </div>

      </div>
    );
  }
}

export default DishSearch;