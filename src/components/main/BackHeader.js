import React from 'react';

import styled from 'styled-components';
import { ArrowLeftOutlined } from '@ant-design/icons';

const BackHeader = (props) => {

  const { title, backgrondColor } = props;

  const Header = styled.header`
    display: flex;
    align-items: center;
    background-color: ${backgrondColor ? backgrondColor : '#E5E5E5'};
    padding: 21 20;
  `;

  return (
    <Header>
      <div style={{flexBasis: 25, flexShrink: 0, flexGrow: 1}}>
        <div onClick={props.history.goBack}>
          <ArrowLeftOutlined style={{fontSize:'2rem', color: '#222222'}}/>
        </div>
      </div>
      <div style={{flexGrow: 3, textAlign: 'center', fontSize: '1.8rem', color: '#222222', fontWeight: 650}}>{title}</div>
      <div style={{flexBasis: 25, flexShrink: 0,flexGrow: 1}}></div>
    </Header>
  );
}

export default BackHeader;