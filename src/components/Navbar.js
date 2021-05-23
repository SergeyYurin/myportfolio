import React from 'react';
import logo from '../cover1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
/* eslint-disable */

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <img className='logo' src={logo} alt='logo...' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: '#CD8B7C' }}
          />
        </button>

        <div
          className='collapse navbar-collapse'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item active'>
              <Link
                smooth={true}
                to='home'
                offset={-70}
                className='nav-link'
                href='#'
              >
                Home <span class='sr-only'></span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='about'
                offset={-70}
                className='nav-link'
                href='#'
              >
                About me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='services'
                offset={-70}
                className='nav-link'
                href='#'
              >
                Services
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link className='nav-link' href='#'>
                Portfolio
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                smooth={true}
                to='contacts'
                offset={-70}
                className='nav-link'
                href='#'
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
