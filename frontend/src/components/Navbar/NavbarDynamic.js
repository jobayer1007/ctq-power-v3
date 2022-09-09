import React, { useEffect, useState } from 'react';
import { Link as Scrolllink, scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userAcions';
import { allMainMenu } from '../../actions/mainMenuActions';

const NavbarDynamic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [active, setActive] = useState('navbar-collapse offcanvas-collapse');
  const [toggleIcon, setToggleIcon] = useState('navbar-toggler');

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const mainMenuAll = useSelector((state) => state.mainMenuAll);
  // const { mainMenus } = mainMenuAll;

  // useEffect(() => {
  //   if (!mainMenus) {
  //     dispatch(allMainMenu());
  //   }
  // }, [dispatch, mainMenus]);

  const scrollTarget = (target) =>
    scroller.scrollTo(target, {
      spy: true,
      smooth: true,
      duration: 700,
      // activeClass: 'active',
      // className: 'nav-link',
    });

  const scrollToPage = async (target) => {
    // console.log(navigate);
    if (navigate !== '/') {
      await navigate('/');
    }
    scrollTarget(target);
  };

  const navToggle = () => {
    active === 'navbar-collapse offcanvas-collapse'
      ? setActive('navbar-collapse offcanvas-collapse open')
      : setActive('navbar-collapse offcanvas-collapse');

    // toggleIcon
    toggleIcon === 'navbar-toggler'
      ? setToggleIcon('navbar-toggler toggle')
      : setToggleIcon('navbar-toggler');
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

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
        <Scrolllink
          className='navbar-brand logo-text'
          activeClass='active'
          to='header'
          spy={true}
          smooth={true}
          // offset={-70}
          duration={500}
          onClick={() => {
            scrollToPage('header');
            navToggle();
          }}
        >
          CTQ
        </Scrolllink>
        {/* <a className='navbar-brand logo-text' href='/'>
          CTQ
        </a> */}
        <button
          className='navbar-toggler p-0 border-0'
          onClick={navToggle}
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div
          // className='navbar-collapse offcanvas-collapse'
          className={active}
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav ms-auto navbar-nav-scroll'>
            <li className='nav-item'>
              {/* <a
                className='nav-link active'
                aria-current='page'
                href='/#header'
              >
                Home
              </a> */}
              <Scrolllink
                className='nav-link'
                activeClass='active'
                to='header'
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                onClick={() => {
                  scrollToPage('header');
                  navToggle();
                }}
              >
                Home
              </Scrolllink>
            </li>
            <li className='nav-item'>
              {/* <a className='nav-link' href='#projects'>
                Projects
              </a> */}
              <Scrolllink
                className='nav-link'
                activeClass='active'
                to='projects'
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                onClick={() => {
                  scrollToPage('projects');
                  navToggle();
                }}
              >
                Projects
              </Scrolllink>
              {/* <div onClick={() => scrollToPage('projects')}>Projects</div> */}
            </li>
            {/* <li className='nav-item'>
              <Link className='nav-link' href='/articles'>
                Article
              </Link>
            </li> */}
            <li className='nav-item'>
              {/* <a className='nav-link' href='#services'>
                Services
              </a> */}
              <Scrolllink
                className='nav-link'
                activeClass='active'
                to='services'
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                onClick={() => {
                  scrollToPage('services');
                  navToggle();
                }}
              >
                Services
              </Scrolllink>
            </li>

            <li className='nav-item'>
              {/* <a className='nav-link' href='#about'>
                About
              </a> */}
              <Scrolllink
                className='nav-link'
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                onClick={() => {
                  scrollToPage('about');
                  navToggle();
                }}
              >
                About
              </Scrolllink>
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
              <Scrolllink
                className='nav-link'
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                onClick={() => {
                  scrollToPage('contact');
                  navToggle();
                }}
              >
                Contact
              </Scrolllink>
            </li>
            {userInfo ? (
              <li className='nav-item dropdown'>
                <button
                  className='nav-link dropdown-toggle btn'
                  href='#'
                  id='dropdown01'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  {userInfo.userName}
                </button>
                <ul className='dropdown-menu' aria-labelledby='dropdown01'>
                  <li>
                    <LinkContainer to='/admin/dashboard'>
                      <button className='dropdown-item'>Dashboard</button>
                    </LinkContainer>
                  </li>

                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <button className='dropdown-item' onClick={logoutHandler}>
                      LOGOUT
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <li>
                <LinkContainer to='/login'>
                  <button className='btn btn-sm btn-outline-success m-1'>
                    login
                  </button>
                </LinkContainer>
              </li>
            )}
          </ul>
        </div>{' '}
        {/* end of navbar-collapse */}
      </div>{' '}
      {/* end of container */}
    </nav>
  );
};

export default NavbarDynamic;
