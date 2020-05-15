import React from 'react';

import Layout from './Layout';

import 'antd/dist/antd.css';
import { Row, Col, Avatar, Button } from 'antd';

const CongurateJoin = () => {

  const confirmClick = () => {
    alert('로그인 완료!');
  }

  return(
    <Layout>
      <Row justify="center" style={{ marginTop: 162 }}>
        <Col>
          <Avatar size={150} alt="메인화면 이미지" src="https://i.imgur.com/nMum5Q6.png" />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 22 }}>
        <Col>
          <p style={{ fontSize:25, fontWeight: 'bold', textAlign: 'center' }}>가입완료<br></br>
            <span style={{ fontSize:15 }}>티모아에서 절약습관을 길러보세요!</span>
          </p>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 87 }}>
        <Button type="primary" size="large" shape="round" onClick={confirmClick}>확인</Button>
      </Row>
    </Layout>
  )
}

export default CongurateJoin;