import React from 'react';

import Layout from './Layout';

import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import SocialLogin from '../components/SocialLogin';

const Home = ({ history }) => {

  return (
    <Layout>
      <Row justify="center" style={{ marginTop: 78 }}>
        <Col>
          <Avatar size={240} alt="메인화면 이미지" src="https://i.imgur.com/nMum5Q6.png" />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 44, marginBottom: 50 }}>
        <Col>
          <p style={{ fontSize:15, textAlign: 'center' }}>페이스북과 구글로 간편하게<br></br>로그인하세요</p>
        </Col>
      </Row>
      <SocialLogin history={history}/>
    </Layout>
  );
};

export default Home;
