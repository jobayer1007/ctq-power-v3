import {
  MAIN_MENU_ALL_FAIL,
  MAIN_MENU_ALL_REQUEST,
  MAIN_MENU_ALL_SUCCESS,
  MAIN_MENU_BY_ID_FAIL,
  MAIN_MENU_BY_ID_REQUEST,
  MAIN_MENU_BY_ID_RESET,
  MAIN_MENU_BY_ID_SUCCESS,
  MAIN_MENU_DELETE_FAIL,
  MAIN_MENU_DELETE_REQUEST,
  MAIN_MENU_DELETE_SUCCESS,
  MAIN_MENU_NEW_FAIL,
  MAIN_MENU_NEW_REQUEST,
  MAIN_MENU_NEW_RESET,
  MAIN_MENU_NEW_SUCCESS,
  MAIN_MENU_UPDATE_BY_ID_FAIL,
  MAIN_MENU_UPDATE_BY_ID_REQUEST,
  MAIN_MENU_UPDATE_BY_ID_RESET,
  MAIN_MENU_UPDATE_BY_ID_SUCCESS,
} from '../constants/mainMenuConstant';

export const mainMenuNewReducer = (state = {}, action) => {
  switch (action.type) {
    case MAIN_MENU_NEW_REQUEST:
      return { loading: true };
    case MAIN_MENU_NEW_SUCCESS:
      return { loading: false, success: action.payload };
    case MAIN_MENU_NEW_FAIL:
      return { loading: false, error: action.payload };
    case MAIN_MENU_NEW_RESET:
      return {};
    default:
      return state;
  }
};

export const mainMenuAllReducer = (state = {}, action) => {
  switch (action.type) {
    case MAIN_MENU_ALL_REQUEST:
      return { loading: true };
    case MAIN_MENU_ALL_SUCCESS:
      return {
        loading: false,
        mainMenus: action.payload,
      };
    case MAIN_MENU_ALL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const mainMenuByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case MAIN_MENU_BY_ID_REQUEST:
      return { ...state, loading: true };
    case MAIN_MENU_BY_ID_SUCCESS:
      return { loading: false, success: true, mainMenu: action.payload };
    case MAIN_MENU_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case MAIN_MENU_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const mainMenuUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case MAIN_MENU_UPDATE_BY_ID_REQUEST:
      return { loading: true };
    case MAIN_MENU_UPDATE_BY_ID_SUCCESS:
      return { loading: false, success: true };
    case MAIN_MENU_UPDATE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case MAIN_MENU_UPDATE_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const mainMenuDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MAIN_MENU_DELETE_REQUEST:
      return { loading: true };
    case MAIN_MENU_DELETE_SUCCESS:
      return { loading: false, success: true };
    case MAIN_MENU_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
