import React from 'react';
import styled from 'styled-components';

const Day = styled.div`
    width 3rem;
    height: 3rem;
    background: grey;
    border-radius: 50%;
`;

const Row = styled.div`
  display: flex;
  margin-top: 4rem;
`;

const GoalSettingStep4PlanComponent1Weekly = (prop) => {
  return (
    <React.Fragment>
      <Row>
        <Day
          onClick={() => {
            prop.onClickDay('1');
          }}
        >
          월
        </Day>
        <Day
          onClick={() => {
            prop.onClickDay('2');
          }}
        >
          화
        </Day>
        <Day
          onClick={() => {
            prop.onClickDay('3');
          }}
        >
          수
        </Day>
        <Day
          onClick={() => {
            prop.onClickDay('4');
          }}
        >
          목
        </Day>
        <Day
          onClick={() => {
            prop.onClickDay('5');
          }}
        >
          금
        </Day>
        <Day
          onClick={() => {
            prop.onClickDay('6');
          }}
        >
          토
        </Day>
        <Day
          onClick={() => {
            prop.onClickDay('7');
          }}
        >
          일
        </Day>
      </Row>
    </React.Fragment>
  );
};

export default GoalSettingStep4PlanComponent1Weekly;
