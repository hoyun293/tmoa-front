import React, { useState } from 'react';
import styled from 'styled-components';

const Day = styled.div`
    width 3rem;
    height: 3rem;
    background: grey;
    border-radius: 50%;
`;
const SelectedDay = styled.div`
    width 3rem;
    height: 3rem;
    background: pink;
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
        {day === '1' && <SelectedDay>월</SelectedDay>}
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
        {day === '2' && <SelectedDay>화</SelectedDay>}
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
        {day === '3' && <SelectedDay>수</SelectedDay>}
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
        {day === '4' && <SelectedDay>목</SelectedDay>}
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
        {day === '5' && <SelectedDay>금</SelectedDay>}
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
        {day === '6' && <SelectedDay>토</SelectedDay>}
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
        {day === '7' && <SelectedDay>일</SelectedDay>}
      </Row>
    </React.Fragment>
  );
};

export default GoalSettingStep4PlanComponent1Weekly;
