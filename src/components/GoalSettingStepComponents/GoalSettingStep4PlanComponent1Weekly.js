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

const GoalSettingStep4PlanComponent1Weekly = (props) => {
  // const [day, setDay] = useState(props.day);
  var day = props.day;
  return (
    <React.Fragment>
      <Row>
        {day !== '1' && (
          <Day
            onClick={() => {
              props.onClickDay('1');
            }}
          >
            월
          </Day>
        )}
        {day === '1' && (
          <Day color={'#D0F1E4'} fontColor={'#118A59'}>
            월
          </Day>
        )}
        {day !== '2' && (
          <Day
            onClick={() => {
              props.onClickDay('2');
            }}
          >
            화
          </Day>
        )}
        {day === '2' && (
          <Day color={'#D0F1E4'} fontColor={'#118A59'}>
            화
          </Day>
        )}
        {day !== '3' && (
          <Day
            onClick={() => {
              props.onClickDay('3');
            }}
          >
            수
          </Day>
        )}
        {day === '3' && (
          <Day color={'#D0F1E4'} fontColor={'#118A59'}>
            수
          </Day>
        )}
        {day !== '4' && (
          <Day
            onClick={() => {
              props.onClickDay('4');
            }}
          >
            목
          </Day>
        )}
        {day === '4' && (
          <Day color={'#D0F1E4'} fontColor={'#118A59'}>
            목
          </Day>
        )}
        {day !== '5' && (
          <Day
            onClick={() => {
              props.onClickDay('5');
            }}
          >
            금
          </Day>
        )}
        {day === '5' && (
          <Day color={'#D0F1E4'} fontColor={'#118A59'}>
            금
          </Day>
        )}
        {day !== '6' && (
          <Day
            onClick={() => {
              props.onClickDay('6');
            }}
          >
            토
          </Day>
        )}
        {day === '6' && (
          <Day color={'#D0F1E4'} fontColor={'#118A59'}>
            토
          </Day>
        )}
        {day !== '7' && (
          <Day
            onClick={() => {
              props.onClickDay('7');
            }}
          >
            일
          </Day>
        )}
        {day === '7' && (
          <Day color={'#D0F1E4'} fontColor={'#118A59'}>
            일
          </Day>
        )}
      </Row>
    </React.Fragment>
  );
};

export default GoalSettingStep4PlanComponent1Weekly;
