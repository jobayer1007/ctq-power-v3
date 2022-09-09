import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button, Form, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../Loader';

const AddSection = ({ addSection }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [sectionTitle, setSectionTitle] = useState('');
  const [sectionDetails, setSectionDetails] = useState('');

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState([]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files;

    for (let i = 0; i < file.length; i++) {
      const formData = new FormData();
      formData.append(`image`, file[i]);
      setUploading(true);

      try {
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };

        const { data } = await axios.post('/api/upload', formData, config);
        uploadedFiles.push(data);
        setUploading(false);

        setMessage((prevMessage) => [
          ...prevMessage,
          'Uploaded the file successfully: ' + file[i].name,
        ]);
      } catch (error) {
        console.error(error);
        setUploading(false);
        setMessage((prevMessage) => [
          ...prevMessage,
          'Could not upload the file: ' + file[i].name,
        ]);
      }
    }
  };

  return (
    <>
      <OverlayTrigger
        overlay={
          <Tooltip id='tooltip-disabled'>Add Section under this title </Tooltip>
        }
      >
        <span onClick={handleShow}>
          <i
            className='fas fa-plus action mr-2 text-info'
            style={{
              cursor: 'pointer',
            }}
          ></i>{' '}
          <Button className='btn-outline-danger' variant='transparent'>
            Add Section under this title
          </Button>
        </span>
      </OverlayTrigger>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-center text-info'>
            Add Section:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Form>
              <Form.Group controlId='title'>
                <Form.Label>Add a Title</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Please Enter A Ttile..'
                  value={sectionTitle}
                  onChange={(e) => setSectionTitle(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='details'>
                <Form.Label>Add Details</Form.Label>
                <CKEditor
                  editor={ClassicEditor}
                  data={sectionDetails}
                  onChange={(e, editor) => {
                    const data = editor.getData();
                    setSectionDetails(data);
                  }}
                />
              </Form.Group>

              <Form.Group controlId='image'>
                <Form.Label>Image</Form.Label>

                <Form.Control type='file' onChange={uploadFileHandler} />
                {uploading && <Loader />}
              </Form.Group>
              {message.length > 0 && (
                <div className='alert alert-secondary' role='alert'>
                  <ul>
                    {message.map((item, i) => {
                      return <li key={i}>{item}</li>;
                    })}
                  </ul>
                </div>
              )}
              <br />
            </Form>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Link
            className='btn btn-outline-danger btn-sm rounded'
            to='#'
            onClick={handleClose}
          >
            Cancel
          </Link>

          <Link
            className='btn btn-outline-info btn-sm rounded'
            to='#'
            onClick={() => {
              addSection({ sectionTitle, sectionDetails, uploadedFiles });
              handleClose();
            }}
          >
            Create
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddSection;
