import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Layout from "./Layout";
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';
import { LOG_IN_REQUEST } from '../reducer/user';

const GOOGLE_LOGIN = 'GOOGLE_LOGIN';
const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';

const Home = () => {

  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);

  const responseGoogle = (response) => {
    console.log(response);
    if(userState.me != null) return;
    const  { email, name } = response.profileObj;
    const me = {
      id: response.googleId,
      email,
      name,
      platform: GOOGLE_LOGIN,
    }

    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        me
      }
    });
  }
  
  const responseFacebook = (response) => {
    console.log(response);
    if(userState.me != null) return;
    const { id, email, name } = response;
    const me = {
      id,
      email,
      name,
      platform: FACEBOOK_LOGIN
    }

    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        me
      }
    });
  }
  
  const responseFailureSocialLogin = (response) => {
    console.warn(response);
  }

  const bridgeTest = () => {
    window.ABridge.testMethod();
  }

  return (
    <Layout>
      <p>Hello World of React and Webpack</p>
      <p>
        <Link to="/dynamic">Navigate to Dynamic Page</Link>
      </p>
      <p>
        <Link to="/calculator">적금계산기 페이지</Link>
      </p>
      <p>
        <GoogleLogin
          clientId="510961742149-vnfho6456nlts5odenbbthgfhfl2ghnf.apps.googleusercontent.com"
          render={(props) => (
           <button onClick={props.onClick}>Login</button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseFailureSocialLogin}
          cookiePolicy={"single_host_origin"}
        />
        <FacebookLogin
          appId="528237391387780"
          autoLoad={false}
          fields="name,first_name,last_name,email"
          callback={responseFacebook}
          onFailure={responseFailureSocialLogin}
          render={renderProps => {
            return (
              <button onclick={renderProps.onClick}></button>
            );
          }}
        />
        <button onClick={bridgeTest}>bridge</button>
      </p>
    </Layout>
  );
};

export default Home;