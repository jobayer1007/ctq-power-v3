import {
  SUB_MENU_CAT_ALL_FAIL,
  SUB_MENU_CAT_ALL_REQUEST,
  SUB_MENU_CAT_ALL_SUCCESS,
  SUB_MENU_CAT_BY_ID_FAIL,
  SUB_MENU_CAT_BY_ID_REQUEST,
  SUB_MENU_CAT_BY_ID_RESET,
  SUB_MENU_CAT_BY_ID_SUCCESS,
  SUB_MENU_CAT_DELETE_FAIL,
  SUB_MENU_CAT_DELETE_REQUEST,
  SUB_MENU_CAT_DELETE_SUCCESS,
  SUB_MENU_CAT_NEW_FAIL,
  SUB_MENU_CAT_NEW_REQUEST,
  SUB_MENU_CAT_NEW_RESET,
  SUB_MENU_CAT_NEW_SUCCESS,
  SUB_MENU_CAT_UPDATE_BY_ID_FAIL,
  SUB_MENU_CAT_UPDATE_BY_ID_REQUEST,
  SUB_MENU_CAT_UPDATE_BY_ID_RESET,
  SUB_MENU_CAT_UPDATE_BY_ID_SUCCESS,
} from '../constants/subMenuCatConstant';

export const subMenuCatNewReducer = (state = {}, action) => {
  switch (action.type) {
    case SUB_MENU_CAT_NEW_REQUEST:
      return { loading: true };
    case SUB_MENU_CAT_NEW_SUCCESS:
      return { loading: false, success: action.payload };
    case SUB_MENU_CAT_NEW_FAIL:
      return { loading: false, error: action.payload };
    case SUB_MENU_CAT_NEW_RESET:
      return {};
    default:
      return state;
  }
};

export const subMenuCatAllReducer = (state = { subMenuCats: [] }, action) => {
  switch (action.type) {
    case SUB_MENU_CAT_ALL_REQUEST:
      return { loading: true };
    case SUB_MENU_CAT_ALL_SUCCESS:
      return {
        loading: false,
        subMenuCats: action.payload,
      };
    case SUB_MENU_CAT_ALL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const subMenuCatByIdReducer = (state = { subMenuCat: {} }, action) => {
  switch (action.type) {
    case SUB_MENU_CAT_BY_ID_REQUEST:
      return { ...state, loading: true };
    case SUB_MENU_CAT_BY_ID_SUCCESS:
      return { loading: false, success: true, subMenuCat: action.payload };
    case SUB_MENU_CAT_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case SUB_MENU_CAT_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const subMenuCatUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SUB_MENU_CAT_UPDATE_BY_ID_REQUEST:
      return { loading: true };
    case SUB_MENU_CAT_UPDATE_BY_ID_SUCCESS:
      return { loading: false, success: true, subMenuCat: action.payload };
    case SUB_MENU_CAT_UPDATE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    case SUB_MENU_CAT_UPDATE_BY_ID_RESET:
      return {};
    default:
      return state;
  }
};

export const subMenuCatDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SUB_MENU_CAT_DELETE_REQUEST:
      return { loading: true };
    case SUB_MENU_CAT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SUB_MENU_CAT_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
