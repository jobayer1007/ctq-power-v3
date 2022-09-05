import {
  SUB_MENU_ALL_FAIL,
  SUB_MENU_ALL_REQUEST,
  SUB_MENU_ALL_SUCCESS,
  SUB_MENU_BY_ID_FAIL,
  SUB_MENU_BY_ID_REQUEST,
  SUB_MENU_BY_ID_RESET,
  SUB_MENU_BY_ID_SUCCESS,
  SUB_MENU_DELETE_FAIL,
  SUB_MENU_DELETE_REQUEST,
  SUB_MENU_DELETE_SUCCESS,
  SUB_MENU_NEW_FAIL,
  SUB_MENU_NEW_REQUEST,
  SUB_MENU_NEW_RESET,
  SUB_MENU_NEW_SUCCESS,
  SUB_MENU_UPDATE_BY_ID_FAIL,
  SUB_MENU_UPDATE_BY_ID_REQUEST,
  SUB_MENU_UPDATE_BY_ID_RESET,
  SUB_MENU_UPDATE_BY_ID_SUCCESS,
} from '../constants/subMenuConstant';

export const subMenuNewReducer = (state = {}, action) => {
  switch (action.type) {
    case SUB_MENU_NEW_REQUEST:
      return { loading: true };
    case SUB_MENU_NEW_SUCCESS:
      return { loading: false, success: action.payload };
    case SUB_MENU_NEW_FAIL:
      return { loading: false, error: action.payload };
    case SUB_MENU_NEW_RESET:
      return {};
    default:
      return state;
  }
};

export const subMenuAllReducer = (state = { subMenus: [] }, action) => {
  switch (action.type) {
    case SUB_MENU_ALL_REQUEST:
      return { loading: true };
    case SUB_MENU_ALL_SUCCESS:
      return {
        loading: false,
        subMenus: action.payload,
      };
    case SUB_MENU_ALL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const subMenuByIdReducer = (state = { subMenu: {} }, action) => {
  switch (action.type) {
    case SUB_MENU_BY_ID_REQUEST:
      return { ...state, loading: true };
    case SUB_MENU_BY_ID_SUCCESS:
      return { loading: false, success: true, subMenu: action.payload };
    case SUB_MENU_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case SUB_MENU_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const subMenuUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SUB_MENU_UPDATE_BY_ID_REQUEST:
      return { loading: true };
    case SUB_MENU_UPDATE_BY_ID_SUCCESS:
      return { loading: false, success: true, subMenu: action.payload };
    case SUB_MENU_UPDATE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case SUB_MENU_UPDATE_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const subMenuDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SUB_MENU_DELETE_REQUEST:
      return { loading: true };
    case SUB_MENU_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SUB_MENU_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
