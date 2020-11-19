/** @format */

import { type } from "../../constants/index";
const { FETCH_USER_SUCCESS, FETCH_USER_FAILURE } = type.User;
const initialState = {
  users: [],
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
    default:
      return state;
  }
};
export default userReducer;
