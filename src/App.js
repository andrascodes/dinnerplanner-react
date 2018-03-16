import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

  handleNumberOfGuestsChange = (event) => {
    event.persist();
    const isNum = /^\d+$/.test(event.target.value);
    if( event.target.value === '' || isNum ) {
      this.setState({
        numberOfGuests: Number(event.target.value)
      });
    }
  }

  handleNumberOfGuestsIncrement = (value) => () => {
    if(value > 0 || this.state.numberOfGuests > 0) {
      this.setState(state => ({
        numberOfGuests: state.numberOfGuests + value,
      }))
    }
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
      <Sidebar 
        numberOfGuests={this.state.numberOfGuests} 
        menu={this.state.menu}
        onNumberOfGuestsChange={this.handleNumberOfGuestsChange}
        onNumberOfGuestsIncrease={this.handleNumberOfGuestsIncrement(1)} 
        onNumberOfGuestsDecrease={this.handleNumberOfGuestsIncrement(-1)} 
      />
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
      <MuiThemeProvider>
        <Router>
          <Fragment>
            <Route exact path="/" render={this.renderWelcomeView}/>
            <Route exact path="/total" render={this.renderTotalPriceView}/>
            <Route exact path="/recipes" render={this.renderRecipesView}/>
            <Route exact path="/search" render={this.renderDishSearchView}/>
            <Route path="/search/:id" render={this.renderDishDetails}/>
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
