import React from 'react';
import StepCard from '../StepCard';
import cardStyles from '../StepCard.css'

export default StepCard(() => {
  return <div>
    <div className={cardStyles.label}>
      Thank you!
    </div>
  </div>;
});
