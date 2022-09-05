import {
  PROJECT_ALL_FAIL,
  PROJECT_ALL_REQUEST,
  PROJECT_ALL_SUCCESS,
  PROJECT_BY_ID_FAIL,
  PROJECT_BY_ID_REQUEST,
  PROJECT_BY_ID_RESET,
  PROJECT_BY_ID_SUCCESS,
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_IMAGE_DELETE_FAIL,
  PROJECT_IMAGE_DELETE_REQUEST,
  PROJECT_IMAGE_DELETE_RESET,
  PROJECT_IMAGE_DELETE_SUCCESS,
  PROJECT_IMAGE_NEW_FAIL,
  PROJECT_IMAGE_NEW_REQUEST,
  PROJECT_IMAGE_NEW_RESET,
  PROJECT_IMAGE_NEW_SUCCESS,
  PROJECT_NEW_FAIL,
  PROJECT_NEW_REQUEST,
  PROJECT_NEW_RESET,
  PROJECT_NEW_SUCCESS,
  PROJECT_UPDATE_BY_ID_FAIL,
  PROJECT_UPDATE_BY_ID_REQUEST,
  PROJECT_UPDATE_BY_ID_RESET,
  PROJECT_UPDATE_BY_ID_SUCCESS,
} from '../constants/projectConstant';

export const projectNewReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_NEW_REQUEST:
      return { loading: true };
    case PROJECT_NEW_SUCCESS:
      return { loading: false, success: action.payload };
    case PROJECT_NEW_FAIL:
      return { loading: false, error: action.payload };
    case PROJECT_NEW_RESET:
      return {};
    default:
      return state;
  }
};

export const projectAllReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case PROJECT_ALL_REQUEST:
      return { loading: true };
    case PROJECT_ALL_SUCCESS:
      return {
        loading: false,
        projects: action.payload,
      };
    case PROJECT_ALL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const projectByIdReducer = (state = { project: {} }, action) => {
  switch (action.type) {
    case PROJECT_BY_ID_REQUEST:
      return { ...state, loading: true };
    case PROJECT_BY_ID_SUCCESS:
      return { loading: false, success: true, project: action.payload };
    case PROJECT_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case PROJECT_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const projectUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_UPDATE_BY_ID_REQUEST:
      return { loading: true };
    case PROJECT_UPDATE_BY_ID_SUCCESS:
      return { loading: false, success: true, project: action.payload };
    case PROJECT_UPDATE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case PROJECT_UPDATE_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const projectDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_DELETE_REQUEST:
      return { loading: true };
    case PROJECT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PROJECT_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

/////////// Project Image /////////////

export const projectImageNewReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_IMAGE_NEW_REQUEST:
      return { loading: true };
    case PROJECT_IMAGE_NEW_SUCCESS:
      return { loading: false, success: action.payload };
    case PROJECT_IMAGE_NEW_FAIL:
      return { loading: false, error: action.payload };
    case PROJECT_IMAGE_NEW_RESET:
      return {};
    default:
      return state;
  }
};

export const projectImageDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_IMAGE_DELETE_REQUEST:
      return { loading: true };
    case PROJECT_IMAGE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PROJECT_IMAGE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case PROJECT_IMAGE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
