import {
  INTRO_ALL_FAIL,
  INTRO_ALL_REQUEST,
  INTRO_ALL_SUCCESS,
  INTRO_BY_ID_FAIL,
  INTRO_BY_ID_REQUEST,
  INTRO_BY_ID_RESET,
  INTRO_BY_ID_SUCCESS,
  INTRO_DELETE_FAIL,
  INTRO_DELETE_REQUEST,
  INTRO_DELETE_SUCCESS,
  INTRO_NEW_FAIL,
  INTRO_NEW_REQUEST,
  INTRO_NEW_RESET,
  INTRO_NEW_SUCCESS,
  INTRO_UPDATE_BY_ID_FAIL,
  INTRO_UPDATE_BY_ID_REQUEST,
  INTRO_UPDATE_BY_ID_RESET,
  INTRO_UPDATE_BY_ID_SUCCESS,
} from '../constants/introConstant';

export const introNewReducer = (state = {}, action) => {
  switch (action.type) {
    case INTRO_NEW_REQUEST:
      return { loading: true };
    case INTRO_NEW_SUCCESS:
      return { loading: false, success: action.payload };
    case INTRO_NEW_FAIL:
      return { loading: false, error: action.payload };
    case INTRO_NEW_RESET:
      return {};
    default:
      return state;
  }
};

export const introAllReducer = (state = { intro: [] }, action) => {
  switch (action.type) {
    case INTRO_ALL_REQUEST:
      return { loading: true };
    case INTRO_ALL_SUCCESS:
      return {
        loading: false,
        intro: action.payload,
      };
    case INTRO_ALL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const introByIdReducer = (state = { intro: {} }, action) => {
  switch (action.type) {
    case INTRO_BY_ID_REQUEST:
      return { ...state, loading: true };
    case INTRO_BY_ID_SUCCESS:
      return { loading: false, success: true, intro: action.payload };
    case INTRO_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case INTRO_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const introUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case INTRO_UPDATE_BY_ID_REQUEST:
      return { loading: true };
    case INTRO_UPDATE_BY_ID_SUCCESS:
      return { loading: false, success: true, intro: action.payload };
    case INTRO_UPDATE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case INTRO_UPDATE_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const introDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case INTRO_DELETE_REQUEST:
      return { loading: true };
    case INTRO_DELETE_SUCCESS:
      return { loading: false, success: true };
    case INTRO_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
