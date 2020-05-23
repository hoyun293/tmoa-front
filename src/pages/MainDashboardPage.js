import React, { useState } from 'react';
import styled from 'styled-components';
import FlipNumbers from 'react-flip-numbers';

import MainDashboardStep1NoGoalComponent from '../components/MainDashboardStepComponents/MainDashboardStep1NoGoalComponent';
import MainDashboardStep2HaveGoalComponent from '../components/MainDashboardStepComponents/MainDashboardStep2HaveGoalComponent';
const Background = styled.div`
  background-color: #e3e3e3;
  border-top: 26rem solid #118a59;
  width: 100%;
  height: 100%;
`;

const MainDashboardPage = () => {
  const [numOfGoal, setNumOfGoal] = useState(1);

  return (
    <React.Fragment>
      <Background>
        {numOfGoal === 0 && <MainDashboardStep1NoGoalComponent></MainDashboardStep1NoGoalComponent>}
        {numOfGoal === 1 && (
          <MainDashboardStep2HaveGoalComponent></MainDashboardStep2HaveGoalComponent>
        )}
      </Background>
    </React.Fragment>
  );
};
export default MainDashboardPage;
