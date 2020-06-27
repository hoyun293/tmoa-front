import React from 'react';

import styled from 'styled-components';
import { ArrowLeftOutlined } from '@ant-design/icons';

const BackHeader = (props) => {

  const { title, backgrondColor, color } = props;

  const Header = styled.header`
    display: flex;
    align-items: center;
    background-color: ${backgrondColor ? backgrondColor : '#F2F2F2'};
    padding: 21 20;
    z-index: 100;
  `;

  const iconCss = {
    fontSize: '2rem', color: color ? color : '#222222'
  };

  const titleCss = {
    flexGrow: 3, textAlign: 'center', fontSize: '1.8rem', color: color ? color : '#222222', fontWeight: 650
  }

  const handleBackClick = () => {
    console.log('뒤로가기')
    props.history.goBack();
  }

  return (
    <Header>
      <div style={{flexBasis: 25, flexShrink: 0, flexGrow: 1}}>
        <div onClick={handleBackClick}>
          <ArrowLeftOutlined style={iconCss}/>
        </div>
      </div>
      <div style={titleCss}>{title ? title : ''}</div>
      <div style={{flexBasis: 25, flexShrink: 0,flexGrow: 1}}></div>
    </Header>
  );
}

export default BackHeader;