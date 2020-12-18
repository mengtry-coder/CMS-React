import React, { useState, useCallback, useEffect } from "react";
import ImgCrop from "antd-img-crop";
import { Upload, message } from "antd";
import { useSelector } from "react-redux";
import * as action from "../../stores/actions/index";
import { useDispatch } from "react-redux";
const MediaLibrary = () => {
  const [state, setState] = useState({
    loading: false,
    imageUrl: "",
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  });
  const { medias } = useSelector((state) => state.media);
  const dispatch = useDispatch();

  /**
   * fetching media image url from firestore
   */
  const fetchRequestMedia = useCallback(async () => {
    try {
      await dispatch(action.setMediaRequest());
    } catch (e) {
      message.error(e.message);
    }
  }, [dispatch]);
  useEffect(() => {
    // setState({
    //   ...state,
    //   loading: true,
    // });
    fetchRequestMedia();
  }, [fetchRequestMedia]);
  /**
   *
   * @param {*} param0
   * dispach an action upload image to firebase storage
   */
  const handleRequestUploadImage = async ({ onError, onSuccess, file }) => {
    try {
      await dispatch(action.setRequesUploadMedia(file));
      onSuccess(null);
      message.success("Successfull!!");
    } catch (e) {
      onError(e);
    }
  };
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const onChange = (info) => {
    if (info.file.status === "uploading") {
      setState({ ...state, loading: true });
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) =>
        setState({
          ...state,
          imageUrl,
          loading: false,
        })
      );
    }
  };

  const beforeUpload = (file) => {
    const isImage = file.type.indexOf("image/") === 0;
    if (!isImage) {
      message.error("You can only upload image file!");
    }
    const size = file.size / 1024 / 1024 < 5;
    if (!size) {
      message.error("Image must smaller than 5MB!");
    }
    return isImage && size;
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  return (
    <div>
      <ImgCrop rotate>
        <Upload
          key
          listType="picture-card"
          fileList={medias}
          onChange={onChange}
          onPreview={onPreview}
          customRequest={handleRequestUploadImage}
          beforeUpload={beforeUpload}
        >
          {medias.length <= medias.length && "+ Upload"}
        </Upload>
      </ImgCrop>
    </div>
  );
};

export default MediaLibrary;
