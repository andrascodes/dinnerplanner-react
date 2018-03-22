import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';

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

  calculateSlidesToShow = (menuLength, maxLength) => {
    if(menuLength === 0) {
      return 1;
    }
    else if(menuLength < 3) {
      return menuLength;
    }
    else {
      return maxLength;
    }
  }

  renderCarousel = ({ slidesToShow, menu }) => () => {
    return (
      <Carousel
        slidesToShow={slidesToShow}
        slidesToScroll={'auto'}
      >
        {
          menu.map(dish => (
            <div className="CarouselItem" key={`dish-${dish.id}`}>
              <DishThumbnail 
                {...dish}
              />
            </div>
          ))
        }   
      </Carousel>
    );
  }

  render() {

    const { menu, numberOfGuests } = this.props;

    return (
      <div className="TotalPrice">
        <AppBarWithBackButton
          title={`My Dinner: ${numberOfGuests} people`}
          iconElementRight={<FlatButton label="Print Recipes" />}
          onRightIconButtonClick={() => this.context.router.history.push(ROUTES.recipes)}
        />
        
        <div className="TotalPriceContent">
          <Media
            query="(min-width: 941px)"
            render={this.renderCarousel({ 
              slidesToShow: this.calculateSlidesToShow(menu, 3), menu: menu 
            })}
          />
          <Media
            query="(max-width: 940px) and (min-width: 630px)"
            render={this.renderCarousel({ 
              slidesToShow: this.calculateSlidesToShow(menu, 2), menu: menu 
            })}
          />
          <Media
            query="(max-width: 629px)"
            render={this.renderCarousel({ 
              slidesToShow: 1, menu: menu 
            })}
          />
        </div>

        <div className="TotalPriceFooterBar">
          <h1>
            {`Total Price:`}
            <span className="TotalPriceValue">
              {
                ` ${
                    trimNumber(menu.reduce((acc, curr) => (
                      acc += numberOfGuests * curr.price
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