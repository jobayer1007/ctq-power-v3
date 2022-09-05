import React from 'react';

const Header = () => {
  return (
    <>
      {/* Header */}
      <header id='header' className='header'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h1 className='h1-large'>
                PLAN
                <br /> DESIGN
                <br /> PROGRESS
              </h1>
            </div>{' '}
            {/* end of col */}
            <div className='col-lg-6'>
              <div className='button-container'>
                <a className='btn-solid-lg page-scroll' href='#intro'>
                  Discover
                </a>
                <a className='btn-outline-lg page-scroll' href='#contact'>
                  Contact
                </a>
              </div>{' '}
              {/* end of button-container */}
            </div>{' '}
            {/* end of col */}
          </div>{' '}
          {/* end of row */}
        </div>{' '}
        {/* end of container */}
      </header>{' '}
      {/* end of header */}
      {/* end of header */}
    </>
  );
};

export default Header;
