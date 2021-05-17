import React from 'react';
import logo from '../cover1.png';
/* eslint-disable */

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
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
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className='collapse navbar-collapse'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Home <span class='sr-only'></span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About me
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Services
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                How I work
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
