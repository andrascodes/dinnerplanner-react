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
import ROUTES from './utils/routes';

class App extends Component {
  
  state = {
    initialState: true,
    numberOfGuests: 1,
    menu: [{
      "id": 491119,
      "name": "{Cookies -n- Cream Cupcakes}",
      "image": "https://spoonacular.com/recipeImages/491119-556x370.jpg",
      "preparation": "Mix the cake mix according to the package directions. Place 1 Tablespoon cake batter in the bottom of 24 cupcake liners. Place a cookie in the liner and cover with enough batter to fill the liners 3/4 full. Bake at 350* for 18 minutes. Let cool completely.Beat together the butter, shortening, salt, water, and vanilla until creamy. Slowly add the powdered sugar. Crush the remaining chocolate cookies. Remove 2 cups of the frosting and add the crushed cookies to that. Use a melon scooper to remove the center of each cupcake. Fill with the cookies and cream frosting.Swirl the vanilla frosting on top of all the cupcakes. Place cupcakes in freezer for 30 minutes. While they are chilling, scoop all the chocolate canned frosting into a microwave safe bowl and heat until slightly runny. (I did 30 seconds at a time and then stirred.) Repeat until the frosting is ready. Remove cupcakes from freezer and dip the top of the butter cream into the heated frosting. Carefully let the excess drip off, then top with sprinkles and let set. Makes 24 cupcakes."
    }],
    selectedDish: undefined,
    loading: false,
  }

  getAllDish = createDinnerAPI(fetch).getAllDish
  // TODO: implement getDIsh
  getDish = createDinnerAPI(fetch).getAllDish

  componentDidMount() {
    // TODO: use localStorage to load the state
    // change loading state
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
              <Route exact path={ROUTES.root} render={this.renderWelcomeView}/>
              <Route exact path={ROUTES.total} render={this.renderTotalPriceView}/>
              <Route exact path={ROUTES.recipes} render={this.renderRecipesView}/>
              <Route exact path={ROUTES.search} render={this.renderDishSearchView}/>
              <Route path={ROUTES.dish} render={this.renderDishDetailsView}/>
            </Fragment>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
