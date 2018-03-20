import React, { Component } from 'react';

import './DishDetailsView.css'

import {
  Sidebar,
  DishDetails
} from '../../components/';

class DishDetailsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDish: undefined
    }
  }

  componentDidMount() {
    if(this.state.selectedDish === undefined) {
      this.props.fetchDish(this.props.match.params.id)
        .then(dish => this.setState({ selectedDish: dish }))
    }    
  }

  render() {
    return (
      <div className="DishDetailsView">
        <Sidebar numberOfGuests={this.props.numberOfGuests} />
        <DishDetails dish={this.state.selectedDish}/>
      </div>
    );
  }
}

export default DishDetailsView;