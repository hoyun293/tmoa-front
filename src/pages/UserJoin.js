import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './Layout';

import 'antd/dist/antd.css';
import { Row, Col, Avatar, Input, Button, Radio } from 'antd';
import { CameraOutlined } from '@ant-design/icons';

const { Search } = Input;

const UserJoin = ({ history }) => {

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const CONGULATION_JOIN_PAGE = '/congurateJoin'

  const duplicateTest = (value) => {
    console.log(value)
    alert('중복검사!');
  }

  const radioOnCange = (value) => {
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
            <p style={{fontSize:18}}>닉네임</p>
          </Row>
          <Row>
            <Col span={24}>
              <Search
                placeholder="닉네임"
                enterButton="중복검사"
                size="large"
                onSearch={value => duplicateTest(value)}
              />
            </Col>
          </Row>
          <Row style={{marginTop: 32}}>
            <p style={{fontSize:18}}>연령대</p>
          </Row>
          <Row justify="center">
            <Radio.Group buttonStyle="solid" onChange={({target}) => radioOnCange(target.value)}>
              <Radio.Button value="1">10대</Radio.Button>
              <Radio.Button value="2">20대</Radio.Button>
              <Radio.Button value="3">30대</Radio.Button>
              <Radio.Button value="4">40대</Radio.Button>
              <Radio.Button value="5">50대 이상</Radio.Button>
            </Radio.Group>
          </Row>
          <Row justify="center" style={{marginTop: 91}}>
            <Button size="large" shape="round" onClick={submitUserInfo}>다음</Button>
          </Row>
        </Col>
        <Col span={1}></Col>
      </Row>
    </Layout>
  )

}

export default UserJoin;