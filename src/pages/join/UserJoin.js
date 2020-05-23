import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../Layout';

import 'antd/dist/antd.css';
import { Row, Col, Avatar, Input, Button, Select } from 'antd';
import { CameraOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Option } = Select;

const UserJoin = ({ history }) => {

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const CONGULATION_JOIN_PAGE = '/congurateJoin'

  const duplicateTest = (value) => {
    console.log(value)
    alert('중복검사!');
  }

  const selectAge = (value) => {
    console.log(value);
  }

  const submitUserInfo = () => {
    history.push(CONGULATION_JOIN_PAGE);
  }

  return(
    <Layout>
      <Row style={{ marginTop: 100 }} justify="center">
        <Col>
          <Avatar size={100} alt="아이콘 선택" icon={<CameraOutlined style={{fontSize:40}}/>} />
        </Col>
      </Row>
      <Row style={{ marginTop: 50 }}>
        <Col span={1}></Col>
        <Col span={22}>
          <Row>
            <p style={{fontSize:16}}>닉네임</p>
          </Row>
          <Row>
            <Col span={24}>
              <Search
                placeholder="닉네임"
                enterButton="중복확인"
                size="large"
                onSearch={value => duplicateTest(value)}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p style={{marginLeft: 2}}>원하는 닉네임을 몇자이상 입력해주세요.</p>
            </Col>
          </Row>
          <Row style={{marginTop: 32}}>
            <p style={{fontSize:16}}>연령대</p>
          </Row>
          <Row justify="center">
            <Col span={24}>
              <Select defaultValue="1" onChange={selectAge} size="large" style={{width: '100%'}}>
                <Option value="1">10대</Option>
                <Option value="2">20대</Option>
                <Option value="3">30대</Option>
                <Option value="4">40대</Option>
                <Option value="5">50대 이상</Option>
              </Select>
            </Col>
          </Row>
          <Row justify="center" style={{marginTop: 79}}>
            <Col span={24}>
              <Button size="large" onClick={submitUserInfo} style={{backgroundColor: '#118A59', height: 50, fontSize: 18, color: "#fff", width:'100%'}}>다음</Button>
            </Col>
          </Row>
        </Col>
        <Col span={1}></Col>
      </Row>
    </Layout>
  )

}

export default UserJoin;