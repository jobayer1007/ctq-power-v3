import {
  SC_ATTRIBUTE_ALL_FAIL,
  SC_ATTRIBUTE_ALL_REQUEST,
  SC_ATTRIBUTE_ALL_SUCCESS,
  SC_ATTRIBUTE_BY_ID_FAIL,
  SC_ATTRIBUTE_BY_ID_REQUEST,
  SC_ATTRIBUTE_BY_ID_RESET,
  SC_ATTRIBUTE_BY_ID_SUCCESS,
  SC_ATTRIBUTE_DELETE_FAIL,
  SC_ATTRIBUTE_DELETE_REQUEST,
  SC_ATTRIBUTE_DELETE_SUCCESS,
  SC_ATTRIBUTE_NEW_FAIL,
  SC_ATTRIBUTE_NEW_REQUEST,
  SC_ATTRIBUTE_NEW_RESET,
  SC_ATTRIBUTE_NEW_SUCCESS,
  SC_ATTRIBUTE_UPDATE_BY_ID_FAIL,
  SC_ATTRIBUTE_UPDATE_BY_ID_REQUEST,
  SC_ATTRIBUTE_UPDATE_BY_ID_RESET,
  SC_ATTRIBUTE_UPDATE_BY_ID_SUCCESS,
} from '../constants/scattributeConstant';

export const scattributeNewReducer = (state = {}, action) => {
  switch (action.type) {
    case SC_ATTRIBUTE_NEW_REQUEST:
      return { loading: true };
    case SC_ATTRIBUTE_NEW_SUCCESS:
      return { loading: false, success: action.payload };
    case SC_ATTRIBUTE_NEW_FAIL:
      return { loading: false, error: action.payload };
    case SC_ATTRIBUTE_NEW_RESET:
      return {};
    default:
      return state;
  }
};

export const scattributeAllReducer = (state = { scattributes: [] }, action) => {
  switch (action.type) {
    case SC_ATTRIBUTE_ALL_REQUEST:
      return { loading: true };
    case SC_ATTRIBUTE_ALL_SUCCESS:
      return {
        loading: false,
        scattributes: action.payload,
      };
    case SC_ATTRIBUTE_ALL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const scattributeByIdReducer = (state = { scattribute: {} }, action) => {
  switch (action.type) {
    case SC_ATTRIBUTE_BY_ID_REQUEST:
      return { ...state, loading: true };
    case SC_ATTRIBUTE_BY_ID_SUCCESS:
      return { loading: false, success: true, scattribute: action.payload };
    case SC_ATTRIBUTE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case SC_ATTRIBUTE_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const scattributeUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SC_ATTRIBUTE_UPDATE_BY_ID_REQUEST:
      return { loading: true };
    case SC_ATTRIBUTE_UPDATE_BY_ID_SUCCESS:
      return { loading: false, success: true, scattribute: action.payload };
    case SC_ATTRIBUTE_UPDATE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case SC_ATTRIBUTE_UPDATE_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const scattributeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SC_ATTRIBUTE_DELETE_REQUEST:
      return { loading: true };
    case SC_ATTRIBUTE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SC_ATTRIBUTE_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
