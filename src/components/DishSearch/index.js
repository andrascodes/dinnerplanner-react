import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import ReactLoading from 'react-loading';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import DishThumbnail from '../DishThumbnail';

import ROUTES from '../../utils/routes';

import './DishSearch.css';

const renderDishSearch = (dishes) => {
  if(dishes === undefined) {
    return (
      <div className="Loading">
        <ReactLoading type={'spin'} color={'black'} height='150px' width='150px' />
      </div>
    )
  }
  else {
    return (
      <Fragment>
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
          {
            dishes.map(dish => (
              <Link key={`thumbnail-${dish.id}`} to={ROUTES.dishWithId(dish.id)}>
                <DishThumbnail {...dish}/>
              </Link>
            ))
          }          
        </div>

      </Fragment>
    );
  }
}

const DishSearch = ({ dishes }) => (
  <div className="DishSearch">
    <AppBar
      title="Find a dish"
      showMenuIconButton={false}
    />
    {renderDishSearch(dishes)}
  </div>
)

export default DishSearch;