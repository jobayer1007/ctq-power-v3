import axios from 'axios';
import {
  SUB_MENU_ALL_FAIL,
  SUB_MENU_ALL_REQUEST,
  SUB_MENU_ALL_SUCCESS,
  SUB_MENU_BY_ID_FAIL,
  SUB_MENU_BY_ID_REQUEST,
  SUB_MENU_BY_ID_SUCCESS,
  SUB_MENU_DELETE_FAIL,
  SUB_MENU_DELETE_REQUEST,
  SUB_MENU_DELETE_SUCCESS,
  SUB_MENU_NEW_FAIL,
  SUB_MENU_NEW_REQUEST,
  SUB_MENU_NEW_SUCCESS,
  SUB_MENU_UPDATE_BY_ID_FAIL,
  SUB_MENU_UPDATE_BY_ID_REQUEST,
  SUB_MENU_UPDATE_BY_ID_SUCCESS,
} from '../constants/subMenuConstant';

export const newSubMenu = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUB_MENU_NEW_REQUEST,
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

    const { data } = await axios.post('/api/sub', newData, config);

    dispatch({
      type: SUB_MENU_NEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUB_MENU_NEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const allSubMenu = () => async (dispatch) => {
  try {
    dispatch({
      type: SUB_MENU_ALL_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/sub`, config);

    dispatch({
      type: SUB_MENU_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUB_MENU_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSubMenuById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUB_MENU_BY_ID_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/sub/${id}`, config);

    dispatch({
      type: SUB_MENU_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUB_MENU_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateSubMenuById = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUB_MENU_UPDATE_BY_ID_REQUEST,
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

    const { data } = await axios.put(`/api/sub/${newData.id}`, newData, config);

    dispatch({
      type: SUB_MENU_UPDATE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUB_MENU_UPDATE_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteSubMenu = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUB_MENU_DELETE_REQUEST,
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

    await axios.delete(`/api/sub/${id}`, config);

    dispatch({ type: SUB_MENU_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: SUB_MENU_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
