import {
  CONTACT_ALL_FAIL,
  CONTACT_ALL_REQUEST,
  CONTACT_ALL_SUCCESS,
  CONTACT_BY_ID_FAIL,
  CONTACT_BY_ID_REQUEST,
  CONTACT_BY_ID_RESET,
  CONTACT_BY_ID_SUCCESS,
  CONTACT_DELETE_FAIL,
  CONTACT_DELETE_REQUEST,
  CONTACT_DELETE_SUCCESS,
  CONTACT_NEW_FAIL,
  CONTACT_NEW_REQUEST,
  CONTACT_NEW_RESET,
  CONTACT_NEW_SUCCESS,
  CONTACT_UPDATE_BY_ID_FAIL,
  CONTACT_UPDATE_BY_ID_REQUEST,
  CONTACT_UPDATE_BY_ID_RESET,
  CONTACT_UPDATE_BY_ID_SUCCESS,
} from '../constants/contactConstant';

export const contactNewReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_NEW_REQUEST:
      return { loading: true };
    case CONTACT_NEW_SUCCESS:
      return { loading: false, success: action.payload };
    case CONTACT_NEW_FAIL:
      return { loading: false, error: action.payload };
    case CONTACT_NEW_RESET:
      return {};
    default:
      return state;
  }
};

export const contactAllReducer = (state = { contacts: [] }, action) => {
  switch (action.type) {
    case CONTACT_ALL_REQUEST:
      return { loading: true };
    case CONTACT_ALL_SUCCESS:
      return {
        loading: false,
        contacts: action.payload,
      };
    case CONTACT_ALL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const contactByIdReducer = (state = { contact: {} }, action) => {
  switch (action.type) {
    case CONTACT_BY_ID_REQUEST:
      return { ...state, loading: true };
    case CONTACT_BY_ID_SUCCESS:
      return { loading: false, success: true, contact: action.payload };
    case CONTACT_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case CONTACT_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const contactUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_UPDATE_BY_ID_REQUEST:
      return { loading: true };
    case CONTACT_UPDATE_BY_ID_SUCCESS:
      return { loading: false, success: true, contact: action.payload };
    case CONTACT_UPDATE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case CONTACT_UPDATE_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const contactDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_DELETE_REQUEST:
      return { loading: true };
    case CONTACT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CONTACT_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
