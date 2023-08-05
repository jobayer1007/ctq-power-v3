import React from "react";
import parse from "html-react-parser";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SectionProject1D = ({ project }) => {
  const navigate = useNavigate();

  const openLinkHandler = () => {
    navigate(`/project/${project.subMenuId}`);
  };

  return (
    <div id="projects" className="basic-2 bg-white mb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-5">
            <div className="text-container">
              <Link to={`/project/${project.subMenuId}`}>
                <h2>{project.title}</h2>
              </Link>
              <p>
                {parse(project.details.split(/\s+/).slice(0, 20).join(" "))}...
              </p>
              <button
                className="read-more no-line green btn"
                onClick={openLinkHandler}
              >
                Learn more <span className="fas fa-long-arrow-alt-right" />
              </button>
            </div>{" "}
            {/* end of text-container */}
          </div>{" "}
          {/* end of col */}
          <div className="col-lg-6 col-xl-7">
            <div className="image-container">
              <img
                className="img-fluid"
                src={project.image}
                alt="alternative"
              />
            </div>{" "}
            {/* end of image-container */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>
  );
};

export default SectionProject1D;
