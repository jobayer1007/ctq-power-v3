import React from 'react';

const About = () => {
  return (
    <div id='about' className='counter'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2 className='h2-heading'>Why should you work with us</h2>
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
                  <h5>Expertise in digital products</h5>
                  <div className='text'>
                    Civil those mrs enjoy shy fat merry. You greatest jointure
                    saw horrible. He private he on be how the words look imagine
                    suppose
                  </div>
                </div>
              </li>
              <li className='d-flex'>
                <h5 className='number'>2.</h5>
                <div className='flex-grow-1'>
                  <h5>Highly skilled team of experts</h5>
                  <div className='text'>
                    Blind there if every no so at. Own neglected you preferred
                    way sincerity delivered his attempted. To of message more
                    now cottage
                  </div>
                </div>
              </li>
              <li className='d-flex'>
                <h5 className='number'>3.</h5>
                <div className='flex-grow-1'>
                  <h5>Partnerships with marketing agencies</h5>
                  <div className='text'>
                    Be at miss or each good play home they. It leave taste mr in
                    it fancy. She son lose does fond bred gave lady get. Sir her
                    company
                  </div>
                </div>
              </li>
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
