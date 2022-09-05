import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import Loader from '../Loader';
import { allIntro, updateIntroById } from '../../actions/introAction';
import Message from '../Message';

const Introduction = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [addImage, setAddImage] = useState(false);
  const [imageName, setImageName] = useState('');
  const [imageDescription, setImageDescription] = useState('');
  const [eventId, setEventId] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState([]);

  const intrAll = useSelector((state) => state.intrAll);
  const { loading: introLoading, error: introLoadingError, intro } = intrAll;

  const intrUpdate = useSelector((state) => state.intrUpdate);
  const { loading, error, success } = intrUpdate;

  useEffect(() => {
    if (success) {
      console.log(success);
      dispatch(allIntro());
    }
    if (error) {
      console.log(error);
    }
  }, [success, error, dispatch]);

  useEffect(() => {
    if (!intro || intro.length === 0) {
      dispatch(allIntro());
    } else {
      setId(intro[0].introId);
      setTitle(intro[0].title);
      setBody(intro[0].body);
    }

    if (introLoadingError) {
      console.log(introLoadingError);
    }
  }, [dispatch, intro, introLoadingError]);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log('submited');
    console.log(title, body);
    dispatch(updateIntroById({ id, title, body }));
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
        <Card border='info'>
          <Card.Header className='text-center' as='h2'>
            Welcome To the Introduction!
          </Card.Header>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='title'>
                <Form.Label>Add Title</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Please Enter A Title..'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='body'>
                <Form.Label>Add Body</Form.Label>
                <CKEditor
                  editor={ClassicEditor}
                  data={body}
                  onChange={(e, editor) => {
                    const data = editor.getData();
                    setBody(data);
                  }}
                />
              </Form.Group>

              {/* <Form.Group controlId='image'>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Enter image url..'
                  value={uploadedFiles}
                  onChange={(e) => setUploadedFiles(e.target.value)}
                ></Form.Control>
                <Form.Control
                  type='file'
                  multiple
                  onChange={uploadFileHandler}
                />
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
              )} */}
              <br />
              <Button type='submit' variant='info'>
                <i className='fas fa-plus' /> Add
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>

      {/* section in Homepage */}
      {introLoading ? (
        <Loader />
      ) : introLoadingError ? (
        <Message variant='danger'>{introLoadingError}</Message>
      ) : (
        intro &&
        intro.length !== 0 && (
          <div id='intro' className='basic-1 bg-gray'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6'>
                  <h1>{intro[0].title}</h1>
                </div>{' '}
                {/* end of col */}
                <div className='col-lg-6'>
                  <div className='text-container'>{parse(intro[0].body)}</div>{' '}
                  {/* end of text-container */}
                </div>{' '}
                {/* end of col */}
              </div>{' '}
              {/* end of row */}
            </div>{' '}
            {/* end of container */}
          </div>
        )
      )}
    </main>
  );
};

export default Introduction;
