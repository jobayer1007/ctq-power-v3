import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import parse from 'html-react-parser';
import Loader from '../Loader';
import { allIntro, updateIntroById } from '../../actions/introAction';
import Message from '../Message';
import { Link } from 'react-router-dom';
import { allProject, newProject } from '../../actions/projectActions';
import { allService, newService } from '../../actions/serviceActions';
import ServiceHeader from '../Services/ServiceHeader';

const Services = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [details, setDetails] = useState('');

  const [addImage, setAddImage] = useState(false);
  const [imageName, setImageName] = useState('');
  const [imageDescription, setImageDescription] = useState('');
  const [eventId, setEventId] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState([]);

  const serviceAll = useSelector((state) => state.serviceAll);
  const {
    loading: serviceAllLoading,
    error: serviceAllLoadingError,
    services,
  } = serviceAll;

  const serviceNew = useSelector((state) => state.serviceNew);
  const { loading, error, success } = serviceNew;

  useEffect(() => {
    if (success) {
      toast.success(success);
      dispatch(allService());
    }
    if (error) {
      toast.error(error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!services || services.length === 0) {
      dispatch(allService());
    } else {
      setId(services[0].projectId);
      setName(services[0].name);
      setSummary(services[0].summary);
      // setDetails(services[0].details);
    }

    if (serviceAllLoadingError) {
      console.log(serviceAllLoadingError);
    }
  }, [dispatch, serviceAllLoadingError]);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log('submited');
    console.log(name, summary);
    dispatch(newService({ name, summary, image: uploadedFiles[0] }));
  };

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
        console.log(data);
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
    <main>
      <div className='d-flex align-items-center justify-content-center main-content mb-3'>
        {/* <h1 className='text-center text-light'>Welcom To the Introduction!</h1> */}
        <ToastContainer />
        <Card border='info' className='mb-3'>
          <Card.Header className='text-center' as='h2'>
            Welcom To the Project Section
          </Card.Header>
          <Card.Body>
            {loading ? (
              <Loader />
            ) : (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                  <Form.Label>Add Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Please Enter A Name..'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='summary'>
                  <Form.Label>Add Summary</Form.Label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={summary}
                    onChange={(e, editor) => {
                      const data = editor.getData();
                      setSummary(data);
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
                <Button type='submit' variant='info'>
                  <i className='fas fa-plus' /> Add
                </Button>
              </Form>
            )}
          </Card.Body>
        </Card>
      </div>
      {serviceAllLoading ? (
        <Loader />
      ) : serviceAllLoadingError ? (
        <Message variant='danger'>{serviceAllLoadingError}</Message>
      ) : (
        services &&
        services.length !== 0 && <ServiceHeader service={services[0]} />
      )}
    </main>
  );
};

export default Services;
