import React from 'react';

import './ErrorMessage.css';

import ErrorIcon from 'material-ui/svg-icons/alert/error';
import { red500 } from 'material-ui/styles/colors';

const ErrorMessage = ({ message }) => {
  return (
    <div className="ErrorMessage">
      <div className="ErrorMessageContent">
        <ErrorIcon 
          style={{ height: "12rem", width: "12rem"}}
          color={red500}
        />
        <p>Something went wrong!</p>
        <div className="ErrorMessageText">
          {`Error message: ${message}`}
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;