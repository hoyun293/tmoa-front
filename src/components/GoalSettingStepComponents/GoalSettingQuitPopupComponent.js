import React from 'react';
import styled from 'styled-components';
import ButtonComponent from '../CommonUIComponents/ButtonComponent';
const QuitPopupCard = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);
  width: 26rem;
  height: 10rem;
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
`;
const QuitPopupString = styled.div`
  width: 25rem;
  margin-left: 2.5rem;
  margin-top: 3.1rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.8rem;
  display: flex;
  align-items: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const Flex = styled.div`
  position: absolute;
  top: 100%;
  display: flex;
`;
const GoalSettingQuitPopupComponent = (props) => {
  return (
    <QuitPopupCard>
      <QuitPopupString>목표 설정이 완료되지 않았습니다. 취소하시겠습니까?</QuitPopupString>
      <Flex>
        <ButtonComponent
          width={'13rem'}
          height={'4rem'}
          text={'취소'}
          color={'#CCCCCC'}
          onClick={() => {
            props.cancel();
          }}
        />
        <ButtonComponent
          width={'13rem'}
          height={'4rem'}
          text={'확인'}
          onClick={() => {
            props.ok();
          }}
        />
      </Flex>
    </QuitPopupCard>
  );
};

export default GoalSettingQuitPopupComponent;
