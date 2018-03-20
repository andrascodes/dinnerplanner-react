import React from 'react';

import ReactLoading from 'react-loading';

import './Loading.css';

const Loading = () => {
  return (
    <div className="Loading">
      <ReactLoading type={'spin'} color={'#00bcd4'} height='150px' width='150px' />
    </div>
  );
};

export default Loading;