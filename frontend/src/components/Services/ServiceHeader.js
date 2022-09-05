import React from 'react';
import parse from 'html-react-parser';

const ServiceHeader = ({ service }) => {
  return (
    <div className='row bg-gray text-center'>
      <div className='col-lg-12'>
        <h2 className='h2-heading'>{service.name}</h2>
        <p className='p-heading'>{parse(service.summary)}</p>
      </div>
    </div>
  );
};

export default ServiceHeader;
