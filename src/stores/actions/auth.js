/** @format */
import firebase, { auth, firestore } from "../../utils/firebase";
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
  LOGOUT_REQUEST_FIALURE,
  LOGOUT_REQUEST_SUCCESS,
  CREATE_USER_FIALURE,
  CREATE_USER_SUCCESS,
  SET_CURRENT_USER_FAILURE,
  SET_CURRENT_USER_SUCCESS,
} = type.User;
/**
 * get firebase firestore timeStam
 */
const timestam = firebase.firestore.FieldValue.serverTimestamp();

export const fetchUserSuccess = (data) => {
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
export const setUser = (uid) => {
  return async (dispatch, getState) => {
    try {
      const ref = firestore.collection("users").where("status", "==", true);
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
              datax.phone,
              datax.created_date,
              datax.avatar,
              datax.address,
              datax.uid
            )
          );
        }
        if (uid) {
          const currentUser = data.filter((user) => user.uid === uid);
          dispatch(fetchCurrentUserSuccess(currentUser));
        }
        dispatch(fetchUserSuccess(data));
      }
    } catch (e) {
      dispatch(fetchUserFailure(e.message));
      throw e;
    }
  };
};
export const fetchCurrentUserSuccess = (data) => {
  return {
    type: SET_CURRENT_USER_SUCCESS,
    payload: data,
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
      .signInWithEmailAndPassword(credintials.email, credintials.password)
      .then(async () => {
        dispatch(onUserRequestLoginSuccess());
      })
      .catch((e) => dispatch(onUserRequestLoginFailure(e.message)));
  };
};
/**
 * on user request to logout / sing out
 */

const onUserRequestLogoutSuccess = (message) => {
  return {
    type: LOGOUT_REQUEST_SUCCESS,
    payload: message,
  };
};
const onUserRequestLogoutFailure = (message) => {
  return {
    type: LOGOUT_REQUEST_FIALURE,
    payload: message,
  };
};

export const requestLogout = () => {
  return async (dispatch) => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(onUserRequestLogoutSuccess("Logout Success!"));
      })
      .catch((e) => {
        dispatch(onUserRequestLogoutFailure(e.message));
      });
  };
};
/**
 * create user
 */

export const createUserSucess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};

export const createUserFailure = (message) => {
  return {
    type: CREATE_USER_FIALURE,
    payload: message,
  };
};

export const requestSignUp = (user, image, status) => {
  return async (dispatch) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(async () => {
        await dispatch(requestCreateUser(user, image, status));
      })
      .catch((e) => {
        createUserFailure(e.message);
        throw e;
      });
  };
};
/**
 * request create user
 */
export const requestCreateUser = (user, image, status) => {
  return async (dispatch) => {
    await firestore
      .collection("users")
      .add({
        uid: auth.currentUser.uid,
        name: user.name,
        email: user.email,
        address: user.address,
        avatar: image,
        phone: user.phone,
        created_date: timestam,
        updated_date: timestam,
        status: status,
      })
      .then(async () => {
        await dispatch(setUser());
      })
      .catch((e) => {
        throw e;
      });
  };
};
/**
 *
 * @param {*} email
 * request delete user from firebase
 */
export const requestDeleteUser = (id) => {
  return async (dispatch) => {
    await firestore
      .collection("users")
      .doc(id)
      .delete()
      .then(async () => {
        // const user = firebase.auth().currentUser;
        await dispatch(setUser());
      });
  };
};

export const requestForgotPassword = (user) => {
  return async (dispatch, getState) => {
    await firebase
      .auth()
      .sendPasswordResetEmail(user.email)
      .then((user) => {
        console.log(user);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
};

/**
 * request update usr info
 */

export const requestUpdate = (user, id, imageUrl, status) => {
  return async (dispatch) => {
    firestore
      .collection("users")
      .doc(id)
      .update({
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        avatar: imageUrl,
        status: status,
        updated_date: timestam,
      })
      .then(async () => {
        await dispatch(setUser());
      })
      .catch((e) => {
        throw e;
      });
  };
};
