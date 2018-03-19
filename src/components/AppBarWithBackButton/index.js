import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';

const AppBarWithBackButton = ({ title, onBackButtonClick }) => {
  return (
    <AppBar
      title={title}
      iconElementLeft={
        <IconButton>
          <NavigationChevronLeft/>
        </IconButton>
      }
      onLeftIconButtonClick={onBackButtonClick}
    />
  );
};

export default AppBarWithBackButton;