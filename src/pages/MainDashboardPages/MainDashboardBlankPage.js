import React from 'react';
import styled from 'styled-components';
import MainDashboardComponent from '../../components/MainDashboardStepComponents/MainDashboardComponent';

const Background = styled.div`
  background-color: #e3e3e3;
  border-top: 26rem solid #118a59;
  width: 100%;
  height: auto;
`;
const RedirectionCard = styled.div`
  position: relative;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 32rem;
  height: 9rem;
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 0.6rem;
`;
const RedirectionTitleString = styled.div`
  margin-left: 1.5rem;
`;
const RedirectionSubtitle = stylefd.div`
  margin-left: 1.5rem;
`;
const MainDashboardBlankPage = () => {
  return (
    <Background>
      <MainDashboardComponent
        header={'현재까지'}
        integer={0}
        footer={' 아직 진행중인 도전이 없습니다. 목표를 만들어 도전해보세요!'}
        footerLen={false}
      />
      <RedirectionCard>
        <RedirectionTitleString>
          다른 사람들 도전을 보고 싶다면?
        </RedirectionTitleString>
        <RedirectionSubtitle>
          응원하러 가기 >
        </RedirectionSubtitle>
      </RedirectionCard>
    </Background>
  );
};

export default MainDashboardBlankPage;
