import React, {useState, useEffect, useCallback, useRef} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, message, Table } from "antd";
import firebase, { auth, firestore } from "../../utils/firebase";
import MainLayout from "../../components/layouts/layout";
import Search from "./search"
import CreateForm from "./form"
import CustomTable from "../../components/UI/Tables/index";
import * as actionsAuth from "../../stores/actions/index";
import Loading from "../../components/UI/spiner/index";
import Config from "../../model/config";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Key",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];
const arr_data = [
  {
    name:"measmengtry191",
    key:"234qwsqasd35",
    action:"delete|update"
  },
  {
    name:"measmeasdfngtry191",
    key:"234qwsq35",
    action:"delete|update"

  },
  {
    name:"measmensdfgtry191",
    key:"234qwssq35",
    action:"delete|update"

  },

  {
    name:"measmengtry191",
    key:"234sfqwsq35",
    action:"delete|update"

  },
];

const Index = () => {
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [userData, setUserData] = useState({});
    const config = useSelector((state) => state.auth.config);
    const dispatch = useDispatch()
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
                <Table dataSource={arr_data} columns={columns} />;

            </MainLayout>
        </div>
    )
}

export default Index;
