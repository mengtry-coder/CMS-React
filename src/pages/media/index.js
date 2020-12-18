/** @format */
import React, { useState, useEffect, useCallback } from "react";
import { Upload, Pagination, message, Input, Modal } from "antd";
import Search from "./search";
import ImgCrop from "antd-img-crop";
import MainLayout from "../../components/layouts/layout";
import { useDispatch, useSelector } from "react-redux";
import * as actionMedia from "../../stores/actions/index";
import Loading from "../../components/UI/spiner/index";

const Index = (props) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [state, setState] = useState({
    loading: false,
    imageUrl: "",
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  });
  const [dataSource, setDataSource] = useState([]);
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
   * request delete media image from firestore
   * request delete media image from firebase storage
   *
   */
  const onAlertRequestRemoveMedaiSource = (value) => {
    if (window.confirm(`Are you sure you want to delete ${value.name} ?`)) {
      onRemoveMediaSource(value);
    }
  };
  const onRemoveMediaSource = async (value) => {
    try {
      await dispatch(
        actionMedia.requestDeleteImagefromFirebaseStorage(value.name, value.uid)
      );
      message.success("This image has been removed!!");
    } catch (e) {
      message.error(e.message);
    }
    // console.log(value.uid);
  };
  /**
   *
   * @param {*} file
   * preview image
   */

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  /**
   * search image by name
   */
  const handleSearch = (val) => {
    const new_arr_data = medias.filter((i) =>
      i.name.toLowerCase().includes(val.toLowerCase())
    );
    if (val === "") {
      setDataSource([]);
    } else {
      setDataSource(new_arr_data);
    }
  };
  /**
   * preview image by pop up modal
   */
  const handlePreview = (file) => {
    setState({
      ...state,
      previewImage: file.url,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };
  const handleCancel = () => {
    setState({
      ...state,
      previewVisible: false,
    });
  };
  return (
    <MainLayout>
      <Search>
        <Input onChange={(e) => handleSearch(e.target.value)} />
      </Search>
      {state.loading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <ImgCrop rotate>
          <Upload
            listType="picture-card"
            fileList={!dataSource.length ? medias : dataSource}
            onChange={onChange}
            beforeUpload={beforeUpload}
            customRequest={handleRequestUploadImage}
            onRemove={(value) => onAlertRequestRemoveMedaiSource(value)}
            onPreview={(file) => handlePreview(file)}
          >
            {medias.length <= medias.length && "+ Upload"}
          </Upload>
        </ImgCrop>
      )}
      <Modal
        visible={state.previewVisible}
        title={state.previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={state.previewImage} />
      </Modal>
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={50}
      />
    </MainLayout>
  );
};
export default Index;
