import React from 'react';

import Layout from '../Layout';

import styled from 'styled-components';

import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import SocialLogin from '../../components/join/SocialLogin';

// import rightArrowButton from '../../../public/assets/icon/rightArrowButton.svg';

import LoginImage01 from '../../../public/assets/img/join/login_1.png';
import LoginImage02 from '../../../public/assets/img/join/login_2.png';
import LoginImage03 from '../../../public/assets/img/join/login_3.png';

const CustomCarousel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100 0;
`;

const Home = ({ history }) => {

  const carouselChange = () => {
    
  }

  return (
    <Layout>
      <CustomCarousel>
        <Carousel afterChange={carouselChange} autoplay={true} dots={false}>
          <img src={LoginImage01} alt="로그인용 이미지"/>
          <img src={LoginImage02} alt="로그인용 이미지"/>
          <img src={LoginImage03} alt="로그인용 이미지"/>
        </Carousel>
      </CustomCarousel>
      <SocialLogin history={history}/>
    </Layout>
  );
};

export default Home;
