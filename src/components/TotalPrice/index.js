import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TotalPrice.css'

import FlatButton from 'material-ui/FlatButton';
import Carousel from 'nuka-carousel';

import DishThumbnail from '../DishThumbnail';
import AppBarWithBackButton from '../AppBarWithBackButton';

import ROUTES from '../../utils/routes';

class TotalPrice extends Component {

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
  }

  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="TotalPrice">
        <AppBarWithBackButton
          title={`My Dinner: ${this.props.numberOfGuests} people`}
          iconElementRight={<FlatButton label="Print Recipes" />}
          onRightIconButtonClick={() => this.context.router.history.push(ROUTES.recipes)}
        />
        
        <div className="TotalPriceContent">
          <Carousel
            slidesToShow={1}
            slidesToScroll={'auto'}
          >
            {
              this.props.menu.map(dish => (
                <DishThumbnail key={dish}/>
              ))
            }   
          </Carousel>
        </div>

        <div className="TotalPriceFooterBar">
          <h1>
            {`Total Price:`}
            <span className="TotalPriceValue">{` 89.06 `}</span> 
            <span className="TotalPriceCurrency">{`SEK`}</span>
          </h1>
        </div>
      </div>
    );
  }
}

export default TotalPrice;