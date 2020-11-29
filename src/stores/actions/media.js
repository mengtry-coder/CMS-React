/** @format */

import { type } from "../../constants/index";
import Media from "../../model/media";
import firebase, { storage, firestore } from "../../utils/firebase";
const {
  REQUEST_FETCH_MEDIA_STORAGE_FIALURE,
  REQUEST_FETCH_MEDIA_STORAGE_SUCCESS,
  REQUEST_UPLOAD_MEDIA_STORAGE_FIALURE,
  REQUEST_UPLOAD_MEDIA_STORAGE_SUCCESS,
} = type.Media;
/**
 *
 * @param {*} media
 * requesting upload image to firebase storage success
 */
const requestUploadMediaSuccess = (media) => {
  return {
    type: REQUEST_UPLOAD_MEDIA_STORAGE_SUCCESS,
  };
};
/**
 *
 * @param {*} message
 * requesting upload image to firebase storage fialure
 */
const requestUploadMediaFialure = (message) => {
  return {
    type: REQUEST_UPLOAD_MEDIA_STORAGE_FIALURE,
    message: message,
  };
};
const requestUploadImageToFirestore = async (url, file) => {
  return async (dispatch) => {
    const timestam = firebase.firestore.FieldValue.serverTimestamp();
    // try {
    //   await firestore.collection("media").add({
    //     url: url,
    //     name: file.name,
    //     type: file.type,
    //     size: file.size,
    //     created_date: timestam,
    //   });
    // } catch (e) {
    //   console.log(e);
    // }
  };
};
export const setRequesUploadMedia = (file) => {
  return async (dispatch, getState) => {
    const timestam = firebase.firestore.FieldValue.serverTimestamp();
    const uploadTask = storage
      .ref("media/assets/images/")
      .child(file.name)
      .put(file);
    try {
      uploadTask.on("state_changeed", () => {
        storage
          .ref("media/assets/images/")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            // dispatch(requestUploadImageToFirestore(url, file));
            firestore.collection("media").add({
              url: url,
              name: file.name,
              type: file.type,
              size: file.size,
              created_date: timestam,
              updated_date: timestam,
              status: true,
              isActive: 1,
            });
          })
          .then(() => {
            dispatch(setMediaRequest());
          });
      });
    } catch (e) {
      dispatch(requestUploadMediaFialure("Error something when wrong!!"));
      throw e;
    }
  };
};
/**
 * request fetching media success
 */
const requestFetchMediaSuccess = (media) => {
  return {
    type: REQUEST_FETCH_MEDIA_STORAGE_SUCCESS,
    payload: media,
  };
};
export const setMediaRequest = () => {
  return async (dispatch) => {
    try {
      const ref = firestore.collection("media");
      const onSnapshot = await ref.where("status", "==", true).get();
      if (!onSnapshot.empty) {
        let arr_data = [];
        for (let i = 0; i < onSnapshot.docs.length; i++) {
          const id = onSnapshot.docs[i].id;
          const data = onSnapshot.docs[i].data();
          arr_data.push(
            new Media(
              id,
              data.name,
              "done",
              data.url,
              // data.type,
              // data.size,
              // data.isActive,
            ),
          );
        }
        dispatch(requestFetchMediaSuccess(arr_data));
      }
    } catch (e) {
      throw e;
    }
  };
};

export const requestRemoveMedia = (id) => {
  return async (dispatch) => {
    firestore
      .collection("media")
      .doc(id)
      .update({
        status: false,
      })
      .then(() => {
        dispatch(setMediaRequest());
      });
  };
};
