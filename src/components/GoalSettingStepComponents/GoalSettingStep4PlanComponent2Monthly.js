import React, { useState } from 'react';
import styled from 'styled-components';

const DateTable = styled.div`
  width: 88.8%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: 30rem;
  display: flex;
  flex-direction: column;
`;
const Row = styled.div``;

const Date = styled.div`
  display: inline-block;
  width: 13.6%;
  height: 13.6%;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 4rem;
  text-align: center;
  color: ${(props) => props.fontColor || '#AAAAAA'};
  border-radius: 50%;
  background: ${(props) => props.color || ''};
`;

const GoalSettingStep4PlanComponent2Monthly = (props) => {
  const [date, setDate] = useState(props.date);
  return (
    <React.Fragment>
      <DateTable>
        <Row>
          {date !== '1' && (
            <Date
              onClick={() => {
                setDate('1');
                props.onClickDate('1');
              }}
            >
              1
            </Date>
          )}
          {date === '1' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              1
            </Date>
          )}
          {date !== '2' && (
            <Date
              onClick={() => {
                setDate('2');
                props.onClickDate('2');
              }}
            >
              2
            </Date>
          )}
          {date === '2' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              2
            </Date>
          )}
          {date !== '3' && (
            <Date
              onClick={() => {
                setDate('3');
                props.onClickDate('3');
              }}
            >
              3
            </Date>
          )}
          {date === '3' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              3
            </Date>
          )}
          {date !== '4' && (
            <Date
              onClick={() => {
                setDate('4');
                props.onClickDate('4');
              }}
            >
              4
            </Date>
          )}
          {date === '4' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              4
            </Date>
          )}
          {date !== '5' && (
            <Date
              onClick={() => {
                setDate('5');
                props.onClickDate('5');
              }}
            >
              5
            </Date>
          )}
          {date === '5' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              5
            </Date>
          )}
          {date !== '6' && (
            <Date
              onClick={() => {
                setDate('6');
                props.onClickDate('6');
              }}
            >
              6
            </Date>
          )}
          {date === '6' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              6
            </Date>
          )}
          {date !== '7' && (
            <Date
              onClick={() => {
                setDate('7');
                props.onClickDate('7');
              }}
            >
              7
            </Date>
          )}
          {date === '7' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              7
            </Date>
          )}
        </Row>
        <Row>
          {date !== '8' && (
            <Date
              onClick={() => {
                setDate('8');
                props.onClickDate('8');
              }}
            >
              8
            </Date>
          )}
          {date === '8' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              8
            </Date>
          )}
          {date !== '9' && (
            <Date
              onClick={() => {
                setDate('9');
                props.onClickDate('9');
              }}
            >
              9
            </Date>
          )}
          {date === '9' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              9
            </Date>
          )}
          {date !== '10' && (
            <Date
              onClick={() => {
                setDate('10');
                props.onClickDate('10');
              }}
            >
              10
            </Date>
          )}
          {date === '10' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              10
            </Date>
          )}
          {date !== '11' && (
            <Date
              onClick={() => {
                setDate('11');
                props.onClickDate('11');
              }}
            >
              11
            </Date>
          )}
          {date === '11' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              11
            </Date>
          )}
          {date !== '12' && (
            <Date
              onClick={() => {
                setDate('12');
                props.onClickDate('12');
              }}
            >
              12
            </Date>
          )}
          {date === '12' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              12
            </Date>
          )}
          {date !== '13' && (
            <Date
              onClick={() => {
                setDate('13');
                props.onClickDate('13');
              }}
            >
              13
            </Date>
          )}
          {date === '13' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              13
            </Date>
          )}
          {date !== '14' && (
            <Date
              onClick={() => {
                setDate('14');
                props.onClickDate('14');
              }}
            >
              14
            </Date>
          )}
          {date === '14' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              14
            </Date>
          )}
        </Row>
        <Row>
          {date !== '15' && (
            <Date
              onClick={() => {
                setDate('15');
                props.onClickDate('15');
              }}
            >
              15
            </Date>
          )}
          {date === '15' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              15
            </Date>
          )}
          {date !== '16' && (
            <Date
              onClick={() => {
                setDate('16');
                props.onClickDate('16');
              }}
            >
              16
            </Date>
          )}
          {date === '16' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              16
            </Date>
          )}
          {date !== '17' && (
            <Date
              onClick={() => {
                setDate('17');
                props.onClickDate('17');
              }}
            >
              17
            </Date>
          )}
          {date === '17' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              17
            </Date>
          )}
          {date !== '18' && (
            <Date
              onClick={() => {
                setDate('18');
                props.onClickDate('18');
              }}
            >
              18
            </Date>
          )}
          {date === '18' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              18
            </Date>
          )}
          {date !== '19' && (
            <Date
              onClick={() => {
                setDate('19');
                props.onClickDate('19');
              }}
            >
              19
            </Date>
          )}
          {date === '19' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              19
            </Date>
          )}
          {date !== '20' && (
            <Date
              onClick={() => {
                setDate('20');
                props.onClickDate('20');
              }}
            >
              20
            </Date>
          )}
          {date === '20' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              20
            </Date>
          )}
          {date !== '21' && (
            <Date
              onClick={() => {
                setDate('21');
                props.onClickDate('21');
              }}
            >
              21
            </Date>
          )}
          {date === '21' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              21
            </Date>
          )}
        </Row>
        <Row>
          {date !== '22' && (
            <Date
              onClick={() => {
                setDate('22');
                props.onClickDate('22');
              }}
            >
              22
            </Date>
          )}
          {date === '22' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              22
            </Date>
          )}
          {date !== '23' && (
            <Date
              onClick={() => {
                setDate('23');
                props.onClickDate('23');
              }}
            >
              23
            </Date>
          )}
          {date === '23' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              23
            </Date>
          )}
          {date !== '24' && (
            <Date
              onClick={() => {
                setDate('24');
                props.onClickDate('24');
              }}
            >
              24
            </Date>
          )}
          {date === '24' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              24
            </Date>
          )}
          {date !== '25' && (
            <Date
              onClick={() => {
                setDate('25');
                props.onClickDate('25');
              }}
            >
              25
            </Date>
          )}
          {date === '25' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              25
            </Date>
          )}
          {date !== '26' && (
            <Date
              onClick={() => {
                setDate('26');
                props.onClickDate('26');
              }}
            >
              26
            </Date>
          )}
          {date === '26' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              26
            </Date>
          )}
          {date !== '27' && (
            <Date
              onClick={() => {
                setDate('27');
                props.onClickDate('27');
              }}
            >
              27
            </Date>
          )}
          {date === '27' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              27
            </Date>
          )}
          {date !== '28' && (
            <Date
              onClick={() => {
                setDate('28');
                props.onClickDate('28');
              }}
            >
              28
            </Date>
          )}
          {date === '28' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              28
            </Date>
          )}
        </Row>
        <Row>
          {date !== '29' && (
            <Date
              onClick={() => {
                setDate('29');
                props.onClickDate('29');
              }}
            >
              29
            </Date>
          )}
          {date === '29' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              29
            </Date>
          )}
          {date !== '30' && (
            <Date
              onClick={() => {
                setDate('30');
                props.onClickDate('30');
              }}
            >
              30
            </Date>
          )}
          {date === '30' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              30
            </Date>
          )}
          {date !== 'L' && (
            <Date
              onClick={() => {
                setDate('L');
                props.onClickDate('L');
              }}
            >
              월말
            </Date>
          )}
          {date === 'L' && (
            <Date fontColor={'#118A59'} color={'#D0F1E4'}>
              월말
            </Date>
          )}
        </Row>
      </DateTable>
    </React.Fragment>
  );
};

export default GoalSettingStep4PlanComponent2Monthly;
