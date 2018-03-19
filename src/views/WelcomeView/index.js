import React from 'react';
import { Link } from 'react-router-dom';

import './WelcomeView.css';

import RaisedButton from 'material-ui/RaisedButton';

const WelcomeView = () => (
  <div className="WelcomeView">
    <p>
      Welcome to the DinnerPlanner!
    </p>
    <p>
      Click the button below to start planning your dinner!
    </p>
    
    <div className="StartButtonContainer">
      <Link to="/search">
        <RaisedButton label="Start planning" primary={true} />
      </Link>
    </div>
  </div>
);

export default WelcomeView;
