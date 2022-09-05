import React from 'react';
import parse from 'html-react-parser';
import DetailsModal from '../Modals/DetailsModal';

const SectionProject2 = ({ project }) => {
  return (
    <div className='basic-3 bg-gray'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-xl-7'>
            <div className='image-container'>
              <img
                className='img-fluid'
                src={project.image}
                alt='alternative'
              />
            </div>{' '}
            {/* end of image-container */}
          </div>{' '}
          {/* end of col */}
          <div className='col-lg-6 col-xl-5'>
            <div className='text-container'>
              <h2>{project.name}</h2>
              {parse(project.summary)}
              <DetailsModal project={project} />
              {/* <a className='btn-outline-reg' href='article.html'>
                Details
              </a> */}
            </div>{' '}
            {/* end of text-container */}
          </div>{' '}
          {/* end of col */}
        </div>{' '}
        {/* end of row */}
      </div>{' '}
      {/* end of container */}
    </div>
  );
};

export default SectionProject2;
