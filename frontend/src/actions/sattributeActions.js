import axios from 'axios';
import {
  S_ATTRIBUTE_ALL_FAIL,
  S_ATTRIBUTE_ALL_REQUEST,
  S_ATTRIBUTE_ALL_SUCCESS,
  S_ATTRIBUTE_BY_ID_FAIL,
  S_ATTRIBUTE_BY_ID_REQUEST,
  S_ATTRIBUTE_BY_ID_SUCCESS,
  S_ATTRIBUTE_DELETE_FAIL,
  S_ATTRIBUTE_DELETE_REQUEST,
  S_ATTRIBUTE_DELETE_SUCCESS,
  S_ATTRIBUTE_NEW_FAIL,
  S_ATTRIBUTE_NEW_REQUEST,
  S_ATTRIBUTE_NEW_SUCCESS,
  S_ATTRIBUTE_UPDATE_BY_ID_FAIL,
  S_ATTRIBUTE_UPDATE_BY_ID_REQUEST,
  S_ATTRIBUTE_UPDATE_BY_ID_SUCCESS,
} from '../constants/sattributeConstant';

export const newSAttribute = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: S_ATTRIBUTE_NEW_REQUEST,
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

    const { data } = await axios.post('/api/sat', newData, config);

    dispatch({
      type: S_ATTRIBUTE_NEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: S_ATTRIBUTE_NEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const allSAttribute = () => async (dispatch) => {
  try {
    dispatch({
      type: S_ATTRIBUTE_ALL_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/sat`, config);

    dispatch({
      type: S_ATTRIBUTE_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: S_ATTRIBUTE_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSAttributeById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: S_ATTRIBUTE_BY_ID_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/sat/${id}`, config);

    dispatch({
      type: S_ATTRIBUTE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: S_ATTRIBUTE_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateSAttributeById = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: S_ATTRIBUTE_UPDATE_BY_ID_REQUEST,
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

    const { data } = await axios.put(`/api/sat/${newData.id}`, newData, config);

    dispatch({
      type: S_ATTRIBUTE_UPDATE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: S_ATTRIBUTE_UPDATE_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteSAttribute = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: S_ATTRIBUTE_DELETE_REQUEST,
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

    await axios.delete(`/api/sat/${id}`, config);

    dispatch({ type: S_ATTRIBUTE_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: S_ATTRIBUTE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
