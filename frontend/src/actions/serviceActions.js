import axios from 'axios';
import {
  SERVICE_ALL_FAIL,
  SERVICE_ALL_REQUEST,
  SERVICE_ALL_SUCCESS,
  SERVICE_BY_ID_FAIL,
  SERVICE_BY_ID_REQUEST,
  SERVICE_BY_ID_SUCCESS,
  SERVICE_DELETE_FAIL,
  SERVICE_DELETE_REQUEST,
  SERVICE_DELETE_SUCCESS,
  SERVICE_IMAGE_DELETE_FAIL,
  SERVICE_IMAGE_DELETE_REQUEST,
  SERVICE_IMAGE_DELETE_SUCCESS,
  SERVICE_IMAGE_NEW_FAIL,
  SERVICE_IMAGE_NEW_REQUEST,
  SERVICE_IMAGE_NEW_SUCCESS,
  SERVICE_NEW_FAIL,
  SERVICE_NEW_REQUEST,
  SERVICE_NEW_SUCCESS,
  SERVICE_UPDATE_BY_ID_FAIL,
  SERVICE_UPDATE_BY_ID_REQUEST,
  SERVICE_UPDATE_BY_ID_SUCCESS,
} from '../constants/serviceConstant';

export const newService = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SERVICE_NEW_REQUEST,
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

    const { data } = await axios.post('/api/service', newData, config);

    dispatch({
      type: SERVICE_NEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_NEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const allService = () => async (dispatch) => {
  try {
    dispatch({
      type: SERVICE_ALL_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/service`, config);

    dispatch({
      type: SERVICE_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getServiceById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SERVICE_BY_ID_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/service/${id}`, config);

    dispatch({
      type: SERVICE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateServiceById = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SERVICE_UPDATE_BY_ID_REQUEST,
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
      `/api/service/${newData.id}`,
      newData,
      config
    );

    dispatch({
      type: SERVICE_UPDATE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_UPDATE_BY_ID_FAIL,
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
      type: SERVICE_DELETE_REQUEST,
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

    await axios.delete(`/api/service/${id}`, config);

    dispatch({ type: SERVICE_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: SERVICE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

///////////////////// Service Image /////////////////////////

export const newServiceImage = (imageData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SERVICE_IMAGE_NEW_REQUEST,
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

    const { data } = await axios.post('/api/service/image', imageData, config);

    dispatch({
      type: SERVICE_IMAGE_NEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_IMAGE_NEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteServiceImage = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SERVICE_IMAGE_DELETE_REQUEST,
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

    await axios.delete(`/api/service/image/${id}`, config);

    dispatch({ type: SERVICE_IMAGE_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: SERVICE_IMAGE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
