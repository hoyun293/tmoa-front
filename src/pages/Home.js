import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
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
    </Layout>
  );
};

export default Home;
