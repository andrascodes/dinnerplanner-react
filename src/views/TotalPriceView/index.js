import React from 'react';

import { TotalPrice } from '../../components';

const TotalPriceView = (props) => {
  return (
    <div className="TotalPriceView">
      <TotalPrice 
        {...props}
      />
    </div>
  );
};

export default TotalPriceView;