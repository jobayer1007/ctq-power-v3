import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const SectionProject3D = ({ project }) => {
  return (
    <div className='basic-4 bg-white'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-xl-5'>
            <div className='text-container'>
              <Link to={`/project/${project.subMenuId}`}>
                <h2>{project.title}</h2>
              </Link>
              {parse(project.details)}
            </div>{' '}
            {/* end of text-container */}
          </div>{' '}
          {/* end of col */}
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
        </div>{' '}
        {/* end of row */}
      </div>{' '}
      {/* end of container */}
    </div>
  );
};

export default SectionProject3D;
