import React from 'react';
import '../loading.css';

export const Loading = () => {
  return (
    <div className="looping-rhombuses-spinner">
      <div className="rhombus"></div>
      <div className="rhombus"></div>
      <div className="rhombus"></div>
    </div>
  );
};

