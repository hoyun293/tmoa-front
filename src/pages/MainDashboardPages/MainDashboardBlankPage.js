import React from 'react';
import styled from 'styled-components';
import MainDashboardComponent from '../../components/MainDashboardStepComponents/MainDashboardComponent';

const Background = styled.div`
  background-color: #e3e3e3;
  border-top: 26rem solid #118a59;
  width: 100%;
  height: auto;
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
    </Background>
  );
};

export default MainDashboardBlankPage;
