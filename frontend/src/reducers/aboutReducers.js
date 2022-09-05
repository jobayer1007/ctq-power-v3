import {
  ABOUT_ALL_FAIL,
  ABOUT_ALL_REQUEST,
  ABOUT_ALL_SUCCESS,
  ABOUT_BY_ID_FAIL,
  ABOUT_BY_ID_REQUEST,
  ABOUT_BY_ID_RESET,
  ABOUT_BY_ID_SUCCESS,
  ABOUT_DELETE_FAIL,
  ABOUT_DELETE_REQUEST,
  ABOUT_DELETE_SUCCESS,
  ABOUT_NEW_FAIL,
  ABOUT_NEW_REQUEST,
  ABOUT_NEW_RESET,
  ABOUT_NEW_SUCCESS,
  ABOUT_UPDATE_BY_ID_FAIL,
  ABOUT_UPDATE_BY_ID_REQUEST,
  ABOUT_UPDATE_BY_ID_RESET,
  ABOUT_UPDATE_BY_ID_SUCCESS,
} from '../constants/aboutConstant';

export const aboutNewReducer = (state = {}, action) => {
  switch (action.type) {
    case ABOUT_NEW_REQUEST:
      return { loading: true };
    case ABOUT_NEW_SUCCESS:
      return { loading: false, success: action.payload };
    case ABOUT_NEW_FAIL:
      return { loading: false, error: action.payload };
    case ABOUT_NEW_RESET:
      return {};
    default:
      return state;
  }
};

export const aboutAllReducer = (state = { about: [] }, action) => {
  switch (action.type) {
    case ABOUT_ALL_REQUEST:
      return { loading: true };
    case ABOUT_ALL_SUCCESS:
      return {
        loading: false,
        about: action.payload,
      };
    case ABOUT_ALL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const aboutByIdReducer = (state = { about: {} }, action) => {
  switch (action.type) {
    case ABOUT_BY_ID_REQUEST:
      return { ...state, loading: true };
    case ABOUT_BY_ID_SUCCESS:
      return { loading: false, success: true, about: action.payload };
    case ABOUT_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case ABOUT_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const aboutUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ABOUT_UPDATE_BY_ID_REQUEST:
      return { loading: true };
    case ABOUT_UPDATE_BY_ID_SUCCESS:
      return { loading: false, success: true, about: action.payload };
    case ABOUT_UPDATE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case ABOUT_UPDATE_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const aboutDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ABOUT_DELETE_REQUEST:
      return { loading: true };
    case ABOUT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ABOUT_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
