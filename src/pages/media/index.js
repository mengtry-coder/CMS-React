import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Upload, Pagination } from 'antd';
import Search from "./search";
import ImgCrop from 'antd-img-crop';
import MainLayout from '../../components/layouts/layout';

const Index = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://travel-informed.co.za/wp-content/uploads/sites/64/2019/01/accommodation.jpg',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
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
  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  return (
      <MainLayout>
            <Search />
            <ImgCrop rotate>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                >
                    {fileList.length < 5 && '+ Upload'}
                </Upload>
            </ImgCrop>
            <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={3}
                total={500}
                />
      </MainLayout>
  );
};
export default Index