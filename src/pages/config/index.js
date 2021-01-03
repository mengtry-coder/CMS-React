import React, {useState} from 'react'
import { Button, Modal } from "antd";
import MainLayout from "../../components/layouts/layout";
import Search from "./search"
import CreateForm from "./form"

const Index = () => {
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const showModal = () => {
        setVisible(true);
        setIsUpdate(false);
    };
    const handleCancel = () => {
    setVisible(false);
    };
    
    const handleOk = () => {
    setVisible(false);
    };
    return (
        <div>
            <MainLayout>
                <Button type="primary" onClick={showModal}>
                    + Add New
                </Button>
                <Modal
                    visible={visible}
                    title="Configuration"
                    footer={false}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <CreateForm>

                    </CreateForm>
                </Modal>
                <Search />
                <br></br>

            </MainLayout>
        </div>
    )
}

export default Index;
