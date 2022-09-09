import React from 'react';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ServiceHeader = ({ service }) => {
  const navigate = useNavigate();

  const listProjects = () => {
    navigate(`/all/${service.mainMenuId}`);
  };

  console.log(service);

  return (
    <div className='row bg-gray text-center'>
      <div className='col-lg-12'>
        <h2 className='h2-heading'>{service.title}</h2>
        <p className='p-heading'>{parse(service.details)}</p>
        <Button
          variant='transparent'
          className='btn btn-outline-success'
          onClick={listProjects}
        >
          View all Services
        </Button>
      </div>
    </div>
  );
};

export default ServiceHeader;
