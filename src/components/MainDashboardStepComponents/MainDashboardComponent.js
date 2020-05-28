import React from 'react';
import styled from 'styled-components';
import FlipNumbers from 'react-flip-numbers';
import { addComma2Number } from '../../js/CommonFunc';
const TotalAmountCard = styled.div`
  position: absolute;
  top: 16.4rem;
  left: 50%;
  transform: translateX(-50%);
  width: 32rem;
  height: 18rem;
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 0.6rem;
  text-align: center;
`;
const CardElement = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-style: normal;
  font-weight: 500;
  line-height: 2.2rem;
`;
const TotalAmountCardHeader = styled(CardElement)`
  margin-top: 3rem;
  font-size: 1.5rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const TotalAmountCardBody = styled(CardElement)`
  display: flex;
  margin-top: 5rem;
  font-size: 2rem;
`;
const TotalAmountCardFooter = styled(CardElement)`
  width: ${(props) => (props.footerLen ? '23rem' : '22rem')};
  margin-top: 10.3rem;
  font-weight: normal;
  font-size: 1.4rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const MainDashboardComponent = (props) => {
  return (
    <TotalAmountCard>
      <TotalAmountCardHeader>{props.header}</TotalAmountCardHeader>
      <TotalAmountCardBody>
        {props.integer === 0 && '0'}
        {props.integer > 0 && addComma2Number(props.integer) + '.'}
        {props.integer > 0 && (
          <FlipNumbers
            height={18}
            width={10}
            color="red"
            background="white"
            play
            duration={3}
            perspective={200}
            numbers={props.fraction}
          />
        )}
        원
      </TotalAmountCardBody>
      <TotalAmountCardFooter footerLen={props.footerLen}>{props.footer}</TotalAmountCardFooter>
    </TotalAmountCard>
  );
};

export default MainDashboardComponent;