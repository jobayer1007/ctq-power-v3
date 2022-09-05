import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav
      id='navbar'
      className='navbar navbar-expand-lg fixed-top navbar-dark'
      aria-label='Main navigation'
    >
      <div className='container'>
        {/* Image Logo */}
        {/* <a className='navbar-brand logo-image' href='index.html'>
          <img src='images/logo.svg' alt='alternative' />
        </a> */}
        {/* Text Logo - Use this if you don't have a graphic logo */}
        <a class='navbar-brand logo-text' href='#header'>
          CTQ
        </a>
        <button
          className='navbar-toggler p-0 border-0'
          type='button'
          id='navbarSideCollapse'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div
          className='navbar-collapse offcanvas-collapse'
          id='navbarsExampleDefault'
        >
          <ul className='navbar-nav ms-auto navbar-nav-scroll'>
            <li className='nav-item'>
              {/* <a className='nav-link active' aria-current='page' href='#header'>
                Home
              </a> */}
              <Link
                className='nav-link'
                activeClass='active'
                to='header'
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              {/* <a className='nav-link' href='#projects'>
                Projects
              </a> */}
              <Link
                className='nav-link'
                activeClass='active'
                to='projects'
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              {/* <a className='nav-link' href='#services'>
                Services
              </a> */}
              <Link
                className='nav-link'
                activeClass='active'
                to='services'
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              {/* <a className='nav-link' href='#about'>
                About
              </a> */}
              <Link
                className='nav-link'
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
          <ul className="dropdown-menu" aria-labelledby="dropdown01">
            <li><a className="dropdown-item" href="article.html">Article Details</a></li>
            <li><div className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="terms.html">Terms Conditions</a></li>
            <li><div className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="privacy.html">Privacy Policy</a></li>
          </ul>
        </li> */}
            <li className='nav-item'>
              {/* <a className='nav-link' href='#contact'>
                Contact
              </a> */}
              <Link
                className='nav-link'
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>{' '}
        {/* end of navbar-collapse */}
      </div>{' '}
      {/* end of container */}
    </nav>
  );
};

export default Navbar;
