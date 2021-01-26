import React, {useState} from 'react'
import CreateForm from "./form";
import MainLayout from "../../components/layouts/layout";
import { Button, Modal, Table, Row, Col } from "antd";
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
              <Row>
                <Col span={12} order={1}>
                    <Search />
                </Col>
                <Col span={12} order={1}>
                    <div className="text-right">
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
                        <CreateForm
                            onCancel={handleCancel}
                            onShowModal={showModal}
                        />
                        </Modal>
                    </div>
                </Col>
              </Row>
              <Table dataSource={dataSource} columns={columns} />;
            </MainLayout>
        </div>
        
    )
}

export default Index
