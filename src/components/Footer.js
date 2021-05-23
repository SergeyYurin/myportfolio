import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

/* eslint-disable */

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='d-flex'>
              <p>Chicago city, IL</p>
            </div>
            <div className='d-flex'>
              <a href='tel:630-994-0722'>+1(630)994-0722</a>
            </div>
          </div>
          <div className='col-lg-3 col-md-2 col-sm-6'>
            <div className='row'>
              <div className='col'>
                <Link
                  smooth={true}
                  to='home'
                  offset={-70}
                  className='footer-nav'
                >
                  Home
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='about'
                  offset={-70}
                  className='footer-nav'
                >
                  About me
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='services'
                  offset={-70}
                  className='footer-nav'
                >
                  Services
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-2 col-sm-6 align-items-center'>
            <div className='d-flex justify-content-center'>
              <a
                href='https://twitter.com/RealSergeyYurin'
                className='twitter social'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faTwitter} size='2x' />
              </a>
              <a
                href='https://www.linkedin.com/in/sergey-yurin/'
                className='linkedin social'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
              </a>
              <a
                href='https://www.facebook.com/sergey.yurin'
                className='facebook social'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faFacebook} size='2x' />
              </a>
            </div>
            <p className='py-3 text-center'>
              {new Date().getFullYear()}&nbsp;Sergey Yurin | All
              rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
