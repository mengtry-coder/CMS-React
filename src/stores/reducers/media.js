/** @format */
import { type } from "../../constants/index";
const {
  REQUEST_FETCH_MEDIA_STORAGE_FIALURE,
  REQUEST_FETCH_MEDIA_STORAGE_SUCCESS,
} = type.Media;
const initailState = {
  medias: [],
};

const mediaReducer = (state = initailState, action) => {
  switch (action.type) {
    case REQUEST_FETCH_MEDIA_STORAGE_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        medias: payload,
      };
    default:
      return state;
  }
};
export default mediaReducer;
