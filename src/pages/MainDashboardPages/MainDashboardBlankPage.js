import React from 'react';
import styled from 'styled-components';
import MainDashboardComponent from '../../components/MainDashboardStepComponents/MainDashboardComponent';
import rightArrowButton from '../../../public/assets/icon/rightArrowButton.svg';
import addGoalButton from '../../../public/assets/icon/addGoalButton.svg';
import { useHistory } from 'react-router';

const Background = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
`;
const BackgroundHeader = styled.div`
  width: 100%;
  height: 18rem;
  background: linear-gradient(
      180deg,
      rgba(162, 227, 201, 0.83) 0%,
      rgba(162, 227, 201, 0.52) 0.01%,
      rgba(255, 255, 255, 0) 55.2%
    ),
    #16b877;
  background-blend-mode: soft-light, normal;
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
  padding-top: 3.5rem;
`;
const Header = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3.2rem;
  align-items: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #ffffff;
`;
const SubHeader = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 3.2rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #ffffff;
`;

const HeaderBox = styled.div`
  position: relative;

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
      <BackgroundHeader>
        <HeaderBox>
          <Header>홍길동님</Header>
          <SubHeader>도전 잘하고 계신가요?</SubHeader>
        </HeaderBox>
      </BackgroundHeader>

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
