import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDesktop,
  faFileCode,
} from '@fortawesome/free-solid-svg-icons';
/* eslint-disable */

function Services() {
  return (
    <div className='services'>
      <h1 className='py-5'>my services</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon
                  className='icon'
                  icon={faFileCode}
                  size='2x'
                />
              </div>
              <h3>Web Development</h3>
              <p>I always use only new technologies in my workflow</p>
            </div>
          </div>
          {/* - */}
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon
                  className='icon'
                  icon={faDesktop}
                  size='2x'
                />
              </div>
              <h3>Web Design</h3>
              <p>Individuall approach each project</p>
            </div>
          </div>
          {/* - */}
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon
                  className='icon'
                  icon={faFacebookF}
                  size='2x'
                />
              </div>
              <h3>Facebook Ads SMM</h3>
              <p>
                Your potential customers will see your products on the
                Facebook
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon
                  className='icon'
                  icon={faGoogle}
                  size='2x'
                />
              </div>
              <h3>Goodle Ads</h3>
              <p>
                Your product will appear at the top of the Google
                search
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
