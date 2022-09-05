import axios from 'axios';
import {
  CONTACT_ALL_FAIL,
  CONTACT_ALL_REQUEST,
  CONTACT_ALL_SUCCESS,
  CONTACT_BY_ID_FAIL,
  CONTACT_BY_ID_REQUEST,
  CONTACT_BY_ID_SUCCESS,
  CONTACT_DELETE_FAIL,
  CONTACT_DELETE_REQUEST,
  CONTACT_DELETE_SUCCESS,
  CONTACT_NEW_FAIL,
  CONTACT_NEW_REQUEST,
  CONTACT_NEW_SUCCESS,
  CONTACT_UPDATE_BY_ID_FAIL,
  CONTACT_UPDATE_BY_ID_REQUEST,
  CONTACT_UPDATE_BY_ID_SUCCESS,
} from '../constants/contactConstant';

export const newContact = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONTACT_NEW_REQUEST,
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

    const { data } = await axios.post('/api/contact', newData, config);

    dispatch({
      type: CONTACT_NEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_NEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const allContact = () => async (dispatch) => {
  try {
    dispatch({
      type: CONTACT_ALL_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/contact`, config);

    dispatch({
      type: CONTACT_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getContactById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONTACT_BY_ID_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/contact/${id}`, config);

    dispatch({
      type: CONTACT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateContactById = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONTACT_UPDATE_BY_ID_REQUEST,
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
      `/api/contact/${newData.id}`,
      newData,
      config
    );

    dispatch({
      type: CONTACT_UPDATE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_UPDATE_BY_ID_FAIL,
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
      type: CONTACT_DELETE_REQUEST,
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

    await axios.delete(`/api/contact/${id}`, config);

    dispatch({ type: CONTACT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: CONTACT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
