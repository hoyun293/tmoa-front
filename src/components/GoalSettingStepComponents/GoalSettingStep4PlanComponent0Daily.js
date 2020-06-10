import React, { useState } from 'react';
import styled from 'styled-components';

const Day = styled.div`
    width 4rem;
    height: 4rem;
    background: ${(props) => props.color || '#F2F2F2'};
    border-radius: 50%;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 4rem;
    color: ${(props) => props.fontColor || '#AAAAAA'};
`;
const Row = styled.div`
  position: absolute;
  width: 88.8%;
  left: 50%;
  transform: translateX(-50%);
  top: 32rem;
  display: flex;
  justify-content: space-between;
`;


const GoalSettingStep4PlanComponent0Daily = (props) => {
  return (
    <React.Fragment>
      <Row>
          <Day color={'#D0F1E4'} fontColor={'#118A59'}>
            월
          </Day>
          <Day color={'#D0F1E4'} fontColor={'#118A59'}>
            화
          </Day>
          <Day color={'#D0F1E4'} fontColor={'#118A59'}>
            수
          </Day>
          <Day color={'#D0F1E4'} fontColor={'#118A59'}>
            목
          </Day>
          <Day color={'#D0F1E4'} fontColor={'#118A59'}>
            금
          </Day>
          <Day color={'#D0F1E4'} fontColor={'#118A59'}>
            토
          </Day>
          <Day color={'#D0F1E4'} fontColor={'#118A59'}>
            일
          </Day>
      </Row>
    </React.Fragment>
  );
};

export default GoalSettingStep4PlanComponent0Daily;
