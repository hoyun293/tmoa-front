import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const Date = styled.div`
  margin: 1rem;
`;
const GoalSettingStep4PlanComponent2Monthly = (prop) => {
  return (
    <React.Fragment>
      <Row>
        <Date
          onClick={() => {
            prop.onClickDate('1');
          }}
        >
          1
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('2');
          }}
        >
          2
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('3');
          }}
        >
          3
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('4');
          }}
        >
          4
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('5');
          }}
        >
          5
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('6');
          }}
        >
          6
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('7');
          }}
        >
          7
        </Date>
      </Row>
      <Row>
        <Date
          onClick={() => {
            prop.onClickDate('8');
          }}
        >
          8
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('9');
          }}
        >
          9
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('10');
          }}
        >
          10
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('11');
          }}
        >
          11
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('12');
          }}
        >
          12
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('13');
          }}
        >
          13
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('14');
          }}
        >
          14
        </Date>
      </Row>
      <Row>
        <Date
          onClick={() => {
            prop.onClickDate('15');
          }}
        >
          15
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('16');
          }}
        >
          16
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('17');
          }}
        >
          17
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('18');
          }}
        >
          18
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('19');
          }}
        >
          19
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('20');
          }}
        >
          20
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('21');
          }}
        >
          21
        </Date>
      </Row>
      <Row>
        <Date
          onClick={() => {
            prop.onClickDate('22');
          }}
        >
          22
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('23');
          }}
        >
          23
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('24');
          }}
        >
          24
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('25');
          }}
        >
          25
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('26');
          }}
        >
          26
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('27');
          }}
        >
          27
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('28');
          }}
        >
          28
        </Date>
      </Row>
      <Row>
        <Date
          onClick={() => {
            prop.onClickDate('29');
          }}
        >
          29
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('30');
          }}
        >
          30
        </Date>
        <Date
          onClick={() => {
            prop.onClickDate('fin');
          }}
        >
          월말
        </Date>
      </Row>
    </React.Fragment>
  );
};

export default GoalSettingStep4PlanComponent2Monthly;
