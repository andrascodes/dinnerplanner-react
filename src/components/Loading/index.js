import React from 'react';

import CircularProgress from 'material-ui/CircularProgress';

import './Loading.css';

const Loading = () => {
  return (
    <div className="Loading">
      <CircularProgress size={150} thickness={5} />
    </div>
  );
};

export default Loading;