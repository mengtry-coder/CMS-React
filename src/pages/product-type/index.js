import React, {useState} from 'react'
import CreateProductForm from "./form";
import MainLayout from "../../components/layouts/layout";
import { Button, Modal, Table } from "antd";
import "./styles.css";
import Search from "./search";

const Index = () => {
  const [visible, setVisible] = useState(false);
  const handleOk = () => {
    setVisible(false);
  };
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
  ];
  const dataSource = [
    {
      key: '1',
      name: 'Woo Comerce',
    },
    {
      key: '2',
      name: 'Creative',
    },
  ];
  return (
        <div>
            <MainLayout>
                <Button type="primary" onClick={showModal}>
                    + Add New
                </Button>
                <Modal
                    visible={visible}
                    title="Create Product Type"
                    footer={false}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                <CreateProductForm
                    onCancel={handleCancel}
                    onShowModal={showModal}
                />
                </Modal>
                <Search />
                <br></br>

<Table dataSource={dataSource} columns={columns} />;
      </MainLayout>

        </div>
        
    )
}

export default Index
