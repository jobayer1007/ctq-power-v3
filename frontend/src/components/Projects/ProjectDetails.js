import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectById } from '../../actions/projectActions';
import Loader from '../Loader';
import Message from '../Message';
import { getServiceById } from '../../actions/serviceActions';

const ProjectDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  console.log(params);

  const projectById = useSelector((state) => state.projectById);
  const {
    loading: projectByIdLoading,
    error: projectByIdLoadingError,
    project,
  } = projectById;

  const serviceById = useSelector((state) => state.serviceById);
  const {
    loading: serviceByIdLoading,
    error: serviceByIdLoadingError,
    service,
  } = serviceById;

  useEffect(() => {
    if (params.project === 'project') {
      dispatch(getProjectById(params.id));
    }
    if (params.project === 'service') {
      dispatch(getServiceById(params.id));
    }
  }, [dispatch, params.id, params.project]);

  return (
    <div id='articles' className='bg-white'>
      {projectByIdLoading || serviceByIdLoading ? (
        <Loader />
      ) : projectByIdLoadingError || serviceByIdLoadingError ? (
        <Message variant='danger'>
          {projectByIdLoading || serviceByIdLoadingError}
        </Message>
      ) : (
        (project || service) && (
          <>
            <header className='ex-header'>
              <div className='container'>
                <div className='row'>
                  <div className='col-xl-10 offset-xl-1'>
                    <h1>
                      {(project && project.name) || (service && service.name)}
                    </h1>
                  </div>{' '}
                  {/* end of col */}
                </div>{' '}
                {/* end of row */}
              </div>{' '}
              {/* end of container */}
            </header>{' '}
            {/* end of ex-header */}
            {/* end of header */}
            <div className='ex-basic-1 pt-5 pb-5'>
              <div className='container'>
                {(project.details && parse(project.details)) ||
                  (service.details && parse(service.details))}
                <a className='btn-solid-reg mb-5' href='/'>
                  Contact Us
                </a>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default ProjectDetails;
