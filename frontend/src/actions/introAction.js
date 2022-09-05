import axios from 'axios';
import {
  INTRO_ALL_FAIL,
  INTRO_ALL_REQUEST,
  INTRO_ALL_SUCCESS,
  INTRO_BY_ID_FAIL,
  INTRO_BY_ID_REQUEST,
  INTRO_BY_ID_SUCCESS,
  INTRO_DELETE_FAIL,
  INTRO_DELETE_REQUEST,
  INTRO_DELETE_SUCCESS,
  INTRO_NEW_FAIL,
  INTRO_NEW_REQUEST,
  INTRO_NEW_SUCCESS,
  INTRO_UPDATE_BY_ID_FAIL,
  INTRO_UPDATE_BY_ID_REQUEST,
  INTRO_UPDATE_BY_ID_SUCCESS,
} from '../constants/introConstant';

export const newIntro = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: INTRO_NEW_REQUEST,
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

    const { data } = await axios.post('/api/intro', newData, config);

    dispatch({
      type: INTRO_NEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: INTRO_NEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const allIntro = () => async (dispatch) => {
  try {
    dispatch({
      type: INTRO_ALL_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/intro`, config);

    dispatch({
      type: INTRO_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: INTRO_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getIntroById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: INTRO_BY_ID_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/intro/${id}`, config);

    dispatch({
      type: INTRO_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: INTRO_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateIntroById = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: INTRO_UPDATE_BY_ID_REQUEST,
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
      `/api/intro/${newData.id}`,
      newData,
      config
    );

    dispatch({
      type: INTRO_UPDATE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: INTRO_UPDATE_BY_ID_FAIL,
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
      type: INTRO_DELETE_REQUEST,
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

    await axios.delete(`/api/intro/${id}`, config);

    dispatch({ type: INTRO_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: INTRO_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
