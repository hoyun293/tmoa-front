import React from 'react';

import styled from 'styled-components';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #16B877;
  padding: 21 20;
`;

const BackHeader = (props) => {

  const { title } = props;

  return (
    <Header>
      <div style={{flexBasis: 25, flexShrink: 0, flexGrow: 1}}>
        <div onClick={props.history.goBack}>
          <ArrowLeftOutlined style={{fontSize:25, color: 'white'}}/>
        </div>
      </div>
      <div style={{flexGrow: 3, textAlign: 'center', fontSize: '2rem', color: '#ffffff', fontWeight: 650}}>{title}</div>
      <div style={{flexBasis: 25, flexShrink: 0,flexGrow: 1}}></div>
    </Header>
  );
}

export default BackHeader;