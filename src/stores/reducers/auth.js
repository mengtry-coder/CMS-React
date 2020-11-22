/** @format */

import { type } from "../../constants/index";
/**
 * distructuring type import
 */
const {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_SUCCESS,
} = type.User;
const initialState = {
  users: [],
  errMessage: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        todo: action.payload,
      };
    case FETCH_USER_FAILURE:
      const mess = action.payload;
      alert(mess);
      return {
        ...state,
      };
    case LOGIN_REQUEST_SUCCESS:
      return { ...state };
    case LOGIN_REQUEST_FAILURE:
      return { ...state, errMessage: action.payload };
    default:
      return state;
  }
};
export default userReducer;
