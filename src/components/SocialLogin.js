import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Row, Col } from 'antd';

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { LOG_IN_REQUEST } from '../reducer/user';

const SocialLogin = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const GOOGLE_LOGIN = 'GOOGLE_LOGIN';
  const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';

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
    <div>
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