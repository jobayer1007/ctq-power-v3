import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ControlBarSide from "../components/ControlBar/ControlBarSide";
import ControlBarTop from "../components/ControlBar/ControlBarTop";
import Dashboard from "../components/Admin/Dashboard";
import Introduction from "../components/Admin/Introduction";
import About from "../components/Admin/About";
import Contact from "../components/Admin/Contact";
import Projects from "../components/Admin/Projects";
import Services from "../components/Admin/Services";
import Project1 from "../components/Admin/Project1";
import Project2 from "../components/Admin/Project2";
import Project3 from "../components/Admin/Project3";
import { allMainMenu } from "../actions/mainMenuActions";
import ControlBarSideDynamic from "../components/ControlBar/ControlBarSideDynamic";
import DashboardDynamic from "../components/Admin/DashboardDynamic";
import MainMenuDynamic from "../components/Admin/MainMenuDynamic";
import SideBar from "../components/ControlBar/SideBar";

const AdminPageDynamic = ({ history, match }) => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const opTitle = params.optitle;

  const [urlInfoDynamic, setUrlInfoDynamic] = useState([
    { opTitle: "dashboard", title: "Dashboard", groupIndex: "0" },
  ]);
  const [urlInfoBox, setUrlInfoBox] = useState({});
  const [showSideCntrlBar, setShowSideCntrlBar] = useState(true);

  const { userInfo } = useSelector((state) => state.userLogin);

  const mainMenuAll = useSelector((state) => state.mainMenuAll);
  const {
    loading: mainMenuAllLoading,
    error: mainMenuAllLoadingError,
    mainMenus,
  } = mainMenuAll;

  useEffect(() => {
    if (!mainMenus) {
      dispatch(allMainMenu());
    }

    if (mainMenus && mainMenus.length > 0) {
      const set = [
        {
          opTitle: "dashboard",
          title: "Dashboard",
          groupIndex: "0",
          menuId: "1",
        },
      ];

      mainMenus.map((menu, i) => {
        set.push({
          opTitle: menu.title.toLowerCase(),
          title: menu.title.toUpperCase(),
          groupIndex: i + Number(1),
          menuId: menu.mainMenuId,
        });
        if (menu.subMenus && menu.subMenus.length !== 0) {
          menu.subMenus.map((subMenu) => {
            set.push({
              opTitle: subMenu.title.toLowerCase(),
              title: subMenu.title.toUpperCase(),
              groupIndex: i + Number(1),
              subMenuId: subMenu.subMenuId,
            });
          });
        }
      });
      setUrlInfoDynamic(set);
    }
  }, [dispatch, mainMenus]);

  useEffect(() => {
    if (
      userInfo &&
      (userInfo.userRole === "admin" || userInfo.userRole === "systemAdmin")
    ) {
      if (opTitle && urlInfoDynamic) {
        const infoBox = urlInfoDynamic.find((info) => info.opTitle === opTitle);
        if (infoBox) {
          setUrlInfoBox(infoBox);
        } else {
          navigate("/admin/dashboard");
        }
      } else {
        navigate("/admin/dashboard");
      }
    } else {
      navigate("/login");
    }
  }, [history, userInfo, opTitle, navigate]);

  console.log({ mainMenus });
  console.log({ urlInfoDynamic });

  return (
    <main>
      <>
        {userInfo &&
        (userInfo.userRole === "admin" ||
          userInfo.userRole === "systemAdmin") &&
        opTitle &&
        urlInfoBox ? (
          <div className="main-content pt-5">
            {/*--- Control Bar Top 1 ---*/}
            {/* <ControlBarTop
              infoBox={{
                currentURL: window.location.pathname,
                groupIndex: urlInfoBox.groupIndex,
                adminName: userInfo.userName,
              }}
              showSideCntrlBar={showSideCntrlBar}
              setShowSideCntrlBar={setShowSideCntrlBar}
            /> */}

            <Row className="m-0" style={{ minHeight: "100vh" }}>
              {/*--- Control Bar Side 1 ---*/}
              {showSideCntrlBar && (
                <Col
                  className="p-0 bg-black border-top border-end border-dark border-3"
                  style={{
                    minWidth: "fit-content",
                    maxWidth: "fit-content",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                >
                  <ControlBarSideDynamic
                    infoBox={{
                      currentURL: window.location.pathname,
                      groupIndex: urlInfoBox.groupIndex,
                      userInfo: userInfo,
                    }}
                  />
                </Col>
              )}

              <Col
                className="p-3"
                style={{
                  width: "50%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              >
                {/*--- Control Bar Top 2 ---*/}
                <>
                  {/* <Row className='mt-4'>
                            <Col>
                                <ControlBarTop2
                                    infoBox={{
                                        opTitle: urlInfoBox.title,
                                        adminName: (userInfo.userName)
                                    }}
                                />
                            </Col>
                        </Row> */}
                </>

                {/*--- SECTION ---*/}
                {
                  // opTitle === 'dashboard' ? (
                  //     <AdminDashboard1 />
                  // ) :

                  // Inventory ---
                  opTitle === "dashboard" ? (
                    <DashboardDynamic history={history} />
                  ) : (
                    urlInfoBox.menuId !== "1" && (
                      <MainMenuDynamic history={history} menu={urlInfoBox} />
                    )
                  )
                  // Mail Box ---
                  // (opTitle === 'inbox') ? <AdminAnalytics1 /> :
                  // (opTitle === 'viewmail') ? <AdminAnalytics1 /> :
                  // (opTitle === 'composemail') ? <AdminAnalytics1 /> :
                  // (opTitle === 'brandlist') ? <AdminDashboard1 /> :
                  // <AdminDashboard1 />
                }
              </Col>
            </Row>
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-center main-content">
            <h1 className="text-center text-light">
              Upps! Something went wrong!
            </h1>
          </div>
        )}
      </>
    </main>
  );
};

export default AdminPageDynamic;
