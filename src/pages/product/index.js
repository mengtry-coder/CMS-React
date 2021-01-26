import React, {useState} from 'react'
import { Button, Modal, Table, Row, Col } from "antd";
import MainLayout from "../../components/layouts/layout";
import ProductForm from "./form";
import Search from "./search";

const Index= () => {
    const [visible, setVisible] = useState(false);
    const showModal = () => {
        setVisible(true);
    };
    const handleOk = () => {
        setVisible(false);
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
                                title="Create Product"
                                footer={false}
                                onOk={handleOk}
                                onCancel={handleCancel}
                            >
                            <ProductForm
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
