import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TotalPrice.css'

import FlatButton from 'material-ui/FlatButton';
import Carousel from 'nuka-carousel';

import DishThumbnail from '../DishThumbnail';
import AppBarWithBackButton from '../AppBarWithBackButton';

import ROUTES from '../../utils/routes';
import trimNumber from '../../utils/trimNumber';

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

  calculateSlidesToShow = (menuLength) => {
    if(menuLength < 3) {
      return menuLength;
    }
    else {
      return 3;
    }
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
            slidesToShow={this.calculateSlidesToShow(this.props.menu.length)}
            slidesToScroll={'auto'}
          >
            {
              this.props.menu.map(dish => (
                <div className="CarouselItem" key={`dish-${dish.id}`}>
                  <DishThumbnail 
                    {...dish}
                  />
                </div>
              ))
            }   
          </Carousel>
        </div>

        <div className="TotalPriceFooterBar">
          <h1>
            {`Total Price:`}
            <span className="TotalPriceValue">
              {
                ` ${
                    trimNumber(this.props.menu.reduce((acc, curr) => (
                      acc += this.props.numberOfGuests* curr.price
                    ), 0), 2)
                  } `
              }
            </span> 
            {/* <span className="TotalPriceCurrency">{`SEK`}</span> */}
          </h1>
        </div>
      </div>
    );
  }
}

export default TotalPrice;