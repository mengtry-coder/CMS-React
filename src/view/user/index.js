import React, { Component, useEffect, useCallback, useState } from 'react'
import 'antd/dist/antd.css';
import '../../MainStyle.css';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from "react-redux";
import Form from './form';
import Search from './search';
import { Table, Tag, Space, Button, Modal } from 'antd';
import {
    DeleteOutlined,
    EditOutlined,
    PlusOutlined
} from '@ant-design/icons';
import search from './search';
const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
      action: <DeleteOutlined/>,
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      action: <DeleteOutlined/>,
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
    },
  ];
export class index extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
    render() {
        return(
            <div>
              <Button className="AddNew" type="primary" onClick={this.showModal}>
                <PlusOutlined /> Add New
                </Button>
                <Modal
                title="New User"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                <Form />
                </Modal>
                <Search />
                <br></br>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        )
    }
}
export default index
