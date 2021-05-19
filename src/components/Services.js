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
                <FontAwesomeIcon icon={faFileCode} size='2x' />
              </div>
              <h3>Web Development</h3>
              <p>
                While creating a new project I always use new
                technologies so your website or web application can be
                most competitive on the market
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon icon={faDesktop} size='2x' />
              </div>
              <h3>Web Design</h3>
              <p>
                I approach each project individually and always focus
                on the result and customer requests
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon icon={faFacebookF} size='2x' />
              </div>
              <h3>Facebook Ads SMM</h3>
              <p>
                Your potential customers will see your products on the
                Facebook or Instagram
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon icon={faGoogle} size='2x' />
              </div>
              <h3>Goodle Ads</h3>
              <p>
                Your service or product will appear at the top of the
                Google search
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
