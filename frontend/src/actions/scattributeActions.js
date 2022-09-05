import axios from 'axios';
import {
  SC_ATTRIBUTE_ALL_FAIL,
  SC_ATTRIBUTE_ALL_REQUEST,
  SC_ATTRIBUTE_ALL_SUCCESS,
  SC_ATTRIBUTE_BY_ID_FAIL,
  SC_ATTRIBUTE_BY_ID_REQUEST,
  SC_ATTRIBUTE_BY_ID_SUCCESS,
  SC_ATTRIBUTE_DELETE_FAIL,
  SC_ATTRIBUTE_DELETE_REQUEST,
  SC_ATTRIBUTE_DELETE_SUCCESS,
  SC_ATTRIBUTE_NEW_FAIL,
  SC_ATTRIBUTE_NEW_REQUEST,
  SC_ATTRIBUTE_NEW_SUCCESS,
  SC_ATTRIBUTE_UPDATE_BY_ID_FAIL,
  SC_ATTRIBUTE_UPDATE_BY_ID_REQUEST,
  SC_ATTRIBUTE_UPDATE_BY_ID_SUCCESS,
} from '../constants/scattributeConstant';

export const newSCAttribute = (newData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SC_ATTRIBUTE_NEW_REQUEST,
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

    const { data } = await axios.post('/api/scat', newData, config);

    dispatch({
      type: SC_ATTRIBUTE_NEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SC_ATTRIBUTE_NEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const allSCAttribute = () => async (dispatch) => {
  try {
    dispatch({
      type: SC_ATTRIBUTE_ALL_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/scat`, config);

    dispatch({
      type: SC_ATTRIBUTE_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SC_ATTRIBUTE_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSCAttributeById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SC_ATTRIBUTE_BY_ID_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/scat/${id}`, config);

    dispatch({
      type: SC_ATTRIBUTE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SC_ATTRIBUTE_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateSCAttributeById =
  (newData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: SC_ATTRIBUTE_UPDATE_BY_ID_REQUEST,
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
        `/api/scat/${newData.id}`,
        newData,
        config
      );

      dispatch({
        type: SC_ATTRIBUTE_UPDATE_BY_ID_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SC_ATTRIBUTE_UPDATE_BY_ID_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteSCAttribute = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SC_ATTRIBUTE_DELETE_REQUEST,
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

    await axios.delete(`/api/scat/${id}`, config);

    dispatch({ type: SC_ATTRIBUTE_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: SC_ATTRIBUTE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
