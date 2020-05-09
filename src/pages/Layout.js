import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import { pullRight, h1 } from './Layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Link to="/">
        <Header as="h1" className={h1}>
          WEBPACK TEST
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={pullRight}>WEBPACK TEST</p>
    </div>
  );
};

export default Layout;
