import axios from 'axios';
import {
  ABOUT_ALL_FAIL,
  ABOUT_ALL_REQUEST,
  ABOUT_ALL_SUCCESS,
  ABOUT_BY_ID_FAIL,
  ABOUT_BY_ID_REQUEST,
  ABOUT_BY_ID_SUCCESS,
  ABOUT_DELETE_FAIL,
  ABOUT_DELETE_REQUEST,
  ABOUT_DELETE_SUCCESS,
  ABOUT_NEW_FAIL,
  ABOUT_NEW_REQUEST,
  ABOUT_NEW_SUCCESS,
  ABOUT_UPDATE_BY_ID_FAIL,
  ABOUT_UPDATE_BY_ID_REQUEST,
  ABOUT_UPDATE_BY_ID_SUCCESS,
} from '../constants/aboutConstant';

export const newAbout = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ABOUT_NEW_REQUEST,
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

    const { data } = await axios.post('/api/about', newData, config);

    dispatch({
      type: ABOUT_NEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ABOUT_NEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const allAbout = () => async (dispatch) => {
  try {
    dispatch({
      type: ABOUT_ALL_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/about`, config);

    dispatch({
      type: ABOUT_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ABOUT_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAboutById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ABOUT_BY_ID_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/about/${id}`, config);

    dispatch({
      type: ABOUT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ABOUT_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateAboutById = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ABOUT_UPDATE_BY_ID_REQUEST,
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
      `/api/about/${newData.id}`,
      newData,
      config
    );

    dispatch({
      type: ABOUT_UPDATE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ABOUT_UPDATE_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteAbout = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ABOUT_DELETE_REQUEST,
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

    await axios.delete(`/api/about/${id}`, config);

    dispatch({ type: ABOUT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: ABOUT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
