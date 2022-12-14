import React, { useState, useEffect } from 'react';
import { Card, Navbar, Nav, Accordion, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { allMainMenu } from '../../actions/mainMenuActions';

const StylesCBS1 = styled.div`
  position: sticky;
  top: 0;

  .card-body {
    position: sticky;
    top: 0;
    z-index: 1;
    box-shadow: 0px 0px 1px #ccc;
  }

  .accordion {
    max-height: 100vh;
    overflow: auto;
  }
  .accordion .accordion-item {
    background-color: transparent;
  }
  .accordion .accordion-item .accordion-button {
    padding: 0.75rem 0.5rem;
    background-color: transparent;
    font-size: 1rem;
    font-weight: 500;
    color: #f1c75f;
    // color: #ffa41c;
  }
  .accordion-button::after {
    width: 0.9rem;
    height: 0.9rem;
    background-size: 0.9rem;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    transition: -webkit-transform 0.35s ease-in-out;
    transition: transform 0.35s ease-in-out;
    transition: transform 0.35s ease-in-out, -webkit-transform 0.35s ease-in-out;
  }
  .accordion .accordion-item .accordion-body {
    padding: 0;
    font-size: 0.75rem;
  }
  .accordion .accordion-item .accordion-body .navbar .navbar-nav {
    margin-left: 1rem;
    font-family: monospace;
    font-size: 0.8rem;
    font-weight: normal;
    border-left: 1px solid #ffa41c;
  }

  .font-div-cbs1 {
    padding-left: 0.25rem;
    padding-right: 0.5rem;
    color: #ffa41c;
    width: 2rem;
    i {
      font-size: 1rem;
    }
  }
  .htitle-div-cbs1 {
    padding-right: 0.5rem;
  }
`;

const ControlBarSideDynamic = ({ infoBox }) => {
  const dispatch = useDispatch();
  const [hideHtitle, setHideHtitle] = useState(false);
  const [currentURL, setCurrentURL] = useState('');

  const mainMenuAll = useSelector((state) => state.mainMenuAll);
  const { mainMenus } = mainMenuAll;

  useEffect(() => {
    dispatch(allMainMenu());
  }, [dispatch]);

  useEffect(() => {
    setCurrentURL(infoBox.currentURL);
  }, [infoBox, infoBox.currentURL]);

  return (
    <StylesCBS1>
      <Card.Body className='bg-black px-2 pb-0 text-danger'>
        <div className='d-flex'>
          <Image
            src={infoBox.userInfo.image}
            width={40}
            height={40}
            roundedCircle={true}
            className='mt-1'
          />
          {!hideHtitle && (
            <div className='ps-2'>
              <small>{infoBox.userInfo.userName}</small>
              <br />
              <small className='text-uppercase'>
                {infoBox.userInfo.userRole}
              </small>
            </div>
          )}
        </div>
      </Card.Body>

      {infoBox.groupIndex !== '' && currentURL === infoBox.currentURL && (
        <>
          <Navbar variant='dark'>
            <Nav defaultActiveKey={infoBox.currentURL} className='flex-column'>
              <LinkContainer to={`/admin/dashboard`}>
                <Nav.Link>DASHBOARD</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar>

          {mainMenus &&
            mainMenus.map((menu, i) =>
              menu.subMenus && menu.subMenus.length !== 0 ? (
                <Accordion
                  defaultActiveKey={infoBox.groupIndex}
                  className='fs-5'
                >
                  {/* --- Dashbord - */}
                  {/* <Accordion.Item eventKey='0'>
            <Link to='/admin/dashboard'>
              <Accordion.Header>
                <div className='font-div-cbs1'>
                  <i className='fas fa-tachometer-alt'></i>
                </div>
                {!hideHtitle && (
                  <div className='htitle-div-cbs1'>Dashboard</div>
                )}
              </Accordion.Header>
            </Link>
          </Accordion.Item> */}
                  <Accordion.Item eventKey={i + 1} key={i + menu.mainMenuId}>
                    <LinkContainer to={`/admin/${menu.title.toLowerCase()}`}>
                      <Accordion.Header>
                        {!hideHtitle && (
                          <div className='htitle-div-cbs1'>{menu.title}</div>
                        )}
                      </Accordion.Header>
                    </LinkContainer>
                    <Accordion.Body>
                      <Navbar variant='dark'>
                        <Nav
                          defaultActiveKey={infoBox.currentURL}
                          className='flex-column'
                        >
                          {menu.subMenus && menu.subMenus.length !== 0 ? (
                            menu.subMenus.map((subMenu, j) => (
                              <LinkContainer
                                to={`/admin/${subMenu.title.toLowerCase()}`}
                                key={j + subMenu.subMenuId}
                              >
                                <Nav.Link>
                                  {subMenu.title.toUpperCase()}
                                </Nav.Link>
                              </LinkContainer>
                            ))
                          ) : (
                            <Nav.Link>No SubMenu</Nav.Link>
                          )}
                        </Nav>
                      </Navbar>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ) : (
                <Navbar variant='dark'>
                  <Nav
                    defaultActiveKey={infoBox.currentURL}
                    className='flex-column'
                  >
                    <LinkContainer
                      to={`/admin/${menu.title.toLowerCase()}`}
                      key={i + menu.mainMenuId}
                    >
                      <Nav.Link>{menu.title.toUpperCase()}</Nav.Link>
                    </LinkContainer>
                  </Nav>
                </Navbar>
              )
            )}
        </>
      )}
    </StylesCBS1>
  );
};

export default ControlBarSideDynamic;
