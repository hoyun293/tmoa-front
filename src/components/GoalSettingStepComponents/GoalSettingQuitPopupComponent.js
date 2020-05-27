import React from 'react';
import styled from 'styled-components';

const QuitPopupCard = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);
  width: 28rem;
  height: 16rem;
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 0.6rem;
`;
const QuitPopupString = styled.div`
  width: 25rem;
  margin-left: 2.7rem;
  margin-top: 3.1rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 1.8rem;
  display: flex;
  align-items: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const CancelButton = styled.div`
  width: 100%;
  height: 100%
`;
const ConfirmButton = styled.div`
    width: 100%;
    height: 100%
`;
const GoalSettingQuitPopupComponent = (props) => {
  return (
    <QuitPopupCard>
      <QuitPopupString>목표 설정이 완료되지 않았습니다. 취소하시겠습니까?</QuitPopupString>
      <CancelButton onClick={() => {props.cancel()}}/>
      <ConfirmButton onClick={() => {props.ok()}}/>  
    </QuitPopupCard>
  );
};

export default GoalSettingQuitPopupComponent;
