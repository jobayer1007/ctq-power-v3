import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectById } from '../../actions/projectActions';
import Loader from '../Loader';
import Message from '../Message';
import { getServiceById } from '../../actions/serviceActions';
import { getSubMenuById } from '../../actions/subMenuActions';
import { Image } from 'react-bootstrap';

const ProjectDetailsD = () => {
  const params = useParams();
  const dispatch = useDispatch();
  console.log(params);

  const subMenuById = useSelector((state) => state.subMenuById);
  const {
    loading: subMenuByIdLoading,
    error: subMenuByIdLoadingError,
    subMenu,
  } = subMenuById;

  useEffect(() => {
    dispatch(getSubMenuById(params.id));
  }, [dispatch, params.id]);

  return (
    <div id='articles' className='bg-white'>
      {subMenuByIdLoading ? (
        <Loader />
      ) : subMenuByIdLoadingError ? (
        <Message variant='danger'>{subMenuByIdLoadingError}</Message>
      ) : (
        subMenu && (
          <>
            <header className='ex-header'>
              <div className='container'>
                <div className='row'>
                  <div className='col-xl-10 offset-xl-1'>
                    <h1>{subMenu.title}</h1>
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
                {subMenu.details && parse(subMenu.details)}

                <hr />

                {subMenu.subMenuAts
                  ? subMenu.subMenuAts.map((data, i) => (
                      <div className='container' key={i}>
                        <h5 className='text-center'>{data.title}</h5>
                        {data.image && <Image fluid src={data.image} />}
                        <hr />
                        {data.details && parse(data.details)}
                      </div>
                    ))
                  : null}

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

export default ProjectDetailsD;
