import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import Loader from '../Loader';
import { allIntro, updateIntroById } from '../../actions/introAction';
import Message from '../Message';
import { Link } from 'react-router-dom';
import {
  allProject,
  newProject,
  updateProjectById,
} from '../../actions/projectActions';
import ProjectDetails from '../Projects/ProjectDetails';
import SectionProject3 from '../Projects/SectionProject3';

const Project3 = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [details, setDetails] = useState('');
  const [openLink, setOpenLink] = useState(false);

  const [addImage, setAddImage] = useState(false);
  const [imageName, setImageName] = useState('');
  const [imageDescription, setImageDescription] = useState('');
  const [eventId, setEventId] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState([]);

  const projectAll = useSelector((state) => state.projectAll);
  const {
    loading: projectAllLoading,
    error: projectAllLoadingError,
    projects,
  } = projectAll;

  const projectUpdate = useSelector((state) => state.projectUpdate);
  const { loading, error, success } = projectUpdate;

  useEffect(() => {
    if (success) {
      console.log(success);
      dispatch(allProject());
    }
    if (error) {
      console.log(error);
    }
  }, [success, error, dispatch]);

  useEffect(() => {
    if (!projects || projects.length === 0) {
      dispatch(allProject());
    }
    if (projects && projects.length !== 0 && projects[2]) {
      setId(projects[2].projectId);
      setName(projects[2].name);
      setSummary(projects[2].summary);
      // setDetails(projects[2].details);
      setDetails('');
    }

    if (projectAllLoadingError) {
      console.log(projectAllLoadingError);
    }
  }, [dispatch, projectAllLoadingError, projects]);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log('submited');
    console.log('name', name);
    console.log('summary', summary);
    console.log('details', details);
    console.log('image', uploadedFiles[0]);
    dispatch(
      updateProjectById({ id, name, summary, details, image: uploadedFiles[0] })
    );
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

  // const openLinkHandler = (e) => {
  //   e.preventDefault();

  //   setOpenLink(!openLink);
  // };

  return (
    <main>
      <div className='d-flex align-items-center justify-content-center main-content mb-3'>
        {/* <h1 className='text-center text-light'>Welcom To the Introduction!</h1> */}
        <Card border='info'>
          <Card.Header className='text-center' as='h2'>
            Welcom To the Project: Section 2
          </Card.Header>
          <Card.Body>
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
                <Form.Label>Add Short Summary</Form.Label>
                <CKEditor
                  editor={ClassicEditor}
                  data={summary}
                  onChange={(e, editor) => {
                    const data = editor.getData();
                    setSummary(data);
                  }}
                />
              </Form.Group>

              <Form.Group controlId='details'>
                <Form.Label>Add Deatils</Form.Label>
                <CKEditor
                  editor={ClassicEditor}
                  data={details}
                  onChange={(e, editor) => {
                    const data = editor.getData();
                    setDetails(data);
                  }}
                />
              </Form.Group>

              <Form.Group controlId='image'>
                <Form.Label>Image</Form.Label>
                {/* <Form.Control
                  type='text'
                  placeholder='Enter image url..'
                  value={uploadedFiles}
                  onChange={(e) => setUploadedFiles(e.target.value)}
                ></Form.Control> */}
                <Form.Control
                  type='file'
                  // multiple
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
              )}
              <br />
              <Button type='submit' variant='info'>
                <i className='fas fa-plus' /> Add
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>

      {/* section in Homepage */}
      {projectAllLoading ? (
        <Loader />
      ) : projectAllLoadingError ? (
        <Message variant='danger'>{projectAllLoadingError}</Message>
      ) : (
        projects &&
        projects.length !== 0 &&
        projects[2] && <SectionProject3 project={projects[2]} />
      )}
    </main>
  );
};

export default Project3;
