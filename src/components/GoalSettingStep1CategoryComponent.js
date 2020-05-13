import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GOAL_SETTING_CATEGORY } from '../reducer/goal';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  margin-top: 4rem;
`;

const UnSelectedCategoryBox = styled.div`
  padding: 3rem;
  border: 1px solid grey;
`;

const SelectedCategoryBox = styled.div`
  padding: 3rem;
  border: 3px solid red;
`;

const GoalSettingStep1CategoryComponent = (prop) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(99);
  return (
    <React.Fragment>
      <div>GoalSettingStep1CategoryComponent</div>
      <Row>
        {category === 0 && <SelectedCategoryBox>집</SelectedCategoryBox>}
        {category !== 0 && (
          <UnSelectedCategoryBox
            onClick={() => {
              setCategory(0);
            }}
          >
            집
          </UnSelectedCategoryBox>
        )}
        {category === 1 && <SelectedCategoryBox>자동치</SelectedCategoryBox>}
        {category !== 1 && (
          <UnSelectedCategoryBox
            onClick={() => {
              setCategory(1);
            }}
          >
            자동차
          </UnSelectedCategoryBox>
        )}
      </Row>
      <Row>
        {category === 2 && <SelectedCategoryBox>디지털/가전</SelectedCategoryBox>}
        {category !== 2 && (
          <UnSelectedCategoryBox
            onClick={() => {
              setCategory(2);
            }}
          >
            디지털/가전
          </UnSelectedCategoryBox>
        )}
        {category === 3 && <SelectedCategoryBox>가구/인테리어</SelectedCategoryBox>}
        {category !== 3 && (
          <UnSelectedCategoryBox
            onClick={() => {
              setCategory(3);
            }}
          >
            가구/인테리어
          </UnSelectedCategoryBox>
        )}
      </Row>
      <Row>
        {category === 4 && <SelectedCategoryBox>명품</SelectedCategoryBox>}
        {category !== 4 && (
          <UnSelectedCategoryBox
            onClick={() => {
              setCategory(4);
            }}
          >
            명품
          </UnSelectedCategoryBox>
        )}
        {category === 5 && <SelectedCategoryBox>국내/해외여행</SelectedCategoryBox>}
        {category !== 5 && (
          <UnSelectedCategoryBox
            onClick={() => {
              setCategory(5);
            }}
          >
            국내/해외여행
          </UnSelectedCategoryBox>
        )}
      </Row>
      <Row>
        {category === 6 && <SelectedCategoryBox>반려동물</SelectedCategoryBox>}
        {category !== 6 && (
          <UnSelectedCategoryBox
            onClick={() => {
              setCategory(6);
            }}
          >
            반려동물
          </UnSelectedCategoryBox>
        )}
        {category === 7 && <SelectedCategoryBox>게임/취미</SelectedCategoryBox>}
        {category !== 7 && (
          <UnSelectedCategoryBox
            onClick={() => {
              setCategory(7);
            }}
          >
            게임/취미
          </UnSelectedCategoryBox>
        )}
      </Row>
      <Row
        onClick={() => {
          dispatch({ type: GOAL_SETTING_CATEGORY, category: category });
          prop.onChangeNextStep();
        }}
      >
        다음
      </Row>
    </React.Fragment>
  );
};

export default GoalSettingStep1CategoryComponent;
