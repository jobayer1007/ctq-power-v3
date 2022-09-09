import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Form, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../Loader';

const EditSection = ({ data, editSection }) => {
  const [show, setShow] = useState(false);

  const [sectionTitle, setSectionTitle] = useState(data.title);
  const [sectionDetails, setSectionDetails] = useState(data.details);

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        overlay={<Tooltip id='tooltip-disabled'>Edit Section</Tooltip>}
      >
        <span onClick={handleShow}>
          <i
            className='far fa-edit action mr-2 text-info'
            style={{
              cursor: 'pointer',
            }}
          ></i>
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
            Edit Section:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Form>
              <Form.Group controlId='title'>
                <Form.Label>Edit Title</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Please Enter A Ttile..'
                  value={sectionTitle}
                  onChange={(e) => setSectionTitle(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='details'>
                <Form.Label>Edit Details</Form.Label>
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
              editSection({
                id: data.subMenuAtId ? data.subMenuId : data.mainMenuId,
                sectionTitle,
                sectionDetails,
                uploadedFiles,
              });
              handleClose();
            }}
          >
            Update
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditSection;
