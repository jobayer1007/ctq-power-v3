import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='form-1'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2 className='h2-heading'>Let us know about your project</h2>
            <p className='p-heading'>
              If you would like to start a project or obtain a quote for one of
              our services, drop an email to
            </p>
            <ul className='list-unstyled li-space-lg'>
              <li>
                <i className='fas fa-map-marker-alt' /> &nbsp;315 Beall Avenue,
                Rockville, MD 20805
              </li>
              <li>
                <i className='fas fa-phone' /> &nbsp;
                <a href='tel: (216) 346 5520'> (216) 346 5520</a>
              </li>
              <li>
                <i className='fas fa-envelope' /> &nbsp;
                <a href='mailto:mizan.rahman@goctq.com'>
                  mizan.rahman@goctq.com
                </a>
              </li>
            </ul>
          </div>{' '}
          {/* end of col */}
        </div>{' '}
        {/* end of row */}
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            {/* Contact Form */}
            <form>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control-input'
                  placeholder='Name'
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control-input'
                  placeholder='Email'
                  required
                />
              </div>
              <div className='form-group'>
                <textarea
                  className='form-control-textarea'
                  placeholder='Message'
                  required
                  defaultValue={''}
                />
              </div>
              <div className='form-group'>
                <button type='submit' className='form-control-submit-button'>
                  Submit
                </button>
              </div>
            </form>
            {/* end of contact form */}
          </div>{' '}
          {/* end of col */}
        </div>{' '}
        {/* end of row */}
      </div>{' '}
      {/* end of container */}
    </div>
  );
};

export default Contact;
