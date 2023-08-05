import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "../Loader";
import Message from "../Message";
import {
  allMainMenu,
  getMainMenuById,
  newMainMenu,
  updateMainMenuById,
} from "../../actions/mainMenuActions";
import {
  MAIN_MENU_BY_ID_RESET,
  MAIN_MENU_UPDATE_BY_ID_RESET,
} from "../../constants/mainMenuConstant";

const DashboardDynamic = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [details, setDetails] = useState("");

  const [addImage, setAddImage] = useState(false);
  const [imageName, setImageName] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [eventId, setEventId] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState([]);

  const [openMenuAddForm, setOpenMenuAddForm] = useState(false);
  const [editMenu, setEditMenu] = useState(false);

  const mainMenuAll = useSelector((state) => state.mainMenuAll);
  const {
    loading: mainMenuAllLoading,
    error: mainMenuAllLoadingError,
    mainMenus,
  } = mainMenuAll;

  const mainMenuById = useSelector((state) => state.mainMenuById);
  const {
    loading: mainMenuByIdLoading,
    error: mainMenuByIdLoadingError,
    mainMenu,
  } = mainMenuById;

  const mainMenuNew = useSelector((state) => state.mainMenuNew);
  const { loading, error, success } = mainMenuNew;

  const mainMenuUpdate = useSelector((state) => state.mainMenuUpdate);
  const {
    loading: mainMenuUpdateLoading,
    error: mainMenuUpdateError,
    success: mainMenuUpdateSuccess,
  } = mainMenuUpdate;

  useEffect(() => {
    if (success || mainMenuUpdateSuccess) {
      toast.success(success || mainMenuUpdateSuccess);
      setOpenMenuAddForm(false);
      setEditMenu(false);
      dispatch({ type: MAIN_MENU_BY_ID_RESET });
      dispatch({ type: MAIN_MENU_UPDATE_BY_ID_RESET });
      dispatch(allMainMenu());
    }
    if (error || mainMenuUpdateError) {
      toast.error(error || mainMenuUpdateError);
    }
    if (mainMenu) {
      setOpenMenuAddForm(true);
      setEditMenu(true);
      setTitle(mainMenu.title);
      setDetails(mainMenu.details);
    }
  }, [
    dispatch,
    error,
    mainMenu,
    mainMenuUpdateError,
    mainMenuUpdateSuccess,
    success,
  ]);

  useEffect(() => {
    if (!mainMenus) {
      dispatch(allMainMenu());
      dispatch({ type: MAIN_MENU_BY_ID_RESET });
      dispatch({ type: MAIN_MENU_UPDATE_BY_ID_RESET });
    }
  }, [dispatch, mainMenus]);

  console.log(mainMenus);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("submited");
    console.log(title, details);
    if (editMenu) {
      dispatch(
        updateMainMenuById({
          id: mainMenu.mainMenuId,
          title,
          details,
          image: uploadedFiles[0],
        })
      );
    } else {
      dispatch(newMainMenu({ title, details, image: uploadedFiles[0] }));
    }
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
            "Content-Type": "multipart/form-data",
          },
        };

        const { data } = await axios.post("/api/upload", formData, config);
        console.log(data);
        uploadedFiles.push(data);
        setUploading(false);

        setMessage((prevMessage) => [
          ...prevMessage,
          "Uploaded the file successfully: " + file[i].name,
        ]);
      } catch (error) {
        console.error(error);
        setUploading(false);
        setMessage((prevMessage) => [
          ...prevMessage,
          "Could not upload the file: " + file[i].name,
        ]);
      }
    }
  };

  const addMenu = () => {
    setOpenMenuAddForm(!openMenuAddForm);
    setEditMenu(false);
  };

  const editMenuHandler = (menuId) => {
    console.log(menuId);
    dispatch(getMainMenuById(menuId));
  };

  const deleteMenuHandler = (menuId) => {
    console.log(menuId);
  };

  return (
    <main>
      <div className="d-flex align-items-center justify-content-center main-content mb-3">
        {/* <h1 className='text-center text-light'>Welcom To the Introduction!</h1> */}
        <ToastContainer />
        <Card border="info" className="mb-3">
          <Card.Header className="text-center" as="h3">
            Welcom To the Dashboard.
          </Card.Header>

          <Card.Header className="text-center" as="h4">
            {!openMenuAddForm ? (
              <Button onClick={addMenu}>Add a New Menu Item?</Button>
            ) : (
              <Button
                onClick={() => setOpenMenuAddForm(!openMenuAddForm)}
                variant="transparent"
                className="btn btn-outline-danger"
              >
                Cancel
              </Button>
            )}
          </Card.Header>

          {openMenuAddForm && (
            <Card.Body>
              {loading || mainMenuByIdLoading || mainMenuUpdateLoading ? (
                <Loader />
              ) : mainMenuByIdLoadingError ? (
                <Message variant="danger">{mainMenuByIdLoadingError}</Message>
              ) : (
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="name">
                    <Form.Label>Add Menu Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Please Enter A Ttile.."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="details">
                    <Form.Label>Add Details</Form.Label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={details}
                      onChange={(e, editor) => {
                        const data = editor.getData();
                        setDetails(data);
                      }}
                    />
                  </Form.Group>

                  <Form.Group controlId="image">
                    <Form.Label>Image</Form.Label>

                    <Form.Control type="file" onChange={uploadFileHandler} />
                    {uploading && <Loader />}
                  </Form.Group>
                  {message.length > 0 && (
                    <div className="alert alert-secondary" role="alert">
                      <ul>
                        {message.map((item, i) => {
                          return <li key={i}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  )}
                  <br />
                  {editMenu ? (
                    <Button type="submit" variant="info">
                      <i className="far fa-edit" /> Update
                    </Button>
                  ) : (
                    <Button type="submit" variant="info">
                      <i className="fas fa-plus" /> Add
                    </Button>
                  )}
                </Form>
              )}
            </Card.Body>
          )}
        </Card>
      </div>
      {mainMenuAllLoading ? (
        <Loader />
      ) : mainMenuAllLoadingError ? (
        <Message variant="danger">{mainMenuAllLoadingError}</Message>
      ) : (
        <>
          <Table
            striped
            bordered
            hover
            responsive
            className="table-sm text-light text-center"
          >
            <thead>
              <tr>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {mainMenus &&
                mainMenus.map((itm, index) => (
                  <tr key={index}>
                    <>
                      <td className="text-light">{itm.title}</td>

                      <td>
                        <Button
                          variant="success"
                          className="btn-sm"
                          onClick={() => editMenuHandler(itm.mainMenuId)}
                        >
                          <i className="far fa-edit action"></i>
                        </Button>
                        <Button
                          variant="success"
                          className="btn-sm ms-2"
                          onClick={() => deleteMenuHandler(itm.mainMenuId)}
                        >
                          <i className="fas fa-trash action"></i>
                        </Button>
                      </td>
                    </>
                  </tr>
                ))}
            </tbody>
          </Table>
        </>
      )}
    </main>
  );
};

export default DashboardDynamic;
