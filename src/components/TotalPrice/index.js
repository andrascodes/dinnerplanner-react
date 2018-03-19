import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';

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
    return (
      <div className="TotalPrice">
        <AppBarWithBackButton
          title={`My Dinner: ${this.props.numberOfGuests} people`}
          iconElementRight={<FlatButton label="Print Recipes" />}
          onRightIconButtonClick={() => this.context.router.history.push(ROUTES.recipes)}
        />
      </div>
    );
  }
}

export default TotalPrice;