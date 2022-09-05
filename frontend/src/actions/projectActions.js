import axios from 'axios';
import {
  PROJECT_ALL_FAIL,
  PROJECT_ALL_REQUEST,
  PROJECT_ALL_SUCCESS,
  PROJECT_BY_ID_FAIL,
  PROJECT_BY_ID_REQUEST,
  PROJECT_BY_ID_SUCCESS,
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_IMAGE_DELETE_FAIL,
  PROJECT_IMAGE_DELETE_REQUEST,
  PROJECT_IMAGE_DELETE_SUCCESS,
  PROJECT_IMAGE_NEW_FAIL,
  PROJECT_IMAGE_NEW_REQUEST,
  PROJECT_IMAGE_NEW_SUCCESS,
  PROJECT_NEW_FAIL,
  PROJECT_NEW_REQUEST,
  PROJECT_NEW_SUCCESS,
  PROJECT_UPDATE_BY_ID_FAIL,
  PROJECT_UPDATE_BY_ID_REQUEST,
  PROJECT_UPDATE_BY_ID_SUCCESS,
} from '../constants/projectConstant';

export const newProject = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_NEW_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post('/api/project', newData, config);

    dispatch({
      type: PROJECT_NEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_NEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const allProject = () => async (dispatch) => {
  try {
    dispatch({
      type: PROJECT_ALL_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/project`, config);

    dispatch({
      type: PROJECT_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProjectById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_BY_ID_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/project/${id}`, config);

    dispatch({
      type: PROJECT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProjectById = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_UPDATE_BY_ID_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/project/${newData.id}`,
      newData,
      config
    );

    dispatch({
      type: PROJECT_UPDATE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_UPDATE_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteActivity = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/project/${id}`, config);

    dispatch({ type: PROJECT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: PROJECT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

///////////////////// Project Image /////////////////////////

export const newProjectImage = (imageData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_IMAGE_NEW_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post('/api/project/image', imageData, config);

    dispatch({
      type: PROJECT_IMAGE_NEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_IMAGE_NEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProjectImage = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_IMAGE_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/project/image/${id}`, config);

    dispatch({ type: PROJECT_IMAGE_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: PROJECT_IMAGE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
