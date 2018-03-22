import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

import {
  Header
} from './components';

import {
  WelcomeView,
  DinnerPlannerView,
  TotalPriceView,
  RecipesView
} from './views';

import createDinnerAPI from './lib/DinnerAPI';
import createStorageAPI from './lib/StorageAPI';
import ROUTES from './utils/routes';

const DinnerAPI = createDinnerAPI(fetch);
const StorageAPI = createStorageAPI(window.localStorage);

class App extends Component {
  
  state = {
    initialState: true,
    numberOfGuests: 1,
    selectedType: 'all',
    searchFilter: '',
    menu: [],
    dishes: undefined,
    showDishNotification: false,
    dishNotificationMessage: ''
  }

  fetchAllDishes = DinnerAPI.fetchAllDishes
  fetchDish = DinnerAPI.fetchDish

  saveMenu = StorageAPI.saveMenu
  loadMenu = StorageAPI.loadMenu
  saveNumberOfGuests = StorageAPI.saveNumberOfGuests
  loadNumberOfGuests = StorageAPI.loadNumberOfGuests

  componentDidMount() {
    const menu = this.loadMenu();
    const numberOfGuests = this.loadNumberOfGuests();

    const newState = {};
    if(menu !== null) {
      newState.menu = menu;
      newState.initialState = false;
    }
    if(numberOfGuests !== null) {
      newState.numberOfGuests = numberOfGuests;
      newState.initialState = false;
    }

    this.setState(newState);
  }

  handleFetchAllDishesResponse = (dishes) => {
    this.setState({
      dishes
    });
  }

  handleTypeSelection = (event, newValueIndex, newValue) => {
    this.setState({ selectedType: newValue });
  }

  handleSearchFieldChange = (event, newValue) => {
    this.setState({ searchFilter: newValue })
  }

  handleAddToMenuButtonClick = (dish) => () => {
    if(this.state.menu.some(dishInMenu => dishInMenu.id === dish.id) === false) {
      const newMenu = this.state.menu.slice();
      newMenu.push(dish);
      this.saveMenu(newMenu);
      this.setState({
        menu: newMenu,
        showDishNotification: true,
        dishNotificationMessage: `'${dish.name}' added to the Menu`,
      });
    }
    else {
      this.setState({
        showDishNotification: true,
        dishNotificationMessage: `Dish is already on the Menu`
      });
    }
  }

  handleDeleteMenuItemClick = (id) => () => {
    const newMenu = this.state.menu.filter(dish => dish.id !== id);
    this.saveMenu(newMenu);
    this.setState(state => ({
      menu: newMenu,
      showDishNotification: true,
      dishNotificationMessage: `'${state.menu.find(dish => dish.id === id).name}' 
                                  was deleted from the Menu`,
    }));
  }

  handleDishAddedNotificationClose = () => {
    this.setState({
      showDishNotification: false,
      dishNotificationMessage: ''
    });
  }

  changeNumberOfGuests = (newNumberOfGuests, incrementBy) => (state) => {
    const newState = {};
    if(incrementBy === undefined) {
      newState.numberOfGuests = newNumberOfGuests;
    }
    else {
      newState.numberOfGuests = state.numberOfGuests + incrementBy;
    }
    
    if(state.initialState === true) {
      newState.initialState = false;
    }
    this.saveNumberOfGuests(newState.numberOfGuests);
    return newState;
  }

  handleNumberOfGuestsChange = (event) => {
    event.persist();
    const isNum = /^\d+$/.test(event.target.value);
    if( event.target.value === '' || isNum ) {
      this.setState(this.changeNumberOfGuests(Number(event.target.value)));
    }
  }

  handleNumberOfGuestsIncrement = (byValue) => () => {
    if(byValue > 0 || this.state.numberOfGuests > 0) {
      this.setState(this.changeNumberOfGuests(undefined, byValue));
    }
  }

  renderWelcomeView = () => {
    if(this.state.initialState) {
      return <WelcomeView />;
    }
    else {
      return <Redirect to={ROUTES.search} />;
    }
  }

  renderDinnerPlannerView = props => (
    <DinnerPlannerView 
      numberOfGuests={this.state.numberOfGuests}
      menu={this.state.menu} 
      dishes={this.state.dishes}
      showDishNotification={this.state.showDishNotification}
      dishNotificationMessage={this.state.dishNotificationMessage}
      onDishAddedNotificationClose={this.handleDishAddedNotificationClose}
      onTypeSelection={this.handleTypeSelection}
      selectedType={this.state.selectedType}
      onSearchFieldChange={this.handleSearchFieldChange}
      searchFilter={this.state.searchFilter}
      onNumberOfGuestsChange={this.handleNumberOfGuestsChange} 
      onNumberOfGuestsIncrement={this.handleNumberOfGuestsIncrement}
      fetchAllDishes={this.fetchAllDishes}
      onFetchAllDishesResponse={this.handleFetchAllDishesResponse}
      fetchDish={this.fetchDish}
      onAddToMenuButtonClick={this.handleAddToMenuButtonClick}
      onDeleteMenuItemClick={this.handleDeleteMenuItemClick}
      {...props}
    />
  )

  renderTotalPriceView = props => (
    <TotalPriceView
      numberOfGuests={this.state.numberOfGuests}
      menu={this.state.menu}
      {...props}
    />
  )

  renderRecipesView = props => (
    <RecipesView 
      numberOfGuests={this.state.numberOfGuests}
      menu={this.state.menu}
      {...props}
    />
  )

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Router basename={process.env.PUBLIC_URL}>
            <Fragment>
              <Route exact path={ROUTES.root} render={this.renderWelcomeView}/>
              <Route exact path={ROUTES.total} render={this.renderTotalPriceView}/>
              <Route exact path={ROUTES.recipes} render={this.renderRecipesView}/>
              <Route exact path={ROUTES.search} render={this.renderDinnerPlannerView}/>
              <Route path={ROUTES.dish} render={this.renderDinnerPlannerView}/>
            </Fragment>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
