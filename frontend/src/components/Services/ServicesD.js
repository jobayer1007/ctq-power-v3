import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import { getMainMenuById } from "../../actions/mainMenuActions";
import { allService } from "../../actions/serviceActions";
import Loader from "../Loader";
import Message from "../Message";
import ServiceHeader from "./ServiceHeader";

const ServicesD = ({ services }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openLinkHandler = (id) => {
    navigate(`/project/${id}`);
  };
  return (
    <div id="services" className="cards-1 bg-gray text-center">
      <div className="container">
        <ServiceHeader service={services} />
        <div className="row">
          <div className="col-lg-12 card-group">
            {/* Card */}
            {services.subMenus && services.subMenus.length !== 0 ? (
              services.subMenus.map((item, i) => (
                <div className="card text-start" key={i + item.subMenuId}>
                  <div>
                    <img
                      className="img-fluid card-icon"
                      src={item.image}
                      alt="alternative"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{item.title}</h4>
                    <div className="card-text">
                      <p className="text-start">
                        {parse(
                          item.details.split(/\s+/).slice(0, 20).join(" ")
                        )}
                        {/* {parse(item.details.substring(0, 200))} ... <br /> */}
                      </p>
                      <br />
                      <span>
                        <button
                          className="read-more no-line green btn"
                          onClick={() => openLinkHandler(item.subMenuId)}
                        >
                          Learn more{" "}
                          <span className="fas fa-long-arrow-alt-right" />
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h4>No Service Defined</h4>
            )}

            {/* end of card */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>
  );
};

export default ServicesD;
