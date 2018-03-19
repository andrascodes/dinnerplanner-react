import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

import {
  Header
} from './components';

import {
  WelcomeView,
  DishSearchView,
  DishDetailsView,
  TotalPriceView,
  RecipesView
} from './views';

import createDinnerAPI from './lib/DinnerAPI';

class App extends Component {
  
  state = {
    initialState: true,
    numberOfGuests: 1,
    menu: [],
    selectedDish: undefined,
  }

  getAllDish = createDinnerAPI(fetch).getAllDish
  // TODO: implement getDIsh
  getDish = createDinnerAPI(fetch).getAllDish

  componentDidMount() {
    // TODO: use localStorage to load the state
  }

  changeNumberOfGuests = (newNumberOfGuests, incrementBy) => (state) => {
    const newState = {};
    if(incrementBy === undefined) {
      newState.numberOfGuests = newNumberOfGuests;
    }
    else {
      newState.numberOfGuests = state.newNumberOfGuests + incrementBy;
    }
    
    if(state.initialState === true) {
      newState.initialState = false;
    }
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
      return <Redirect to="/search" />;
    }
  }

  renderTotalPriceView = props => (
    <TotalPriceView
      numberOfGuests={this.state.numberOfGuests}
      {...props}
    />
  )

  renderRecipesView = props => (
    <RecipesView 
      numberOfGuests={this.state.numberOfGuests}
      {...props}
    />
  )

  renderDishSearchView = props => (
    <DishSearchView 
      numberOfGuests={this.state.numberOfGuests}
      menu={this.state.menu} 
      onNumberOfGuestsChange={this.handleNumberOfGuestsChange} 
      onNumberOfGuestsIncrement={this.handleNumberOfGuestsIncrement}
      getAllDish={this.getAllDish}
      {...props}
    />
  )

  renderDishDetailsView = props => (
    <DishDetailsView 
      numberOfGuests={this.state.numberOfGuests}
      getDish={this.getDish}
      {...props}
    />
  )

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Router>
            <Fragment>
              <Route exact path="/" render={this.renderWelcomeView}/>
              <Route exact path="/total" render={this.renderTotalPriceView}/>
              <Route exact path="/recipes" render={this.renderRecipesView}/>
              <Route exact path="/search" render={this.renderDishSearchView}/>
              <Route path="/search/:id" render={this.renderDishDetailsView}/>
            </Fragment>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
