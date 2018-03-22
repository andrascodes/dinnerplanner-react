import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import DishThumbnail from '../DishThumbnail';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

import ROUTES from '../../utils/routes';

import './DishSearch.css';

const dishTypes = [
  { text: 'All', value: 'all' },
  { text: 'Appetizer', value: 'appetizer' },
  { text: 'Main Course', value: 'main course' },
  { text: 'Side Dish', value: 'side dish' },
  { text: 'Dessert', value: 'dessert' },
  { text: 'Salad', value: 'salad' },
  { text: 'Bread', value: 'bread' },
  { text: 'Breakfast', value: 'breakfast' },
  { text: 'Soup', value: 'soup' },
  { text: 'Beverage', value: 'beverage' },
  { text: 'Sauce', value: 'sauce' },
  { text: 'Drink', value: 'drink' },
];

class DishSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      errorMessage: undefined
    }
  }

  componentDidMount() {
    if(this.props.dishes === undefined) {
      this.handleSearch();
    }
  }

  handleSearch = (searchFilter, selectedType) => {
    this.setState({ loading: true });
    this.props.fetchAllDishes(searchFilter, selectedType)
      .then(dishes => {
        this.setState({ loading: false });
        this.props.onFetchAllDishesResponse(dishes);
      })
      .catch(error => this.setState({ error: true, errorMessage: error.message }))
  }

  handleSearchButtonClick = () => {
    this.handleSearch(this.props.searchFilter, this.props.selectedType);
  }

  renderDishSearch = ({ 
    dishes, onSearchFieldChange, searchFilter, onTypeSelection, selectedType,
    loading, error, errorMessage
  }) => {
    if(error === true) {
      return <ErrorMessage message={errorMessage} />;
    }
    else if(loading === true || dishes === undefined) {
      return <Loading />;
    }
    else {
      return (
        <Fragment>
          <div className="SearchInputGroup">
            <TextField
              floatingLabelText="Enter keywords"
              onChange={onSearchFieldChange}
              value={searchFilter}
            />
  
            <SelectField
              hintText="Select a type"
              onChange={onTypeSelection}
              value={selectedType}
            >
              {dishTypes.map(({ text, value }) => (
                <MenuItem
                  key={value}
                  insetChildren={true}
                  value={value}
                  primaryText={text}
                />
              ))}
            </SelectField>
  
            <RaisedButton label="Search" onClick={this.handleSearchButtonClick}/>
  
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

  render() {
    return (
      <div className="DishSearch">
        <AppBar
          title="Find a dish"
          showMenuIconButton={false}
        />
        {this.renderDishSearch({
          ...this.props,
          ...this.state
        })}
      </div>
    );
  }
}

export default DishSearch;