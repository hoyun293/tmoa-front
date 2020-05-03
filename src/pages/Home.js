import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

const Home = () => {
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
          clientId="80071714659-q1uctf5epkc1h1b7b107vmhvklhe4pgp.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </p>
    </Layout>
  );
};

export default Home;
