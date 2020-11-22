/** @format */
import firebase, { auth } from "../../utils/firebase";
import User from "../../model/user";
import { type } from "../../constants/index";
/**
 * distructuring action type
 */
const {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_SUCCESS,
} = type.User;
export const fetchTodSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};
export const fetchUserFailure = (message) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: message,
  };
};
export const setUser = () => {
  return async (dispatch, getState) => {
    try {
      const ref = firebase.firestore().collection("users");
      const onSnapshot = await ref.get();
      if (!onSnapshot.empty) {
        let data = [];
        for (let i = 0; i < onSnapshot.docs.length; i++) {
          const datax = onSnapshot.docs[i].data();
          const id = onSnapshot.docs[i].id;
          data.push(
            new User(
              id,
              datax.name,
              datax.email,
              datax.created_date,
              datax.avatar,
            ),
          );
        }
        console.log(data);
        dispatch(fetchTodSuccess(data));
      }
    } catch (e) {
      dispatch(fetchUserFailure(e.message));
      throw e;
    }
  };
};
/**
 * handle user login successfull
 * return type success
 */

const onUserRequestLoginSuccess = (user) => {
  console.log("User account created & signed in!");
  return {
    type: LOGIN_REQUEST_SUCCESS,
    payload: user,
  };
};

const onUserRequestLoginFailure = (message) => {
  console.log(message);
  return {
    type: LOGIN_REQUEST_FAILURE,
    payload: message,
  };
};
/**
 *
 * @param {*} credintials
 * request user log in using firebase credintials
 */
export const requestLogin = (credintials) => {
  return async (dispatch) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(credintials.email, credintials.password)
      .then(() => {
        dispatch(onUserRequestLoginSuccess());
      })
      .catch((e) => dispatch(onUserRequestLoginFailure(e.message)));
  };
};