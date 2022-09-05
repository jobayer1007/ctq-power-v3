import axios from 'axios';
import {
  SUB_MENU_CAT_ALL_FAIL,
  SUB_MENU_CAT_ALL_REQUEST,
  SUB_MENU_CAT_ALL_SUCCESS,
  SUB_MENU_CAT_BY_ID_FAIL,
  SUB_MENU_CAT_BY_ID_REQUEST,
  SUB_MENU_CAT_BY_ID_SUCCESS,
  SUB_MENU_CAT_DELETE_FAIL,
  SUB_MENU_CAT_DELETE_REQUEST,
  SUB_MENU_CAT_DELETE_SUCCESS,
  SUB_MENU_CAT_NEW_FAIL,
  SUB_MENU_CAT_NEW_REQUEST,
  SUB_MENU_CAT_NEW_SUCCESS,
  SUB_MENU_CAT_UPDATE_BY_ID_FAIL,
  SUB_MENU_CAT_UPDATE_BY_ID_REQUEST,
  SUB_MENU_CAT_UPDATE_BY_ID_SUCCESS,
} from '../constants/subMenuCatConstant';

export const newSubMenuCat = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUB_MENU_CAT_NEW_REQUEST,
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

    const { data } = await axios.post('/api/cat', newData, config);

    dispatch({
      type: SUB_MENU_CAT_NEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUB_MENU_CAT_NEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const allSubMenuCat = () => async (dispatch) => {
  try {
    dispatch({
      type: SUB_MENU_CAT_ALL_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/cat`, config);

    dispatch({
      type: SUB_MENU_CAT_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUB_MENU_CAT_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSubMenuCatById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUB_MENU_CAT_BY_ID_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/cat/${id}`, config);

    dispatch({
      type: SUB_MENU_CAT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUB_MENU_CAT_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateSubMenuCatById = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUB_MENU_CAT_UPDATE_BY_ID_REQUEST,
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

    const { data } = await axios.put(`/api/cat/${newData.id}`, newData, config);

    dispatch({
      type: SUB_MENU_CAT_UPDATE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUB_MENU_CAT_UPDATE_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteSubMenuCat = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUB_MENU_CAT_DELETE_REQUEST,
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

    await axios.delete(`/api/cat/${id}`, config);

    dispatch({ type: SUB_MENU_CAT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: SUB_MENU_CAT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
