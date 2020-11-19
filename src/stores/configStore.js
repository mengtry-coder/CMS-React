/** @format
 * create store
 */

import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./reducers/auth";
const rootReducer = combineReducers({
  user: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
