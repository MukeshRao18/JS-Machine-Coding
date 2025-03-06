import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className='progress-container'>
      <div className='outer-div'>
        <div className='inner-div' style={{ transform:`translateX(${progress-100}%)`}} />
      </div>
    </div>
  );
};

export default ProgressBar;
