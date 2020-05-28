import React from 'react';

import Layout from '../Layout';

import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Avatar, Carousel } from 'antd';
import SocialLogin from '../../components/join/SocialLogin';

const Home = ({ history }) => {

  const carouselChange = () => {
    
  }

  return (
    <Layout>
      <Row justify="center" style={{ paddingTop: 78 }}>
        <Col span={12}>
          <Carousel afterChange={carouselChange} autoplay={true} >
            <img src="https://i.imgur.com/qZSTEkx.png"></img>
            <img src="https://i.imgur.com/GKBmfZd.png"></img>
            <img src="https://i.imgur.com/jiqWxJi.png"></img>
          </Carousel>
        </Col>
      </Row>
      <SocialLogin history={history}/>
    </Layout>
  );
};

export default Home;