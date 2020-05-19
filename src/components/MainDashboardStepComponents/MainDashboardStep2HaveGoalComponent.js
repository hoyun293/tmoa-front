import React, { useState } from 'react';
import styled from 'styled-components';
import { addComma2Number } from '../../js/CommonFunc';
import FlipNumbers from 'react-flip-numbers';
const Row = styled.div`
  display: flex;
  margin-top: 4rem;
  font-weight: bold;
`;
const Popup = styled.div`
  position: absoulte;
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
  //const [tempTotalAmountNumber, setTempTotalAmountNumber] = useState('')

  setTimeout(() => {
    setTempTotalAmountFraction(String(Math.floor(Math.random() * 1000)));
  }, 3000);
  return (
    <React.Fragment>
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
      <div>당신의 도전을 응원합니다.</div>
      <Popup>내 목표</Popup>
    </React.Fragment>
  );
};

export default MainDashboardStep2HaveGoalComponent;
