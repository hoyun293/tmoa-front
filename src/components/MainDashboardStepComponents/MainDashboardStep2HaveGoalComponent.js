import React, { useState } from 'react';
import styled from 'styled-components';
import { addComma2Number } from '../../js/CommonFunc';
import FlipNumbers from 'react-flip-numbers';
import GoalSummaryComponent from '../GoalSummaryComponent/GoalSummaryComponent';
const TotalAmountCard = styled.div`
  position: absolute;
  top:16.4rem;
  left:2rem;
  width: 32rem;
  height: 18rem;
  background: #FFFFFF;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  text-align: center;
`;
const Row = styled.div` 
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  margin-top: 4rem;
  font-weight: bold;
`;
const Popup = styled.div`
  position: relative;
  background-color: #ffffff;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  width: 100%;
  height: 100%;
  margin-top: 8rem;
  padding-top: 5rem;
`;
const MainDashboardStep2HaveGoalComponent = () => {
  const [tempTotalAmountFraction, setTempTotalAmountFraction] = useState('');

  setTimeout(() => {
    setTempTotalAmountFraction(String(Math.floor(Math.random() * 1000)));
  }, 3000);
  return (
    <React.Fragment>
      <TotalAmountCard>
        <div>현재까지</div>
        <Row>
          {addComma2Number(3000000)}.
          <FlipNumbers
            height={12}
            width={8}
            color="red"
            background="grey"
            play
            duration={3}
            perspective={200}
            numbers={tempTotalAmountFraction}
          />
          원
        </Row>
        <div>지치지 말고 목표를 향하여 열심히!</div>
        <div>당신의 도전을 응원합니다.</div>
      </TotalAmountCard>
      내 목표
      <GoalSummaryComponent></GoalSummaryComponent>
    </React.Fragment>
  );
};

export default MainDashboardStep2HaveGoalComponent;
