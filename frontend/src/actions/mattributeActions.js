import axios from 'axios';
import {
  M_ATTRIBUTE_ALL_FAIL,
  M_ATTRIBUTE_ALL_REQUEST,
  M_ATTRIBUTE_ALL_SUCCESS,
  M_ATTRIBUTE_BY_ID_FAIL,
  M_ATTRIBUTE_BY_ID_REQUEST,
  M_ATTRIBUTE_BY_ID_SUCCESS,
  M_ATTRIBUTE_DELETE_FAIL,
  M_ATTRIBUTE_DELETE_REQUEST,
  M_ATTRIBUTE_DELETE_SUCCESS,
  M_ATTRIBUTE_NEW_FAIL,
  M_ATTRIBUTE_NEW_REQUEST,
  M_ATTRIBUTE_NEW_SUCCESS,
  M_ATTRIBUTE_UPDATE_BY_ID_FAIL,
  M_ATTRIBUTE_UPDATE_BY_ID_REQUEST,
  M_ATTRIBUTE_UPDATE_BY_ID_SUCCESS,
} from '../constants/mattributeConstant';

export const newMAttribute = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: M_ATTRIBUTE_NEW_REQUEST,
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

    const { data } = await axios.post('/api/mat', newData, config);

    dispatch({
      type: M_ATTRIBUTE_NEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: M_ATTRIBUTE_NEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const allMAttribute = () => async (dispatch) => {
  try {
    dispatch({
      type: M_ATTRIBUTE_ALL_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/mat`, config);

    dispatch({
      type: M_ATTRIBUTE_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: M_ATTRIBUTE_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMAttributeById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: M_ATTRIBUTE_BY_ID_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/mat/${id}`, config);

    dispatch({
      type: M_ATTRIBUTE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: M_ATTRIBUTE_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateMAttributeById = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: M_ATTRIBUTE_UPDATE_BY_ID_REQUEST,
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

    const { data } = await axios.put(`/api/mat/${newData.id}`, newData, config);

    dispatch({
      type: M_ATTRIBUTE_UPDATE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: M_ATTRIBUTE_UPDATE_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteMAttribute = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: M_ATTRIBUTE_DELETE_REQUEST,
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

    await axios.delete(`/api/mat/${id}`, config);

    dispatch({ type: M_ATTRIBUTE_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: M_ATTRIBUTE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
