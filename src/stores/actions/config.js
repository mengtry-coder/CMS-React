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
const requestFetchConfigSuccess = (config) => {
  return {
    type: REQUEST_FETCH_CONFIG_STORAGE_SUCCESS,
    payload: config,
  };
};
/**
 *set config request from firestore
 */
export const fetchConfigSuccess = (data) => {
  return {
    type: FETCH_CONFIG_SUCCESS,
    payload: data,
  };
};
export const fetchConfigFailure = (message) => {
  return {
    type: FETCH_CONFIG_FAILURE,
    payload: message,
  };
};
export const setConfig = (uid) => {
  return async (dispatch, getState) => {
    try {
      const ref = firestore.collection("config");
      const onSnapshot = await ref.get();
      if (!onSnapshot.empty) {
        let data = [];
        for (let i = 0; i < onSnapshot.docs.length; i++) {
          const datax = onSnapshot.docs[i].data();
          const id = onSnapshot.docs[i].id;
          data.push(
            new Config(
              id,
              datax.name,
              datax.uid
            )
          );
        }
        if (uid) {
          const currentConfig = data.filter((config) => config.uid === uid);
          dispatch(fetchCurrentConfigSuccess(currentConfig));
        }
        dispatch(fetchConfigSuccess(data));
      }
    } catch (e) {
      dispatch(fetchConfigFailure(e.message));
      throw e;
    }
  };
};
export const fetchCurrentConfigSuccess = (data) => {
  return {
    type: SET_CURRENT_CONFIG_SUCCESS,
    payload: data,
  };
};
export const setConfigRequest = () => {
  return async (dispatch) => {
    try {
      const ref = firestore.collection("config");
      const onSnapshot = await ref.get();
      if (!onSnapshot.empty) {
        let arr_data = [];
        for (let i = 0; i < onSnapshot.docs.length; i++) {
          const id = onSnapshot.docs[i].id;
          const data = onSnapshot.docs[i].data();
          arr_data.push(
            new Config(
              id,
              data.name,
            )
          );
        }
        dispatch(requestFetchConfigSuccess(arr_data));
      }
    } catch (e) {
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
        dispatch(setConfigRequest());
      });
  };
};