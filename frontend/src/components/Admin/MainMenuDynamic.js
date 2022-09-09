import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMainMenuById } from '../../actions/mainMenuActions';
import Loader from '../Loader';
import Message from '../Message';
import axios from 'axios';
import {
  deleteSubMenu,
  getSubMenuById,
  newSubMenu,
  updateSubMenuById,
} from '../../actions/subMenuActions';
import {
  SUB_MENU_BY_ID_RESET,
  SUB_MENU_UPDATE_BY_ID_RESET,
} from '../../constants/subMenuConstant';
import {
  deleteSubMenuCat,
  getSubMenuCatById,
  newSubMenuCat,
  updateSubMenuCatById,
} from '../../actions/subMenuCatActions';
import Details from './Details';
import AddSection from './Modals/AddSection';
import {
  deleteSAttribute,
  newSAttribute,
  updateSAttributeById,
} from '../../actions/sattributeActions';
import {
  deleteMAttribute,
  newMAttribute,
} from '../../actions/mattributeActions';

const MainMenuDynamic = ({ menu }) => {
  const dispatch = useDispatch();

  const [addSubmenu, setAddSubmenu] = useState(false);
  const [subMenutitle, setSubMenutitle] = useState('');
  const [subMenuDetails, setSubMenuDetails] = useState('');
  const [editSubMenu, setEditSubMenu] = useState(false);

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState([]);

  const mainMenuById = useSelector((state) => state.mainMenuById);
  const {
    loading: mainMenuByIdLoading,
    error: mainMenuByIdLoadingError,
    mainMenu,
  } = mainMenuById;

  const subMenuById = useSelector((state) => state.subMenuById);
  const {
    loading: subMenuByIdLoading,
    error: subMenuByIdError,
    subMenu,
  } = subMenuById;

  const subMenuCatById = useSelector((state) => state.subMenuCatById);
  const {
    loading: subMenuCatByIdLoading,
    error: subMenuCatByIdError,
    subMenuCat,
  } = subMenuCatById;

  const subMenuNew = useSelector((state) => state.subMenuNew);
  const {
    loading: subMenuNewLoading,
    error: subMenuNewError,
    success,
  } = subMenuNew;

  const subMenuUpdate = useSelector((state) => state.subMenuUpdate);
  const {
    loading: subMenuUpdateLoading,
    error: subMenuUpdateError,
    success: subMenuUpdateSuccess,
  } = subMenuUpdate;

  const subMenuDelete = useSelector((state) => state.subMenuDelete);
  const {
    loading: subMenuDeleteLoading,
    error: subMenuDeleteError,
    success: subMenuDeleteSuccess,
  } = subMenuDelete;

  const mattributeNew = useSelector((state) => state.mattributeNew);
  const {
    loading: mattributeNewLoading,
    error: mattributeNewError,
    success: mattributeNewSuccess,
  } = mattributeNew;

  const sattributeNew = useSelector((state) => state.sattributeNew);
  const {
    loading: sattributeNewLoading,
    error: sattributeNewError,
    success: sattributeNewSuccess,
  } = sattributeNew;

  useEffect(() => {
    if (menu.menuId) {
      dispatch(getMainMenuById(menu.menuId));
      setSubMenutitle('');
      setSubMenuDetails('');
      setUploadedFiles([]);
      setEditSubMenu(false);
      dispatch({ type: SUB_MENU_BY_ID_RESET });
      dispatch({ type: SUB_MENU_UPDATE_BY_ID_RESET });
    }

    if (menu.subMenuId) {
      dispatch(getSubMenuById(menu.subMenuId));
      setSubMenutitle('');
      setSubMenuDetails('');
      setUploadedFiles([]);
      setEditSubMenu(false);
      dispatch({ type: SUB_MENU_BY_ID_RESET });
      dispatch({ type: SUB_MENU_UPDATE_BY_ID_RESET });
    }
  }, [
    dispatch,
    menu.menuId,
    menu.subMenuId,
    success,
    subMenuUpdateSuccess,
    subMenuDeleteSuccess,
    sattributeNewSuccess,
    mattributeNewSuccess,
  ]);

  useEffect(() => {
    if (
      success ||
      subMenuUpdateSuccess ||
      subMenuDeleteSuccess ||
      mattributeNewSuccess ||
      sattributeNewSuccess
    ) {
      toast.dismiss();
      toast.success('Success');
      setAddSubmenu(false);
      setEditSubMenu(false);
      dispatch({ type: SUB_MENU_BY_ID_RESET });
      dispatch({ type: SUB_MENU_UPDATE_BY_ID_RESET });
    }
    if (
      subMenuNewError ||
      subMenuUpdateError ||
      subMenuDeleteError ||
      subMenuByIdError ||
      subMenuCatByIdError ||
      mattributeNewError ||
      sattributeNewError
    ) {
      toast.dismiss();
      toast.error(
        subMenuNewError ||
          subMenuUpdateError ||
          subMenuDeleteError ||
          subMenuByIdError ||
          subMenuCatByIdError ||
          mattributeNewError ||
          sattributeNewError
      );
    }
  }, [
    dispatch,
    success,
    subMenuNewError,
    subMenuUpdateSuccess,
    subMenuUpdateError,
    subMenuDeleteSuccess,
    subMenuDeleteError,
    subMenuByIdError,
    subMenuCatByIdError,
    mattributeNewSuccess,
    sattributeNewSuccess,
    mattributeNewError,
    sattributeNewError,
  ]);

  useEffect(() => {
    if (editSubMenu && subMenu) {
      setSubMenutitle(subMenu.title);
      setSubMenuDetails(subMenu.details);
    }

    if (editSubMenu && subMenuCat) {
      setSubMenutitle(subMenuCat.title);
      setSubMenuDetails(subMenuCat.details);
    }
    setUploadedFiles([]);
    setMessage([]);
  }, [editSubMenu, subMenu, subMenuCat]);

  // useEffect(() => {
  //   if (menu.menuId && mainMenu) {
  //     setTableData(mainMenu);
  //   }
  //   if (menu.subMenuId && subMenu) {
  //     setTableData(subMenu);
  //   }
  // }, [mainMenu, menu.menuId, menu.subMenuId, subMenu]);

  const addSubMenu = () => {
    setSubMenutitle('');
    setSubMenuDetails('');
    setUploadedFiles([]);
    setAddSubmenu(!addSubmenu);
    setEditSubMenu(false);
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

  const submitHandler = (e) => {
    e.preventDefault();

    if (menu.subMenuId) {
      if (editSubMenu) {
        dispatch(
          updateSubMenuCatById({
            id: subMenuCat.subMenuCatId,
            title: subMenutitle,
            details: subMenuDetails,
            image: uploadedFiles[0],
          })
        );
      } else {
        dispatch(
          newSubMenuCat({
            subMenuId: subMenu.subMenuId,
            title: subMenutitle,
            details: subMenuDetails,
            image: uploadedFiles[0],
          })
        );
      }
    } else {
      if (editSubMenu) {
        dispatch(
          updateSubMenuById({
            id: subMenu.subMenuId,
            title: subMenutitle,
            details: subMenuDetails,
            image: uploadedFiles[0],
          })
        );
      } else {
        dispatch(
          newSubMenu({
            mainMenuId: mainMenu.mainMenuId,
            title: subMenutitle,
            details: subMenuDetails,
            image: uploadedFiles[0],
          })
        );
      }
    }
  };

  const editSubMenuHandler = (menuId) => {
    if (menu.subMenuId) {
      dispatch(getSubMenuCatById(menuId));
    } else {
      dispatch(getSubMenuById(menuId));
    }
    setEditSubMenu(true);
    setAddSubmenu(true);
  };

  const deleteSubMenuHandler = (menuId) => {
    if (menu.subMenuId) {
      dispatch(deleteSubMenuCat(menuId));
    } else {
      dispatch(deleteSubMenu(menuId));
    }
  };

  const addSection = (addSection) => {
    if (menu.subMenuId) {
      dispatch(
        newSAttribute({
          subMenuId: menu.subMenuId,
          title: addSection.sectionTitle,
          details: addSection.sectionDetails,
          image: addSection.uploadedFiles[0],
        })
      );
    } else {
      dispatch(
        newMAttribute({
          mainMenuId: menu.menuId,
          title: addSection.sectionTitle,
          details: addSection.sectionDetails,
          image: addSection.uploadedFiles[0],
        })
      );
    }
  };

  const editSection = (editSection) => {
    if (menu.subMenuId) {
      dispatch(
        updateSAttributeById({
          id: addSection.id,
          title: addSection.sectionTitle,
          details: addSection.sectionDetails,
          image: addSection.uploadedFiles[0],
        })
      );
    } else {
      dispatch(
        newMAttribute({
          mainMenuId: menu.menuId,
          title: addSection.sectionTitle,
          details: addSection.sectionDetails,
          image: addSection.uploadedFiles[0],
        })
      );
    }
  };

  const deleteSection = (deleteSection) => {
    if (menu.subMenuId) {
      dispatch(deleteSAttribute(deleteSection.id));
    } else {
      dispatch(deleteMAttribute(deleteSection.id));
    }
  };

  console.log(mainMenu);

  return (
    <main>
      <ToastContainer />
      <div className=' align-items-center justify-content-center main-content'>
        <Row>
          <Col md={{ span: 4, order: 9 }}>
            {mainMenuByIdLoading ? (
              <Loader />
            ) : mainMenuByIdLoadingError ? (
              <Message variant='danger'>{mainMenuByIdLoadingError}</Message>
            ) : (
              menu &&
              menu.title && (
                <Card>
                  <Card.Header>
                    Title: <strong>{menu.title.toUpperCase()}</strong>
                  </Card.Header>
                  <Card.Header>
                    <Button
                      className='btn btn-sm btn-outline-dark'
                      variant='transparent'
                      onClick={addSubMenu}
                    >
                      {!addSubmenu ? (
                        <> Add a Sub-menu under this title ? </>
                      ) : (
                        <div className='text-danger'>Cancel</div>
                      )}
                    </Button>
                  </Card.Header>

                  {/* Add New Attribute */}
                  <Card.Header>
                    <AddSection addSection={addSection} />
                  </Card.Header>
                  {/* Add New Attribute End*/}

                  {addSubmenu ? (
                    <Card.Body>
                      <Form onSubmit={submitHandler}>
                        <Form.Group controlId='title'>
                          <Form.Label>Add Sub-Menu Title</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='Please Enter A Ttile..'
                            value={subMenutitle}
                            onChange={(e) => setSubMenutitle(e.target.value)}
                          ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='details'>
                          <Form.Label>Add Details</Form.Label>
                          <CKEditor
                            editor={ClassicEditor}
                            data={subMenuDetails}
                            onChange={(e, editor) => {
                              const data = editor.getData();
                              setSubMenuDetails(data);
                            }}
                          />
                        </Form.Group>

                        <Form.Group controlId='image'>
                          <Form.Label>Image</Form.Label>

                          <Form.Control
                            type='file'
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
                        {editSubMenu ? (
                          <Button type='submit' variant='info'>
                            <i className='far fa-edit' /> Update
                          </Button>
                        ) : (
                          <Button type='submit' variant='info'>
                            <i className='fas fa-plus' /> Add
                          </Button>
                        )}
                      </Form>
                    </Card.Body>
                  ) : null}

                  <Card.Body>
                    <Table
                      striped
                      bordered
                      hover
                      responsive
                      className='table-sm text-center'
                    >
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      {menu && menu.subMenuId ? (
                        <tbody>
                          {subMenu &&
                          subMenu.subMenuCats &&
                          subMenu.subMenuCats.length !== 0 ? (
                            subMenu.subMenuCats.map((item, i) => (
                              <tr key={i}>
                                <>
                                  <td>{item.title}</td>

                                  <td>
                                    <Button
                                      variant='success'
                                      className='btn-sm'
                                      onClick={() =>
                                        editSubMenuHandler(item.subMenuCatId)
                                      }
                                    >
                                      <i className='far fa-edit action'></i>
                                    </Button>
                                    <Button
                                      variant='success'
                                      className='btn-sm ms-2'
                                      onClick={() =>
                                        deleteSubMenuHandler(item.subMenuCatId)
                                      }
                                    >
                                      <i className='fas fa-trash action'></i>
                                    </Button>
                                  </td>
                                </>
                              </tr>
                            ))
                          ) : (
                            <strong>No SubMenu for this title</strong>
                          )}
                        </tbody>
                      ) : (
                        <tbody>
                          {mainMenu &&
                          mainMenu.subMenus &&
                          mainMenu.subMenus.length !== 0 ? (
                            mainMenu.subMenus.map((item, i) => (
                              <tr key={i}>
                                <>
                                  <td>{item.title}</td>

                                  <td>
                                    <Button
                                      variant='success'
                                      className='btn-sm'
                                      onClick={() =>
                                        editSubMenuHandler(item.subMenuId)
                                      }
                                    >
                                      <i className='far fa-edit action'></i>
                                    </Button>
                                    <Button
                                      variant='success'
                                      className='btn-sm ms-2'
                                      onClick={() =>
                                        deleteSubMenuHandler(item.subMenuId)
                                      }
                                    >
                                      <i className='fas fa-trash action'></i>
                                    </Button>
                                  </td>
                                </>
                              </tr>
                            ))
                          ) : (
                            <strong>No SubMenu for this title</strong>
                          )}
                        </tbody>
                      )}
                    </Table>
                  </Card.Body>
                </Card>
              )
            )}
          </Col>
          <Col md={{ span: 8, order: 1 }}>
            {menu.subMenuId
              ? subMenu && (
                  <Details
                    item={subMenu}
                    editSection={editSection}
                    deleteSection={deleteSection}
                  />
                )
              : mainMenu && (
                  <Details item={mainMenu} editSection={editSection} />
                )}
          </Col>
        </Row>
      </div>
    </main>
  );
};

export default MainMenuDynamic;
