import React from 'react';

const About = () => {
  return (
    <div id='about' className='counter'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2 className='h2-heading'>Why Us ?</h2>
            <p className='text-white'>
              CTQ, LLC is a registered company in the state of Virginia in the
              USA and is providing services on Power system studies in steady
              state (RMS) and in Electro-Magnetic Transient (EMT) domains using
              the world best software PSSE, PSCAD and others with its’ industry
              expert professional team. Other services include Substation Design
              (Primary & secondary) Services [both for AIS & GIS] substation,
              ground/earthing calculation using world best software on
              grounding—CDEGS. We are associated with our North American
              Partners and have professionals educated and trained in North
              America and Bangladesh as well. Customer satisfaction has been our
              pride so far and we are highly confident that we can meet the
              requirement on substation design & Power system Studies of any
              complexities . CTQ also has a sister company in Bangladesh called
              CTQ Ltd located in Dhaka.
            </p>
            <hr className='hr-heading' />
          </div>{' '}
          {/* end of col */}
        </div>{' '}
        {/* end of row */}
        <div className='row'>
          <div className='col-xl-12'>
            <ul className='list-unstyled'>
              <li className='d-flex'>
                <h5 className='number'>1.</h5>
                <div className='flex-grow-1'>
                  <h5>Expertise </h5>
                  <div className='text'>
                    Our consultants and associates are experienced with a range
                    of power systems analysis studies.
                  </div>
                </div>
              </li>
              <li className='d-flex'>
                <h5 className='number'>2.</h5>
                <div className='flex-grow-1'>
                  <h5>Highly skilled team of experts</h5>
                  <div className='text'>
                    Our highly qualified team of engineers is ready to dive into
                    system interactions within the electric power supply grid.
                  </div>
                </div>
              </li>
              {/* <li className='d-flex'>
                <h5 className='number'>3.</h5>
                <div className='flex-grow-1'>
                  <h5>Partnerships with marketing agencies</h5>
                  <div className='text'>
                    Be at miss or each good play home they. It leave taste mr in
                    it fancy. She son lose does fond bred gave lady get. Sir her
                    company
                  </div>
                </div>
              </li> */}
            </ul>
          </div>{' '}
        </div>{' '}
        {/* end of row */}
      </div>{' '}
      {/* end of container */}
    </div>
  );
};

export default About;
