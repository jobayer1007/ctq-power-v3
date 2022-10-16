import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='footer-col first'>
                <h6>About CTQ, LLC</h6>
                <p className='p-small'>
                  CTQ, LLC is a registered company in the state of Virginia in
                  the USA and is providing services on Power system studies in
                  steady state (RMS) and in Electro-Magnetic Transient (EMT)
                  domains using the world best software PSSE, PSCAD and others
                  with its’ industry expert professional team. Other services
                  include Substation Design (Primary & secondary) Services [both
                  for AIS & GIS] substation, ground/earthing calculation using
                  world best software on grounding—CDEGS. We are associated with
                  our North American Partners and have professionals educated
                  and trained in North America and Bangladesh as well. Customer
                  satisfaction has been our pride so far and we are highly
                  confident that we can meet the requirement on substation
                  design & Power system Studies of any complexities . CTQ also
                  has a sister company in Bangladesh called CTQ Ltd located in
                  Dhaka.
                </p>
              </div>
              {/* end of footer-col */}
              <div className='footer-col second'>
                <h6>Links</h6>
                <ul className='list-unstyled li-space-lg p-small'>
                  <li>
                    Important: <a href='terms.html'>Terms &amp; Conditions</a>,{' '}
                    <a href='privacy.html'>Privacy Policy</a>
                  </li>
                  <li>
                    Useful: <a href='#'>Colorpicker</a>,{' '}
                    <a href='#'>Icon Library</a>, <a href='#'>Illustrations</a>
                  </li>
                  <li>
                    Menu:{' '}
                    <a className='page-scroll' href='#header'>
                      Home
                    </a>
                    ,{' '}
                    <a className='page-scroll' href='#projects'>
                      Projects
                    </a>
                    ,{' '}
                    <a className='page-scroll' href='#services'>
                      Services
                    </a>
                    ,{' '}
                    <a className='page-scroll' href='#contact'>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {/* end of footer-col */}
              <div className='footer-col third'>
                <span className='fa-stack'>
                  <a href='#your-link'>
                    <i className='fas fa-circle fa-stack-2x' />
                    <i className='fab fa-facebook-f fa-stack-1x' />
                  </a>
                </span>
                <span className='fa-stack'>
                  <a href='#your-link'>
                    <i className='fas fa-circle fa-stack-2x' />
                    <i className='fab fa-twitter fa-stack-1x' />
                  </a>
                </span>
                <span className='fa-stack'>
                  <a href='#your-link'>
                    <i className='fas fa-circle fa-stack-2x' />
                    <i className='fab fa-pinterest-p fa-stack-1x' />
                  </a>
                </span>
                <span className='fa-stack'>
                  <a href='#your-link'>
                    <i className='fas fa-circle fa-stack-2x' />
                    <i className='fab fa-instagram fa-stack-1x' />
                  </a>
                </span>
                <p className='p-small'>
                  We would love to hear from you{' '}
                  <a href='mailto:mizan.rahman@goctq.com'>
                    <strong>mizan.rahman@goctq.com</strong>
                  </a>
                </p>
              </div>
              {/* end of footer-col */}
            </div>{' '}
            {/* end of col */}
          </div>{' '}
          {/* end of row */}
        </div>{' '}
        {/* end of container */}
      </div>

      {/* Copyright */}
      <div className='copyright'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <p className='p-small'>
                Copyright © <a href='#your-link'>CTQ</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
