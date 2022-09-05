import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allService } from '../../actions/serviceActions';
import Loader from '../Loader';
import Message from '../Message';
import ServiceHeader from './ServiceHeader';

const Services = () => {
  const dispatch = useDispatch();

  const serviceAll = useSelector((state) => state.serviceAll);
  const {
    loading: serviceAllLoading,
    error: serviceAllLoadingError,
    services,
  } = serviceAll;

  useEffect(() => {
    dispatch(allService());
  }, [dispatch]);

  return (
    <div id='services' className='cards-1 bg-gray text-center'>
      <div className='container'>
        {serviceAllLoading ? (
          <Loader />
        ) : serviceAllLoadingError ? (
          <Message variant='danger'>{serviceAllLoadingError}</Message>
        ) : (
          services &&
          services.length !== 0 && <ServiceHeader service={services[0]} />
        )}
        {/* end of row */}
        <div className='row'>
          <div className='col-lg-12'>
            {/* Card */}
            <div className='card'>
              <div>
                <img
                  className='img-fluid card-icon'
                  src='images/service-1.webp'
                  alt='alternative'
                />
              </div>
              <div className='card-body'>
                <h4 className='card-title'>
                  Power System Studies – AC systems
                </h4>
                <div className='card-text'>
                  We provide premier consulting services on System studies
                  exclusively related to Power systems. System studies helps
                  Utilities to decide critical infrastructure development in
                  efficient and cost-effective way. <br />
                  <span>
                    <a className='read-more no-line green' href='/article'>
                      Learn more{' '}
                      <span className='fas fa-long-arrow-alt-right' />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* end of card */}
            {/* Card */}
            <div className='card'>
              <div>
                <img
                  className='img-fluid card-icon'
                  src='images/project-3.webp'
                  alt='alternative'
                />
              </div>
              <div className='card-body'>
                <h4 className='card-title'>Substation Design</h4>
                <div className='card-text'>
                  Substation is a core part of the Power system. Construction of
                  Substation includes Project management, procurement of
                  materials , Engineering, Civil construction, equipment
                  installation, testing & commissioning.{' '}
                  <span>
                    <a className='read-more no-line green' href='/article'>
                      Learn more{' '}
                      <span className='fas fa-long-arrow-alt-right' />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* end of card */}
            {/* Card */}
            <div className='card'>
              <div>
                <img
                  className='img-fluid card-icon'
                  src='images/futuristic-city_46706-686.webp'
                  alt='alternative'
                />
              </div>
              <div className='card-body'>
                <h4 className='card-title'>Software solution</h4>
                <div className='card-text'>
                  Substation SLD, Layouts and all diagrams are developed in
                  AutoCAD. AutoCAD Electricals is also used. It is a standard
                  software for substation designing.{' '}
                  <span>
                    <a className='read-more no-line green' href='/article'>
                      Learn more{' '}
                      <span className='fas fa-long-arrow-alt-right' />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* end of card */}
            {/* Card */}
            <div className='card'>
              <div>
                <img
                  className='img-fluid card-icon'
                  src='images/yellow-safety-helmet-solar-cell-panel_1150-4282.webp'
                  alt='alternative'
                />
              </div>
              <div className='card-body'>
                <h4 className='card-title'>Training</h4>
                <div className='card-text'>
                  We provide Various types of knowledge sharing sessions on
                  Power system Planning, Design & Protection through our
                  technical & collaboration personnel.{' '}
                  <span>
                    <a className='read-more no-line green' href='/article'>
                      Learn more{' '}
                      <span className='fas fa-long-arrow-alt-right' />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* end of card */}
            {/* Card */}
            {/* <div className='card second'>
              <div className='card-icon'>
                <span className='fas fa-chart-pie green' />
              </div>
              <div className='card-body'>
                <h4 className='card-title'>Evolution reports</h4>
                <div className='card-text'>
                  Within six not law. Few impression difficulty his use has
                  comparison how should it be decisively
                </div>
              </div>
            </div> */}
            {/* end of card */}
            {/* Card */}
            {/* <div className='card third'>
              <div className='card-icon'>
                <span className='far fa-chart-bar green' />
              </div>
              <div className='card-body'>
                <h4 className='card-title'>Market analysis</h4>
                <div className='card-text'>
                  Had repulsive dashwoods suspic sincerity but advantage now
                  him. Remark easily garret nor nay
                </div>
              </div>
            </div> */}
            {/* end of card */}
          </div>{' '}
          {/* end of col */}
        </div>{' '}
        {/* end of row */}
      </div>{' '}
      {/* end of container */}
    </div>
  );
};

export default Services;
