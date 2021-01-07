/** @format */
import { type } from "../../constants/index";
const {
  FETCH_CONFIG_SUCCESS,
  FETCH_CONFIG_FAILURE,
} = type.Config;
const initailState = {
  config: [],
};

const configReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_CONFIG_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        config: payload,
      };
    default:
      return state;
  }
};
export default configReducer;
