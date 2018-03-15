import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';

import Welcome from './Welcome';
import Sidebar from './Sidebar';
import DishSearch from './DishSearch';
import DishDetails from './DishDetails';
import TotalPrice from './TotalPrice';
import Recipes from './Recipes';

import createDinnerAPI from './lib/DinnerAPI';

class App extends Component {
  
  state = {
    numberOfGuests: 1,
    menu: [],
    selectedDish: undefined
  }

  getAllDish = createDinnerAPI(fetch).getAllDish
  // TODO: implement getDIsh
  getDish = createDinnerAPI(fetch).getAllDish

  componentDidMount() {
    // TODO: use localStorage to load the state
  }

  renderWelcomeView = () => {
    if(this.state.numberOfGuests === 1 && this.state.menu.length === 0) {
      return (
        <div className="WelcomeView">
          <Welcome />
        </div>
      )
    }
    else {
      return <Redirect to="/search"/>
    }
  }

  renderTotalPriceView = () => (
    <div className="TotalPriceView">
      <TotalPrice />
    </div>
  )

  renderRecipesView = () => (
    <div className="RecipesView">
      <Recipes />
    </div>
  )

  renderDishSearchView = () => (
    <div className="DishSearchView">
      <Sidebar numberOfGuests={this.state.numberOfGuests} menu={this.state.menu}/>
      <DishSearch getAllDish={this.getAllDish} />
    </div>
  )

  renderDishDetails = (props) => (
    <div className="DishSearchView">
      <Sidebar numberOfGuests={this.state.numberOfGuests}/>
      <DishDetails getDish={this.getDish} {...props}/>
    </div>
  )

  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" render={this.renderWelcomeView}/>
          <Route exact path="/total" render={this.renderTotalPriceView}/>
          <Route exact path="/recipes" render={this.renderRecipesView}/>
          <Route exact path="/search" render={this.renderDishSearchView}/>
          <Route path="/search/:id" render={this.renderDishDetails}/>
        </Fragment>
      </Router>
    );
  }
}

export default App;
