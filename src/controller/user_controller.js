/** @format */
import firebase from "../view/user/fetch_data";
import User from "../model/user"

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FECTH_USER_FAILURE = "FECTH_USER_FAILURE";
export const fetchTodSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};
export const fetchUserFailure = (message) => {
  return {
    type: FECTH_USER_FAILURE,
    payload: message,
  };
};
export const setUser = () => {
  return async (dispatch, getState) => {
    try {
      const ref = firebase.firestore().collection("user");
      const onSnapshot = await ref.get();
      if (!onSnapshot.empty) {
        let data = [];
        for (let i = 0; i < onSnapshot.docs.length; i++) {
          const datax = onSnapshot.docs[i].data();
          data.push(
            new User(datax.title, datax.description, datax.created_date),
          );
        }
        dispatch(fetchTodSuccess(data));
      }
    } catch (e) {
      console.log("xxx");
      dispatch(fetchUserFailure(e.message));
      //   throw e;
    }
  };
};
