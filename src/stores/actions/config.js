/** @format */

import { type } from "../../constants/index";
import Config from "../../model/config";
import firebase, { storage, firestore } from "../../utils/firebase";
const {
  REQUEST_FETCH_CONFIG_STORAGE_FIALURE,
  REQUEST_FETCH_CONFIG_STORAGE_SUCCESS,
  FETCH_CONFIG_FAILURE,
  FETCH_CONFIG_SUCCESS,
  SET_CURRENT_CONFIG_SUCCESS
} = type.Config;
/**
 *
 * @param {*} config
 * requesting upload image to firebase storage success
 */

/**
 * request fetching config success
 */
// ==================Config Action=============
export const fetchConfigSuccess = (data) => {
  console.log(data);
  return {
    type: FETCH_CONFIG_SUCCESS,
    payload: data,
  };
};
export const fetchConfigFailure = (message) => {
  console.log("data not fetch!");
  return {
    type: FETCH_CONFIG_FAILURE,
    payload: message,
  };
};
export const requestUpdateConfig = (value, key) => {
  return async (dispatch) => {
    firestore
      .collection("config")
      .doc(key)
      .update({
        name: value.name
      })
      .then(async () => {
        await dispatch(setConfig());
      })
      .catch((e) => {
        throw e;
      });
  };
};

export const requestCreateConfig = (value) => {
  return async (dispatch) => {
    await firestore
      .collection("config")
      .add({
        name:value.name
      })
      .then(async () => {
        await dispatch(setConfig());
      })
      .catch((e) => {
        throw e;
      });
  };
};
export const setConfig = (key) => {
  return async (dispatch, getState) => {
    try {
      const ref = firestore.collection("config");
      const onSnapshot = await ref.get();
      if (!onSnapshot.empty) {
        let data = [];
        for (let i = 0; i < onSnapshot.docs.length; i++) {
          const configData = onSnapshot.docs[i].data();
          const key = onSnapshot.docs[i].id;
          data.push(
            new Config(
              key,
              configData.name
            )
          );
        }
        dispatch(fetchConfigSuccess(data));
      }
    } catch (e) {
      dispatch(fetchConfigFailure(e.message));
      throw e;
    }
  };
};
/**
 *
 * @param {*} id
 * request delete image from firestore
 */
export const requestDeleteConfig = (id) => {
  return async (dispatch) => {
    await firestore
      .collection("config")
      .doc(id)
      .delete()
      .then(() => {
        dispatch(setConfig());
      });
  };
};