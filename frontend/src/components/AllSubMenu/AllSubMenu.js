import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectById } from '../../actions/projectActions';
import Loader from '../Loader';
import Message from '../Message';
import { getServiceById } from '../../actions/serviceActions';
import { getSubMenuById } from '../../actions/subMenuActions';
import { Image } from 'react-bootstrap';
import { getMainMenuById } from '../../actions/mainMenuActions';

const AllSubMenu = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(params);

  const mainMenuById = useSelector((state) => state.mainMenuById);
  const {
    loading: mainMenuByIdLoading,
    error: mainMenuByIdLoadingError,
    mainMenu,
  } = mainMenuById;

  useEffect(() => {
    dispatch(getMainMenuById(params.id));
  }, [dispatch, params.id]);

  const openLinkHandler = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div id='articles' className='bg-white'>
      {mainMenuByIdLoading ? (
        <Loader />
      ) : mainMenuByIdLoadingError ? (
        <Message variant='danger'>{mainMenuByIdLoadingError}</Message>
      ) : (
        mainMenu && (
          <>
            <header className='ex-header'>
              <div className='container'>
                <div className='row'>
                  <div className='col-xl-10 offset-xl-1'>
                    <h1>{mainMenu.title}</h1>
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
              <div className='container'>{parse(mainMenu.details)}</div>
            </div>
            {mainMenu.subMenus && mainMenu.subMenus.length !== 0 ? (
              <div className='text-center'>
                <ul>
                  {mainMenu.subMenus.map((item, i) => (
                    <li key={i}>
                      <h4>{item.title}</h4>

                      <button
                        className='read-more no-line green btn'
                        onClick={() => openLinkHandler(item.subMenuId)}
                      >
                        Learn more{' '}
                        <span className='fas fa-long-arrow-alt-right' />
                      </button>
                    </li>
                  ))}{' '}
                </ul>
              </div>
            ) : null}
          </>
        )
      )}
    </div>
  );
};

export default AllSubMenu;
