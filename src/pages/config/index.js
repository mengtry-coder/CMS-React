import React, {useState, useEffect, useCallback, useRef} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, message } from "antd";
import MainLayout from "../../components/layouts/layout";
import Search from "./search"
import CreateForm from "./form"
import CustomTable from "../../components/UI/Tables/index";
import * as actionsAuth from "../../stores/actions/index";
import Loading from "../../components/UI/spiner/index";


const Index = () => {
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [userData, setUserData] = useState({});
    const config = useSelector((state) => state.auth.config);
    const dispatch = useDispatch();
    const fetchConfigFromFirestore = useCallback(async () => {
        try {
          await dispatch(actionsAuth.setConfig());
        } catch (e) {
          console.log(e);
        }
      }, [dispatch]);
      useEffect(() => {
        setIsLoading(true);
        fetchConfigFromFirestore().then(() => {
          setIsLoading(false);
        });
      }, [fetchConfigFromFirestore]);
    const showModal = () => {
        setVisible(true);
        setIsUpdate(false);
    };
    const _onUpdate = (record) => {
        setVisible(true);
        setUserData(record);
        setIsUpdate(true);
      };
    const _onDelete = async (config) => {
        setIsLoading(true);
        try {
            if (window.confirm(`Are you sure you want to delete ${config.name}?`)) {
            await dispatch(actionsAuth.requestDeleteConfig(config.id));
            setIsLoading(false);
            } else {
            setIsLoading(false);
            }
        } catch (e) {
            message.error(e.message);
            setIsLoading(false);
        }
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
                <CustomTable
                    dataSource={!dataSource.length ? config : dataSource}
                    loading={isLoading && <Loading />}
                    onDelete={_onDelete}
                    onUpdate={_onUpdate}
                    pagination={{ pageSize: 50 }}
                    />

            </MainLayout>
        </div>
    )
}

export default Index;
