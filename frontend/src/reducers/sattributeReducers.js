import {
  S_ATTRIBUTE_ALL_FAIL,
  S_ATTRIBUTE_ALL_REQUEST,
  S_ATTRIBUTE_ALL_SUCCESS,
  S_ATTRIBUTE_BY_ID_FAIL,
  S_ATTRIBUTE_BY_ID_REQUEST,
  S_ATTRIBUTE_BY_ID_RESET,
  S_ATTRIBUTE_BY_ID_SUCCESS,
  S_ATTRIBUTE_DELETE_FAIL,
  S_ATTRIBUTE_DELETE_REQUEST,
  S_ATTRIBUTE_DELETE_SUCCESS,
  S_ATTRIBUTE_NEW_FAIL,
  S_ATTRIBUTE_NEW_REQUEST,
  S_ATTRIBUTE_NEW_RESET,
  S_ATTRIBUTE_NEW_SUCCESS,
  S_ATTRIBUTE_UPDATE_BY_ID_FAIL,
  S_ATTRIBUTE_UPDATE_BY_ID_REQUEST,
  S_ATTRIBUTE_UPDATE_BY_ID_RESET,
  S_ATTRIBUTE_UPDATE_BY_ID_SUCCESS,
} from '../constants/sattributeConstant';

export const sattributeNewReducer = (state = {}, action) => {
  switch (action.type) {
    case S_ATTRIBUTE_NEW_REQUEST:
      return { loading: true };
    case S_ATTRIBUTE_NEW_SUCCESS:
      return { loading: false, success: action.payload };
    case S_ATTRIBUTE_NEW_FAIL:
      return { loading: false, error: action.payload };
    case S_ATTRIBUTE_NEW_RESET:
      return {};
    default:
      return state;
  }
};

export const sattributeAllReducer = (state = { sattributes: [] }, action) => {
  switch (action.type) {
    case S_ATTRIBUTE_ALL_REQUEST:
      return { loading: true };
    case S_ATTRIBUTE_ALL_SUCCESS:
      return {
        loading: false,
        sattributes: action.payload,
      };
    case S_ATTRIBUTE_ALL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const sattributeByIdReducer = (state = { sattribute: {} }, action) => {
  switch (action.type) {
    case S_ATTRIBUTE_BY_ID_REQUEST:
      return { ...state, loading: true };
    case S_ATTRIBUTE_BY_ID_SUCCESS:
      return { loading: false, success: true, sattribute: action.payload };
    case S_ATTRIBUTE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case S_ATTRIBUTE_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const sattributeUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case S_ATTRIBUTE_UPDATE_BY_ID_REQUEST:
      return { loading: true };
    case S_ATTRIBUTE_UPDATE_BY_ID_SUCCESS:
      return { loading: false, success: true, sattribute: action.payload };
    case S_ATTRIBUTE_UPDATE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case S_ATTRIBUTE_UPDATE_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const sattributeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case S_ATTRIBUTE_DELETE_REQUEST:
      return { loading: true };
    case S_ATTRIBUTE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case S_ATTRIBUTE_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
