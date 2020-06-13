import React from 'react';
import styled from 'styled-components';
import MainDashboardComponent from '../../components/MainDashboardStepComponents/MainDashboardComponent';
import rightArrowButton from '../../../public/assets/icon/rightArrowButton.svg';
import addGoalButton from '../../../public/assets/icon/addGoalButton.svg';
import { useHistory } from 'react-router';

const Background = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
`;
const Header = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3.2rem;
  align-items: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #222222;
`;
const SubHeader = styled.div`
  font-size: 1.7rem;
`;

const HeaderBox = styled.div`
  position: relative;
  margin-top: 3.5rem;
  flex: display;
  flex-direction: column;
  left: 50%;
  transform: translateX(-50%);
  width: 32rem;
`;
const RedirectionCard = styled.div`
  position: absolute;
  top: 31.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 32rem;
  height: 10rem;
  background: #ffffff;
  border: 1px solid #d0d0d0;
  box-sizing: border-box;
  border-radius: 0.6rem;
`;
const RedirectionTitleString = styled.div`
  margin-top: 1.8rem;
  margin-left: 3rem;
  font-style: normal;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 3.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const RedirectionSubtitle = styled.div`
  margin-left: 3rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 3.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  display: inline-block;
`;
const RightArrowButton = styled.img`
  display: inline-block;
  height: 1.2rem;
  margin-left: 1rem;
`;
const AddGoalButton = styled.img`
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  bottom: 2rem;
`;
const MainDashboardBlankPage = () => {
  const history = useHistory();

  return (
    <Background>
      <HeaderBox>
        <Header>홍길동님</Header>
        <SubHeader>도전 잘하고 계신가요?</SubHeader>
      </HeaderBox>

      <MainDashboardComponent
        header={'현재까지'}
        integer={0}
        footer={' 아직 진행중인 도전이 없습니다. 목표를 만들어 도전해보세요!'}
        footerLen={false}
      />
      <RedirectionCard>
        <RedirectionTitleString>다른 사람들 도전을 보고 싶다면?</RedirectionTitleString>
        <RedirectionSubtitle
          onClick={() => {
            history.push('/goalSetting');
          }}
        >
          응원 하러 가기
        </RedirectionSubtitle>
        <RightArrowButton
          src={rightArrowButton}
          onClick={() => {
            history.push('/goalSetting');
          }}
        />
      </RedirectionCard>
      <AddGoalButton
        src={addGoalButton}
        onClick={() => {
          history.push('/goalSetting');
        }}
      />
    </Background>
  );
};

export default MainDashboardBlankPage;
