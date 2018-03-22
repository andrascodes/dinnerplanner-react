import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="ErrorMessage">
      {message}
    </div>
  );
};

export default ErrorMessage;