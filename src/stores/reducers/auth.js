/** @format */

import { type } from "../../constants/index";
import { message } from "antd";
/**
 * distructuring type import
 */
const {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_SUCCESS,
  SET_CURRENT_USER_FAILURE,
  SET_CURRENT_USER_SUCCESS,
} = type.User;
const initialState = {
  users: [],
  currentUser: [],
  errMessage: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case FETCH_USER_FAILURE:
      const mess = action.payload;
      message.error(mess);
      return {
        ...state,
      };
    case SET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case SET_CURRENT_USER_FAILURE:
      const mess2 = action.payload;
      message.error(mess2);
      return {
        ...state,
      };
    case LOGIN_REQUEST_SUCCESS:
      return { ...state };
    case LOGIN_REQUEST_FAILURE:
      const mess3 = action.payload;
      message.error(mess3);
      return { ...state };
    default:
      return state;
  }
};
export default userReducer;
