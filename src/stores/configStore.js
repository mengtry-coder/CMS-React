/** @format
 * create store
 */

import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./reducers/auth";
import mediaReducer from "./reducers/media";
import configReducer from "./reducers/config";
const rootReducer = combineReducers({
  auth: authReducer,
  media: mediaReducer,
  config: configReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
