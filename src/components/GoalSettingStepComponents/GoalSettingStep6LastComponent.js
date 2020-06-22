import React from 'react';
import styled from 'styled-components';
import ButtonComponent from '../../components/CommonUIComponents/ButtonComponent';
import celebrateImg from '../../../public/assets/img/goalSetting/celebrateImg.svg';
import { useHistory } from 'react-router';

const CelebrateImg = styled.img`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  width: 17rem;
  height: 17rem;
  margin: 0 auto;
  margin-top: 12rem;
`;

const MainString = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.9rem;
`;

const SubString = styled.div`
  position: absolute;
  left: 50%;
  width: 20rem;
  transform: translate(-50%);
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  margin-top: 2.5rem;
`;
const GoalSettingStep6LastComponent = () => {
  const history = useHistory();

  return (
    <>
      <CelebrateImg src={celebrateImg} />
      <MainString>응원합니다</MainString>
      <SubString>당신의 도전을 응원합니다</SubString>

      <ButtonComponent
        onClick={() => {
          history.push('/mainDashboard');
        }}
        width={'32rem'}
        height={'5rem'}
        text={'확인'}
        radius={'0.5rem'}
        top={'55.6rem'}
      ></ButtonComponent>
    </>
  );
};

export default GoalSettingStep6LastComponent;
