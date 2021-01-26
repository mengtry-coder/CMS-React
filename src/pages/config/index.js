import React, {useState, useEffect, useCallback, useRef} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, message, Table, Col, Row } from "antd";
import firebase, { auth, firestore } from "../../utils/firebase";
import MainLayout from "../../components/layouts/layout";
import Search from "./search"
import CreateForm from "./form"
import CustomTable from "../../components/UI/Tables/config";
import * as actionCreateConfig from "../../stores/actions/index";
import Loading from "../../components/UI/spiner/index";
import Config from "../../model/config";
import {type} from "./../../constants/index";

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

const Index = () => {
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [configData, setConfigData] = useState({});
    const config = useSelector((state) => state.config.config);
    const dispatch = useDispatch()
    const fetchConfigFromFirestore = useCallback(async () => {
        try {
          await dispatch(actionCreateConfig.setConfig());
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
    const onSubmit = async (config, key) => {
      setIsLoading(true);
      setVisible(false);
      try {
        if (isUpdate === false) {
          await dispatch(actionCreateConfig.requestCreateConfig(config));
        } else {
          await dispatch(actionCreateConfig.requestUpdateConfig(config, key));
        }
        setIsLoading(false);
        message.success("Successful");
    } catch (e) {
        message.error(e.message);
        setIsLoading(false);
      }
    };
    const _onUpdate = (record) => {
        setVisible(true);
        setConfigData(record);
        setIsUpdate(true);
      };
    const _onDelete = async (config) => {
        setIsLoading(true);
        try {
            if (window.confirm(`Are you sure you want to delete ${config.name}?`)) {
            await dispatch(actionCreateConfig.requestDeleteConfig(config.key));
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
                          title="Configuration"
                          footer={false}
                          onOk={handleOk}
                          onCancel={handleCancel}
                          width={200}
                      >
                          <CreateForm
                            onSubmit={onSubmit}
                            config={configData}
                            onUpdate={isUpdate}
                            onCancel={handleCancel}
                          />
                      </Modal>
                      </div>
                  </Col>
                </Row>
                <CustomTable
                  dataSource={!dataSource.length ? config : dataSource}
                  loading={isLoading && <Loading />}
                  onDelete={_onDelete}
                  onUpdate={_onUpdate}
                  // scroll={(e) => onSroll(e)}
                  // id={id}
                  pagination={{ pageSize: 50 }}
                />

            </MainLayout>
        </div>
    )
}

export default Index;
