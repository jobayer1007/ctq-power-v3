import React, { useState } from 'react';
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import parse from 'html-react-parser';

const DetailsModal = ({ project }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              {parse(project.details)}
            </div>{' '}
            {/* end of row */}
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

export default DetailsModal;
