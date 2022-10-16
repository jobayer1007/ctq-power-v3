import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';

import { getMainMenuById } from '../../actions/mainMenuActions';
import Loader from '../Loader';
import Message from '../Message';
import SectionProject1D from './SectionProject1D';
import SectionProject2D from './SectionProject2D';
import SectionProject3D from './SectionProject3D';

const Projects = ({ projects }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMainMenuById('b8ea08d2-7ccb-4ac8-be23-bcbea28a5eaf'));
  }, [dispatch]);

  const listProjects = () => {
    navigate(`/all/${projects.mainMenuId}`);
  };

  console.log(projects);

  return (
    <>
      <div className='row bg-light text-center'>
        <div className='col-lg-12'>
          <h2 className='h2-heading'>PROJECTS</h2>
          <p className='p-heading'>{parse(projects.details)}</p>
          <Button
            variant='transparent'
            className='btn btn-outline-success'
            onClick={listProjects}
          >
            View all projects
          </Button>
        </div>
      </div>

      <>
        {projects.subMenus && projects.subMenus[0] && (
          <SectionProject1D project={projects.subMenus[0]} />
        )}
        {projects.subMenus && projects.subMenus[1] && (
          <SectionProject2D project={projects.subMenus[1]} />
        )}
        {projects.subMenus && projects.subMenus[2] && (
          <SectionProject3D project={projects.subMenus[2]} />
        )}
      </>
    </>
  );
};

export default Projects;
