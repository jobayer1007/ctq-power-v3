import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userLoginReducer } from './reducers/userReducers';
import {
  introAllReducer,
  introByIdReducer,
  introDeleteReducer,
  introNewReducer,
  introUpdateReducer,
} from './reducers/introReducers';
import {
  aboutAllReducer,
  aboutByIdReducer,
  aboutDeleteReducer,
  aboutNewReducer,
  aboutUpdateReducer,
} from './reducers/aboutReducers';
import {
  contactAllReducer,
  contactByIdReducer,
  contactDeleteReducer,
  contactNewReducer,
  contactUpdateReducer,
} from './reducers/contactReducers';
import {
  projectAllReducer,
  projectByIdReducer,
  projectDeleteReducer,
  projectImageDeleteReducer,
  projectImageNewReducer,
  projectNewReducer,
  projectUpdateReducer,
} from './reducers/projectReducers';
import {
  serviceAllReducer,
  serviceByIdReducer,
  serviceDeleteReducer,
  serviceImageDeleteReducer,
  serviceImageNewReducer,
  serviceNewReducer,
  serviceUpdateReducer,
} from './reducers/serviceReducers';
import {
  mainMenuAllReducer,
  mainMenuByIdReducer,
  mainMenuDeleteReducer,
  mainMenuNewReducer,
  mainMenuUpdateReducer,
} from './reducers/mainMenuReducers';
import {
  mattributeAllReducer,
  mattributeByIdReducer,
  mattributeDeleteReducer,
  mattributeNewReducer,
  mattributeUpdateReducer,
} from './reducers/mattributeReducers';
import {
  subMenuAllReducer,
  subMenuByIdReducer,
  subMenuDeleteReducer,
  subMenuNewReducer,
  subMenuUpdateReducer,
} from './reducers/subMenuReducers';
import {
  sattributeAllReducer,
  sattributeByIdReducer,
  sattributeDeleteReducer,
  sattributeNewReducer,
  sattributeUpdateReducer,
} from './reducers/sattributeReducers';
import {
  subMenuCatAllReducer,
  subMenuCatByIdReducer,
  subMenuCatDeleteReducer,
  subMenuCatNewReducer,
  subMenuCatUpdateReducer,
} from './reducers/subMenuCatReducers';
import {
  scattributeAllReducer,
  scattributeByIdReducer,
  scattributeDeleteReducer,
  scattributeNewReducer,
  scattributeUpdateReducer,
} from './reducers/scattributeReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,

  intrNew: introNewReducer,
  intrAll: introAllReducer,
  intrById: introByIdReducer,
  intrUpdate: introUpdateReducer,
  intrDelete: introDeleteReducer,

  aboutNew: aboutNewReducer,
  aboutAll: aboutAllReducer,
  aboutById: aboutByIdReducer,
  aboutUpdate: aboutUpdateReducer,
  aboutDelete: aboutDeleteReducer,

  contactNew: contactNewReducer,
  contactAll: contactAllReducer,
  contactById: contactByIdReducer,
  contactUpdate: contactUpdateReducer,
  contactDelete: contactDeleteReducer,

  projectNew: projectNewReducer,
  projectAll: projectAllReducer,
  projectById: projectByIdReducer,
  projectUpdate: projectUpdateReducer,
  projectDelete: projectDeleteReducer,

  projectImageNew: projectImageNewReducer,
  projectImageDelete: projectImageDeleteReducer,

  serviceNew: serviceNewReducer,
  serviceAll: serviceAllReducer,
  serviceById: serviceByIdReducer,
  serviceUpdate: serviceUpdateReducer,
  serviceDelete: serviceDeleteReducer,

  serviceImageNew: serviceImageNewReducer,
  serviceImageDelete: serviceImageDeleteReducer,

  mainMenuNew: mainMenuNewReducer,
  mainMenuAll: mainMenuAllReducer,
  mainMenuById: mainMenuByIdReducer,
  mainMenuUpdate: mainMenuUpdateReducer,
  mainMenuDelete: mainMenuDeleteReducer,

  mattributeNew: mattributeNewReducer,
  mattributeAll: mattributeAllReducer,
  mattributeById: mattributeByIdReducer,
  mattributeUpdate: mattributeUpdateReducer,
  mattributeDelete: mattributeDeleteReducer,

  subMenuNew: subMenuNewReducer,
  subMenuAll: subMenuAllReducer,
  subMenuById: subMenuByIdReducer,
  subMenuUpdate: subMenuUpdateReducer,
  subMenuDelete: subMenuDeleteReducer,

  sattributeNew: sattributeNewReducer,
  sattributeAll: sattributeAllReducer,
  sattributeById: sattributeByIdReducer,
  sattributeUpdate: sattributeUpdateReducer,
  sattributeDelete: sattributeDeleteReducer,

  subMenuCatNew: subMenuCatNewReducer,
  subMenuCatAll: subMenuCatAllReducer,
  subMenuCatById: subMenuCatByIdReducer,
  subMenuCatUpdate: subMenuCatUpdateReducer,
  subMenuCatDelete: subMenuCatDeleteReducer,

  scattributeNew: scattributeNewReducer,
  scattributeAll: scattributeAllReducer,
  scattributeById: scattributeByIdReducer,
  scattributeUpdate: scattributeUpdateReducer,
  scattributeDelete: scattributeDeleteReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };

const store = configureStore({ reducer, preloadedState: initialState });

export default store;
