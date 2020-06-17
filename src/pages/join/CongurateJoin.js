import React from 'react';

import Layout from '../Layout';

import 'antd/dist/antd.css';
import { Row, Col, Avatar, Button } from 'antd';

const CongurateJoin = ({ history }) => {

  const confirmClick = () => {
    window.ABridge.toastStringMessage("이제 목표를 설정해보기로 해요.");    
    history.push('/goalSetting');
  }

  return(
    <Layout>
      <Row justify="center" style={{ marginTop: 162 }}>
        <Col>
          <Avatar size={150} alt="메인화면 이미지" src="https://i.imgur.com/rOPlsu9.png" />
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
        <Button onClick={confirmClick} size="large" style={{backgroundColor: '#118A59', height: 50, fontSize: 18, color: "#fff", width:'80%'}}>확인</Button>
      </Row>
    </Layout>
  )
}

export default CongurateJoin;