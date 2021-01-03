/** @format */
import { type } from "../../constants/index";
const {
  REQUEST_FETCH_CONFIG_STORAGE_FIALURE,
  REQUEST_FETCH_CONFIG_STORAGE_SUCCESS,
} = type.Config;
const initailState = {
  configs: [],
};

const configReducer = (state = initailState, action) => {
  switch (action.type) {
    case REQUEST_FETCH_CONFIG_STORAGE_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        configs: payload,
      };
    default:
      return state;
  }
};
export default configReducer;
