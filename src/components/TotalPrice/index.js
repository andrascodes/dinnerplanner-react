import React from 'react';

import AppBarWithBackButton from '../AppBarWithBackButton';

const TotalPrice = ({ numberOfGuests }) => {
  return (
    <div className="TotalPrice">
      <AppBarWithBackButton
        title={`My Dinner: ${numberOfGuests} people`}
      />
    </div>
  );
};

export default TotalPrice;