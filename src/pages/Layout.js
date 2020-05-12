import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';
import { pullRight, h1 } from './Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;
