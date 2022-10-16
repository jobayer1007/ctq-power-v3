import React, { useEffect } from 'react';

import ScrollToTop from '../components/Utils/ScrollToTopButton/ScrollToTop';

import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Introduction from '../components/Introduction/Introduction';
// import Navbar from '../components/Navbar/Navbar';
import Process from '../components/Process/Process';
import SectionProject3 from '../components/Projects/SectionProject3';
import Services from '../components/Services/Services';
import Team from '../components/Team/Team';
import Testimonials from '../components/Testimonials/Testimonials';
import Navbar1 from '../components/Navbar/Navbar1';
import SectionProject1 from '../components/Projects/SectionProject1';
import { useDispatch, useSelector } from 'react-redux';
import { allProject } from '../actions/projectActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import SectionProject2 from '../components/Projects/SectionProject2';
import Projects from '../components/Projects/Projects';
import ServicesD from '../components/Services/ServicesD';

const HomePage = () => {
  const dispatch = useDispatch();
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  const projectAll = useSelector((state) => state.projectAll);
  const {
    loading: projectAllLoading,
    error: projectAllLoadingError,
    projects,
  } = projectAll;

  useEffect(() => {
    dispatch(allProject());
  }, [dispatch]);

  console.log(projects);

  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <Introduction />
      {/* Project 1 */}
      {/* <Projects /> */}
      {/* {projectAllLoading ? (
        <Loader />
      ) : projectAllLoadingError ? (
        <Message variant='danger'>{projectAllLoadingError}</Message>
      ) : projects && projects.length !== 0 ? (
        <>
          {projects[0] && <SectionProject1 project={projects[0]} />}
          {projects[1] && <SectionProject2 project={projects[1]} />}
          {projects[2] && <SectionProject3 project={projects[2]} />}
        </>
      ) : null} */}
      {/* end of basic-2 */}
      {/* end of project 1 */}
      {/* Project 2 */}
      {/* {projectAllLoading ? (
        <Loader />
      ) : projectAllLoadingError ? (
        <Message variant='danger'>{projectAllLoadingError}</Message>
      ) : projects && projects[1] ? (
        <SectionProject2 project={projects[1]} />
      ) : null} */}
      {/* end of basic-3 */}
      {/* end of project 2 */}
      {/* Project 3 */}
      {/* <SectionProject3 /> */}
      {/* end of basic-4 */}
      {/* end of project 3 */}
      {/* Process */}
      {/* <Process /> */}
      {/* end of basic-5 */}
      {/* end of process */}
      {/* Services */}
      <ServicesD />
      {/* end of cards-1 */}
      {/* end of services */}
      {/* About */}
      <About />
      {/* end of counter */}
      {/* end of about */}
      {/* Testimonials */}
      {/* <Testimonials /> */}
      {/* end of slider-1 */}
      {/* end of testimonials */}
      {/* Team */}
      {/* <Team /> */}
      {/* end of cards-2 */}
      {/* end of team */}
      {/* Contact */}
      <Contact />
      {/* end of form-1 */}
      {/* end of contact */}
      {/* Footer */}

      {/* end of footer */}
      {/* end of footer */}

      {/* Back To Top Button */}
      {/* <button onClick={scrollToTop()} id='myBtn'>
        UP
      </button> */}
      {/* end of back to top button */}
    </div>
  );
};

export default HomePage;
