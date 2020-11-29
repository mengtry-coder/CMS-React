/** @format
 * create store
 */

import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./reducers/auth";
import mediaReducer from "./reducers/media";
const rootReducer = combineReducers({
  auth: authReducer,
  media: mediaReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
