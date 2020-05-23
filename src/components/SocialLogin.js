import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Row, Col, Button } from 'antd';

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { LOG_IN_REQUEST } from '../reducer/user';

const SocialLogin = ({ history }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const GOOGLE_LOGIN = 'GOOGLE_LOGIN';
  const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';
  const USER_JOIN_PAGE = '/userJoin';

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

    history.push(USER_JOIN_PAGE);
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

    history.push(USER_JOIN_PAGE);
  };

  const responseFailureSocialLogin = (response) => {
    console.warn(response);
  };

  const loginForTest = () => {
    // TODO: 소셜로그인 구현되면 TEST용 삭제하기
    const dummyMe = {
      id: '1',
      email: 'limsungho07@hanmail.net',
      name: '임성호',
      platform: 'TEMP_SOCIAL_LOGIN'
    }

    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        me: dummyMe,
      },
    });

    history.push(USER_JOIN_PAGE);
  }

  return (
    <div>
      <Row justify="center" style={{ marginTop: 19 }}>
        <Button type="primary" size="large" onClick={loginForTest} style={{width: '80%', backgroundColor: '#118A59', height: 50, fontSize: 18}}>로그인 하기</Button>
      </Row>
      <Row justify="center" style={{ marginTop: 19 }}>
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
      <Row justify="center" style={{ marginTop: 19 }}>
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
    </div>
  )
}

export default SocialLogin;