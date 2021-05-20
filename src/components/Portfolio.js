import React from 'react';
import scorganizer from '../scorganizer.png';
import survey from '../survey.png';
import trip from '../trip.png';
/* eslint-disable */

function Portfolio() {
  return (
    <div className='portfolio-wraper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py5'>portfolio</h1>
        <div className='image-box-wraper row justify-content-center'>
          <img
            className='portfolio-image'
            src={scorganizer}
            alt='organizer...'
          />
        </div>
        {/*-*/}
        <div className='image-box-wraper row justify-content-center'>
          <img
            className='portfolio-image'
            src={survey}
            alt='survey-form...'
          />
        </div>
        {/*-*/}
        <div className='image-box-wraper row justify-content-center'>
          <img
            className='portfolio-image'
            src={trip}
            alt='trip-website...'
          />
        </div>
        {/*-*/}
      </div>
    </div>
  );
}

export default Portfolio;
