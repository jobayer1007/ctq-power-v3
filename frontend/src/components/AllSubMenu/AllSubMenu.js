import React, { useEffect } from "react";
import parse from "html-react-parser";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProjectById } from "../../actions/projectActions";
import Loader from "../Loader";
import Message from "../Message";
import { getServiceById } from "../../actions/serviceActions";
import { getSubMenuById } from "../../actions/subMenuActions";
import { Image } from "react-bootstrap";
import { getMainMenuById } from "../../actions/mainMenuActions";

const AllSubMenu = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(params);

  const mainMenuById = useSelector((state) => state.mainMenuById);
  const {
    loading: mainMenuByIdLoading,
    error: mainMenuByIdLoadingError,
    mainMenu,
  } = mainMenuById;

  useEffect(() => {
    dispatch(getMainMenuById(params.id));
  }, [dispatch, params.id]);

  const openLinkHandler = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div id="articles" className="bg-white">
      {mainMenuByIdLoading ? (
        <Loader />
      ) : mainMenuByIdLoadingError ? (
        <Message variant="danger">{mainMenuByIdLoadingError}</Message>
      ) : (
        mainMenu && (
          <>
            <header className="ex-header">
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 offset-xl-1">
                    <h1>{mainMenu.title}</h1>
                  </div>
                </div>
              </div>
            </header>
            {/* end of ex-header */}
            {/* end of header */}

            <div>
              <div className="container">
                <div className="row">
                  <div className="ex-basic-1 pt-5 pb-5">
                    <div className="container">{parse(mainMenu.details)}</div>
                    <hr className="hr-heading" />
                  </div>

                  {mainMenu.subMenus && mainMenu.subMenus.length !== 0 ? (
                    <div className="row">
                      <div className="col-xl-12">
                        <ul className="list-unstyled">
                          {mainMenu.subMenus.map((item, i) => (
                            <li className="d-flex" key={i}>
                              <h5 className="number">{i + 1}.</h5>
                              <div className="flex-grow-1">
                                <h5>{item.title} </h5>
                                <div className="text">
                                  {parse(
                                    item.details
                                      .split(/\s+/)
                                      .slice(0, 20)
                                      .join(" ")
                                  )}
                                  <button
                                    className="read-more no-line green btn"
                                    onClick={() =>
                                      openLinkHandler(item.subMenuId)
                                    }
                                  >
                                    Learn more{" "}
                                    <span className="fas fa-long-arrow-alt-right" />
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default AllSubMenu;
