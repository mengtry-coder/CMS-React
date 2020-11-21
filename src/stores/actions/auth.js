/** @format */
import firebase from "../../utils/firebase";
import User from "../../model/user";
import { type } from "../../constants/index";
/**
 * distructuring action type
 */

//  test connection to firebase
const { FETCH_USER_FAILURE, FETCH_USER_SUCCESS } = type.User;

export const fetchTodSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    //Post data
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
