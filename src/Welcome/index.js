import React from 'react';
import { Link } from 'react-router-dom';

import './Welcome.css';

import RaisedButton from 'material-ui/RaisedButton';

import Header from '../Header'

const Welcome = () => (
  <div className="Welcome">
    <Header />
    
    <div className="WelcomeContent">
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
  </div>
);

export default Welcome;
