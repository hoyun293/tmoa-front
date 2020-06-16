import React, { useState, useEffect } from 'react';
import MyGoal from '../MainDashboard/MyGoal'

import 'antd/dist/antd.css';
import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

const Modal = styled.div`
  position: fixed;
  margin-top: 25vh;
  width: 100%;
  padding: 10px;
  text-align: center;
  background: rgba(0, 0, 0, 0);
  z-index: 101;
`;

const GoalPopup = ({ target, display, toggle }) => {

  const clickBackDrop = (e) => {
    if (e.target !== e.currentTarget) return;
    toggle();
  }

  return (
    <>
      {display? <BackDrop onClick={clickBackDrop}>
        <Modal>
          <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: 20}} onClick={toggle}>
            <CloseOutlined style={{fontSize: '2rem', color: 'white'}}/>
          </div>
          <div style={{padding: 10, margin:10, paddingTop: 0, marginTop: 0}}>
            <MyGoal target={target}/>
          </div>
        </Modal>
      </BackDrop> : null}
    </>
  );
}

export default GoalPopup;