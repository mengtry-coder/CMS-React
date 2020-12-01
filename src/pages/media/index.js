/** @format */
import React, { useState, useEffect, useCallback } from "react";
import { Upload, Pagination, message } from "antd";
import Search from "./search";
import ImgCrop from "antd-img-crop";
import MainLayout from "../../components/layouts/layout";
import { useDispatch, useSelector } from "react-redux";
import * as actionMedia from "../../stores/actions/index";
import Loading from "../../components/UI/spiner/index";
const Index = (props) => {
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url:
        "https://travel-informed.co.za/wp-content/uploads/sites/64/2019/01/accommodation.jpg",
    },
  ]);
  const [state, setState] = useState({ loading: false, imageUrl: "" });
  const { medias } = useSelector((state) => state.media);
  const dispatch = useDispatch();
  /**
   * fetching media image url from firestore
   */
  const fetchRequestMedia = useCallback(async () => {
    try {
      await dispatch(actionMedia.setMediaRequest());
    } catch (e) {
      message.error(e.message);
    }
  }, []);
  useEffect(() => {
    setState({
      ...state,
      loading: true,
    });
    fetchRequestMedia().then(() => {
      setState({
        ...state,
        loading: false,
      });
      // console.log(medias);
    });
  }, []);
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
        }),
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
  /**
   *
   * @param {*} param0
   * dispach an action upload image to firebase storage
   */
  const handleRequestUploadImage = async ({ onError, onSuccess, file }) => {
    try {
      await dispatch(actionMedia.setRequesUploadMedia(file));
      onSuccess(null);
      message.success("Successfull!!");
    } catch (e) {
      onError(e);
    }
  };
  /**
   *
   * @param {*} value
   * request update media image
   */
  const onRemoveMediaSource = async (value) => {
    try {
      await dispatch(actionMedia.requestRemoveMedia(value.uid));
      message.success("This image has been removed!!");
    } catch (e) {
      message.error(e.message);
    }
    console.log(value.uid);
  };
  /**
   *
   * @param {*} file
   * preview image
   */
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
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  return (
    <MainLayout>
      <Search />
      {state.loading ? (
        <div className='loading'>
          <Loading />
        </div>
      ) : (
        <ImgCrop rotate>
          <Upload
            // action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
            listType='picture-card'
            fileList={medias}
            onChange={onChange}
            beforeUpload={beforeUpload}
            customRequest={handleRequestUploadImage}
            onRemove={(value) => onRemoveMediaSource(value)}
            onPreview={onPreview}>
            {medias.length <= medias.length && "+ Upload"}
          </Upload>
        </ImgCrop>
      )}

      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
    </MainLayout>
  );
};
export default Index;
