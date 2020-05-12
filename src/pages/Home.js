import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './Layout';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { LOG_IN_REQUEST } from '../reducer/user';

import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const GOOGLE_LOGIN = 'GOOGLE_LOGIN';
const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';

const Home = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const responseGoogle = (response) => {
    console.log(response);
    if (userState.me != null) return;
    const { email, name } = response.profileObj;
    const me = {
      id: response.googleId,
      email,
      name,
      platform: GOOGLE_LOGIN,
    };

    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        me,
      },
    });
  };

  const responseFacebook = (response) => {
    console.log(response);
    if (userState.me != null) return;
    const { id, email, name } = response;
    const me = {
      id,
      email,
      name,
      platform: FACEBOOK_LOGIN,
    };

    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        me,
      },
    });
  };

  const responseFailureSocialLogin = (response) => {
    console.warn(response);
  };

  return (
    <Layout>
      <Row justify="center" style={{ marginTop: 50, marginBottom: 50, fontSize: 20, }}>
        <Col>로그인</Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50, marginBottom: 50}}>
        <Col>
          <Avatar size={200} src="https://i.imgur.com/nMum5Q6.png" />
        </Col>
      </Row>
      <Row justify="center">
        <GoogleLogin
          clientId="510961742149-vnfho6456nlts5odenbbthgfhfl2ghnf.apps.googleusercontent.com"
          render={(props) => (
           <button onClick={props.onClick}>Login</button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseFailureSocialLogin}
          cookiePolicy={'single_host_origin'}
        />
      </Row>
      <Row justify="center">
        <FacebookLogin
          appId="528237391387780"
          autoLoad={false}
          fields="name,first_name,last_name,email"
          callback={responseFacebook}
          onFailure={responseFailureSocialLogin}
          render={(renderProps) => {
            return <button onclick={renderProps.onClick}></button>;
          }}
        />
      </Row>
    </Layout>
  );
};

export default Home;
