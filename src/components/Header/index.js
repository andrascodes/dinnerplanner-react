import React from 'react';

import './Header.css'
import LogoSrc from '../../assets/images/logo.png';

const Header = () => {
  return (
    <div className="Header">
      <img className="HeaderLogo" src={LogoSrc} alt="Dinnerplanner logo"/>
      <div className="HeaderTitle">
        DinnerPlanner
      </div>
    </div>
  );
};

export default Header;