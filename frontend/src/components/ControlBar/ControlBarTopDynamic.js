import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

const ControlBarTopDynamic = ({ showSideCntrlBar, setShowSideCntrlBar }) => {
  const mainMenuAll = useSelector((state) => state.mainMenuAll);
  const { mainMenus } = mainMenuAll;
  return (
    <Navbar
      variant='dark'
      expand='lg'
      className='px-3 py-0 fs-5 bg-dark navbarmod'
      collapseOnSelect
      sticky='top'
    >
      {/* <Navbar.Text>
        <a href='#login'>Welcome {infoBox.adminName}</a>
      </Navbar.Text> */}
      <Button
        variant='transparent'
        className='btn-outline-light btn-sm my-2 py-0 border-danger'
        onClick={() => setShowSideCntrlBar(!showSideCntrlBar)}
      >
        {showSideCntrlBar ? 'Hide Sidebar' : 'Show Sidebar'}
      </Button>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav // justify // variant='tabs' // variant='pills'// style={{width: '100%'}} // className='justify-content-center'
          className='ms-auto'
          fill
        >
          <LinkContainer to='/admin/dashboard'>
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          {mainMenus &&
            mainMenus.map((menu, i) =>
              menu.subMenus && menu.subMenus.length !== 0 ? (
                <NavDropdown
                  key={i + menu.mainMenuId}
                  title={menu.title.toUpperCase()}
                  align='end'
                >
                  <LinkContainer to={`/admin/${menu.title.toLowerCase()}`}>
                    <>
                      {menu.subMenus.map((subMenu, j) => (
                        <NavDropdown.Item key={j + subMenu.subMenuId}>
                          {subMenu.title}
                        </NavDropdown.Item>
                      ))}
                    </>
                  </LinkContainer>
                </NavDropdown>
              ) : (
                <LinkContainer
                  to={`/admin/${menu.title.toUpperCase()}`}
                  key={i + menu.mainMenuId}
                >
                  <Nav.Link>{menu.title.toUpperCase()}</Nav.Link>
                </LinkContainer>
              )
            )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ControlBarTopDynamic;
