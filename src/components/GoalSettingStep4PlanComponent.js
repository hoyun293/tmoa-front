import React from 'react';
import styled from 'styled-components';

const TitleString = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 3rem;
`;
const GoalSettingStep4PlanComponent = () => {
  return (
    <React.Fragment>
      <TitleString>목표 달성을 위해 \n 계획이 있으신가요?</TitleString>
    </React.Fragment>
  );
};

export default GoalSettingStep4PlanComponent;
