import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from '../../js/http-util';

import Layout from '../Layout';
import styled from 'styled-components';

import 'antd/dist/antd.css';
import { Row, Col, Button } from 'antd';

import LoginImage05 from '../../../public/assets/img/join/login_5.png';
import { isImageUrl } from 'antd/lib/upload/utils';

import { requestLogin } from '../../api/login-setting-api';

const CongurateJoin = ({ history }) => {

  const user = useSelector((state) => state.user);

  const confirmClick = async () => {
    const { me } = user;
    const { email, platform, name, nickname, age, sex } = me;  
    const requestMe = {
      email,
      platform,
      name,
      nickname,
      age,
      sex
    }

    const response = await requestLogin(requestMe);
    console.log(response);

    const { code, data } = response.data;

    if(window.ABridge) {
      window.ABridge.toastStringMessage("이제 목표를 설정해보기로 해요.");    
      // 아이디도 Prefenece에 넣어두기
      window.ABridge.setPreference("nickname", data.nickname);
      window.ABridge.setPreference("_id", data._id);
    }

    if(code === 200) {
      history.push('/goalSetting');  
    } else {
      alert('로그인이 실패하였습니다.');
    }
  }

  return(
    <Layout>
      <Row justify="center" style={{ marginTop: 162 }}>
        <Col>
          <img src={LoginImage05} alt="축하 이미지"/>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 22 }}>
        <Col>
          <p style={{ fontSize:25, fontWeight: 'bold', textAlign: 'center' }}>가입완료<br></br>
            <span style={{ fontSize:15, color: '#AAAAAA' }}>티모아에서 절약습관을 길러보세요!</span>
          </p>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 87 }}>
        <Button onClick={confirmClick} size="large" style={{backgroundColor: '#16B877', height: 50, fontSize: 18, color: "#fff", width:'80%', borderRadius: 5}}>확인</Button>
      </Row>
    </Layout>
  )
}

export default CongurateJoin;