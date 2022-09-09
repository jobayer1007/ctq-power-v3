import React, { useEffect, useState } from 'react';
import { Button, Image, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { getSubMenuById } from '../../actions/subMenuActions';
import Loader from '../Loader';
import Message from '../Message';

const DetailsModalD = ({ project }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const subMenuById = useSelector((state) => state.subMenuById);
  const {
    loading: subMenuByIdLoading,
    error: subMenuByIdLoadingError,
    subMenu,
  } = subMenuById;

  useEffect(() => {
    dispatch(getSubMenuById(project.subMenuId));
  }, [dispatch, project.subMenuId]);

  return (
    <>
      <OverlayTrigger
        overlay={<Tooltip id='tooltip-disabled'>Details</Tooltip>}
      >
        <button className='btn-solid-reg' onClick={handleShow}>
          Details
        </button>
      </OverlayTrigger>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Body>
          <div className='modal-content'>
            <div className='row'>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={handleClose}
              />
            </div>
            <div className='container'>
              {subMenuByIdLoading ? (
                <Loader />
              ) : subMenuByIdLoadingError ? (
                <Message variant='danger'>{subMenuByIdLoadingError}</Message>
              ) : (
                subMenu && (
                  <>
                    <h5 className='text-center'>{subMenu.title}</h5>
                    {subMenu.image && <Image fluid src={subMenu.image} />}
                    <hr />
                    {subMenu.details && parse(subMenu.details)}

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
                  </>
                )
              )}

              {/* end of row */}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a
            id='modalCtaBtn'
            className='btn-solid-reg'
            href='#contact'
            onClick={handleClose}
          >
            Contact
          </a>

          <button
            type='button'
            className='btn-outline-reg'
            onClick={handleClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DetailsModalD;
