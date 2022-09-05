import {
  SERVICE_ALL_FAIL,
  SERVICE_ALL_REQUEST,
  SERVICE_ALL_SUCCESS,
  SERVICE_BY_ID_FAIL,
  SERVICE_BY_ID_REQUEST,
  SERVICE_BY_ID_RESET,
  SERVICE_BY_ID_SUCCESS,
  SERVICE_DELETE_FAIL,
  SERVICE_DELETE_REQUEST,
  SERVICE_DELETE_SUCCESS,
  SERVICE_IMAGE_DELETE_FAIL,
  SERVICE_IMAGE_DELETE_REQUEST,
  SERVICE_IMAGE_DELETE_RESET,
  SERVICE_IMAGE_DELETE_SUCCESS,
  SERVICE_IMAGE_NEW_FAIL,
  SERVICE_IMAGE_NEW_REQUEST,
  SERVICE_IMAGE_NEW_RESET,
  SERVICE_IMAGE_NEW_SUCCESS,
  SERVICE_NEW_FAIL,
  SERVICE_NEW_REQUEST,
  SERVICE_NEW_RESET,
  SERVICE_NEW_SUCCESS,
  SERVICE_UPDATE_BY_ID_FAIL,
  SERVICE_UPDATE_BY_ID_REQUEST,
  SERVICE_UPDATE_BY_ID_RESET,
  SERVICE_UPDATE_BY_ID_SUCCESS,
} from '../constants/serviceConstant';

export const serviceNewReducer = (state = {}, action) => {
  switch (action.type) {
    case SERVICE_NEW_REQUEST:
      return { loading: true };
    case SERVICE_NEW_SUCCESS:
      return { loading: false, success: action.payload };
    case SERVICE_NEW_FAIL:
      return { loading: false, error: action.payload };
    case SERVICE_NEW_RESET:
      return {};
    default:
      return state;
  }
};

export const serviceAllReducer = (state = { services: [] }, action) => {
  switch (action.type) {
    case SERVICE_ALL_REQUEST:
      return { loading: true };
    case SERVICE_ALL_SUCCESS:
      return {
        loading: false,
        services: action.payload,
      };
    case SERVICE_ALL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const serviceByIdReducer = (state = { service: {} }, action) => {
  switch (action.type) {
    case SERVICE_BY_ID_REQUEST:
      return { ...state, loading: true };
    case SERVICE_BY_ID_SUCCESS:
      return { loading: false, success: true, service: action.payload };
    case SERVICE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case SERVICE_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const serviceUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SERVICE_UPDATE_BY_ID_REQUEST:
      return { loading: true };
    case SERVICE_UPDATE_BY_ID_SUCCESS:
      return { loading: false, success: true, service: action.payload };
    case SERVICE_UPDATE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case SERVICE_UPDATE_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const serviceDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SERVICE_DELETE_REQUEST:
      return { loading: true };
    case SERVICE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SERVICE_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

/////////// Service Image /////////////

export const serviceImageNewReducer = (state = {}, action) => {
  switch (action.type) {
    case SERVICE_IMAGE_NEW_REQUEST:
      return { loading: true };
    case SERVICE_IMAGE_NEW_SUCCESS:
      return { loading: false, success: action.payload };
    case SERVICE_IMAGE_NEW_FAIL:
      return { loading: false, error: action.payload };
    case SERVICE_IMAGE_NEW_RESET:
      return {};
    default:
      return state;
  }
};

export const serviceImageDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SERVICE_IMAGE_DELETE_REQUEST:
      return { loading: true };
    case SERVICE_IMAGE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SERVICE_IMAGE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case SERVICE_IMAGE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
