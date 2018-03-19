import React from 'react';

// import './TotalPriceView.css';

import { TotalPrice } from '../../components';

const TotalPriceView = ({ numberOfGuests }) => {
  return (
    <div className="TotalPriceView">
      <TotalPrice 
        numberOfGuests={numberOfGuests}
      />
    </div>
  );
};

export default TotalPriceView;