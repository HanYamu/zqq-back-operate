import React, { Component } from 'react';
import {Row, Col, Form, Input, Table, Button, Modal, Select, DatePicker, message } from 'antd'
import "./module.less"

const confirm = Modal.confirm
const Option = Select.Option;
const { RangePicker } = DatePicker;

const conlomn = [{
  title: 'name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'address',
  dataIndex: 'address',
  key: 'address',
}]

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park',
}];


class ModuleSecond extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
  }
  routerTo(path) {
    this.props.history.push(path)
  }
  
  render(){
    return (
      <div>
        <Row gutter={24}>
          <Col span={8}>
            {/* <div></div> */}
            <div><Input /></div>
          </Col>
          <Col span={8}>
            {/* <div></div> */}
            <div><Input /></div>
          </Col>
          <Col span={8}>
            {/* <div></div> */}
            <div><Input /></div>
          </Col>
        </Row>
        <Row gutter={24}>
          <Table columns={conlomn} dataSource={data} />
        </Row>
      </div>
    )
  }
}


export default ModuleSecond
