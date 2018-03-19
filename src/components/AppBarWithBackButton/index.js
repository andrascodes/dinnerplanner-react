import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';

class AppBarWithBackButton extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    return (
      <AppBar
        title={this.props.title}
        iconElementLeft={
          <IconButton>
            <NavigationChevronLeft/>
          </IconButton>
        }
        onLeftIconButtonClick={this.context.router.history.goBack}
        {...this.props}
      />
    );
  }
}

export default AppBarWithBackButton;