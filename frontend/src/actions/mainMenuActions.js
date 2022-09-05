import axios from 'axios';
import {
  MAIN_MENU_ALL_FAIL,
  MAIN_MENU_ALL_REQUEST,
  MAIN_MENU_ALL_SUCCESS,
  MAIN_MENU_BY_ID_FAIL,
  MAIN_MENU_BY_ID_REQUEST,
  MAIN_MENU_BY_ID_SUCCESS,
  MAIN_MENU_DELETE_FAIL,
  MAIN_MENU_DELETE_REQUEST,
  MAIN_MENU_DELETE_SUCCESS,
  MAIN_MENU_NEW_FAIL,
  MAIN_MENU_NEW_REQUEST,
  MAIN_MENU_NEW_SUCCESS,
  MAIN_MENU_UPDATE_BY_ID_FAIL,
  MAIN_MENU_UPDATE_BY_ID_REQUEST,
  MAIN_MENU_UPDATE_BY_ID_SUCCESS,
} from '../constants/mainMenuConstant';

export const newMainMenu = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MAIN_MENU_NEW_REQUEST,
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

    const { data } = await axios.post('/api/menu', newData, config);

    dispatch({
      type: MAIN_MENU_NEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MAIN_MENU_NEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const allMainMenu = () => async (dispatch) => {
  try {
    dispatch({
      type: MAIN_MENU_ALL_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/menu`, config);

    dispatch({
      type: MAIN_MENU_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MAIN_MENU_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMainMenuById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MAIN_MENU_BY_ID_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/menu/${id}`, config);

    dispatch({
      type: MAIN_MENU_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MAIN_MENU_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateMainMenuById = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MAIN_MENU_UPDATE_BY_ID_REQUEST,
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
      `/api/menu/${newData.id}`,
      newData,
      config
    );

    dispatch({
      type: MAIN_MENU_UPDATE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MAIN_MENU_UPDATE_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteMainMenu = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MAIN_MENU_DELETE_REQUEST,
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

    await axios.delete(`/api/menu/${id}`, config);

    dispatch({ type: MAIN_MENU_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: MAIN_MENU_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
