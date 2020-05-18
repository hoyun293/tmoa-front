import React, { useState } from 'react';
import styled from 'styled-components';

const Day = styled.div`
    width 3rem;
    height: 3rem;
    background: ${(prop) => prop.color || 'grey'};
    border-radius: 50%;
`;
const Row = styled.div`
  display: flex;
  margin-top: 4rem;
`;

const GoalSettingStep4PlanComponent1Weekly = (prop) => {
  const [day, setDay] = useState(prop.day);
  return (
    <React.Fragment>
      <Row>
        {day !== '1' && (
          <Day
            onClick={() => {
              prop.onClickDay('1');
              setDay('1');
            }}
          >
            월
          </Day>
        )}
        {day === '1' && <Day color={'pink'}>월</Day>}
        {day !== '2' && (
          <Day
            onClick={() => {
              prop.onClickDay('2');
              setDay('2');
            }}
          >
            화
          </Day>
        )}
        {day === '2' && <Day color={'pink'}>화</Day>}
        {day !== '3' && (
          <Day
            onClick={() => {
              prop.onClickDay('3');
              setDay('3');
            }}
          >
            수
          </Day>
        )}
        {day === '3' && <Day color={'pink'}>수</Day>}
        {day !== '4' && (
          <Day
            onClick={() => {
              prop.onClickDay('4');
              setDay('4');
            }}
          >
            목
          </Day>
        )}
        {day === '4' && <Day color={'pink'}>목</Day>}
        {day !== '5' && (
          <Day
            onClick={() => {
              prop.onClickDay('5');
              setDay('5');
            }}
          >
            금
          </Day>
        )}
        {day === '5' && <Day color={'pink'}>금</Day>}
        {day !== '6' && (
          <Day
            onClick={() => {
              prop.onClickDay('6');
              setDay('6');
            }}
          >
            토
          </Day>
        )}
        {day === '6' && <Day color={'pink'}>토</Day>}
        {day !== '7' && (
          <Day
            onClick={() => {
              prop.onClickDay('7');
              setDay('7');
            }}
          >
            일
          </Day>
        )}
        {day === '7' && <Day color={'pink'}>일</Day>}
      </Row>
    </React.Fragment>
  );
};

export default GoalSettingStep4PlanComponent1Weekly;
