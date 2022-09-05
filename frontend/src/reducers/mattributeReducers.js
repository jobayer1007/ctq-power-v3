import {
  M_ATTRIBUTE_ALL_FAIL,
  M_ATTRIBUTE_ALL_REQUEST,
  M_ATTRIBUTE_ALL_SUCCESS,
  M_ATTRIBUTE_BY_ID_FAIL,
  M_ATTRIBUTE_BY_ID_REQUEST,
  M_ATTRIBUTE_BY_ID_RESET,
  M_ATTRIBUTE_BY_ID_SUCCESS,
  M_ATTRIBUTE_DELETE_FAIL,
  M_ATTRIBUTE_DELETE_REQUEST,
  M_ATTRIBUTE_DELETE_SUCCESS,
  M_ATTRIBUTE_NEW_FAIL,
  M_ATTRIBUTE_NEW_REQUEST,
  M_ATTRIBUTE_NEW_RESET,
  M_ATTRIBUTE_NEW_SUCCESS,
  M_ATTRIBUTE_UPDATE_BY_ID_FAIL,
  M_ATTRIBUTE_UPDATE_BY_ID_REQUEST,
  M_ATTRIBUTE_UPDATE_BY_ID_RESET,
  M_ATTRIBUTE_UPDATE_BY_ID_SUCCESS,
} from '../constants/mattributeConstant';

export const mattributeNewReducer = (state = {}, action) => {
  switch (action.type) {
    case M_ATTRIBUTE_NEW_REQUEST:
      return { loading: true };
    case M_ATTRIBUTE_NEW_SUCCESS:
      return { loading: false, success: action.payload };
    case M_ATTRIBUTE_NEW_FAIL:
      return { loading: false, error: action.payload };
    case M_ATTRIBUTE_NEW_RESET:
      return {};
    default:
      return state;
  }
};

export const mattributeAllReducer = (state = { mattributes: [] }, action) => {
  switch (action.type) {
    case M_ATTRIBUTE_ALL_REQUEST:
      return { loading: true };
    case M_ATTRIBUTE_ALL_SUCCESS:
      return {
        loading: false,
        mattributes: action.payload,
      };
    case M_ATTRIBUTE_ALL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const mattributeByIdReducer = (state = { mattribute: {} }, action) => {
  switch (action.type) {
    case M_ATTRIBUTE_BY_ID_REQUEST:
      return { ...state, loading: true };
    case M_ATTRIBUTE_BY_ID_SUCCESS:
      return { loading: false, success: true, mattribute: action.payload };
    case M_ATTRIBUTE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case M_ATTRIBUTE_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const mattributeUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case M_ATTRIBUTE_UPDATE_BY_ID_REQUEST:
      return { loading: true };
    case M_ATTRIBUTE_UPDATE_BY_ID_SUCCESS:
      return { loading: false, success: true, mattribute: action.payload };
    case M_ATTRIBUTE_UPDATE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case M_ATTRIBUTE_UPDATE_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const mattributeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case M_ATTRIBUTE_DELETE_REQUEST:
      return { loading: true };
    case M_ATTRIBUTE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case M_ATTRIBUTE_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
