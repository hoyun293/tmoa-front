import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GOAL_SETTING_INFO } from '../reducer/goal';

import styled from 'styled-components';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import { useSelector } from 'react-redux';
const InputGoalName = styled.input`
  margin-top: 4rem;
`;
const Row = styled.div`
  display: flex;
  margin-top: 4rem;
`;

const Flex = styled.div`
  display: flex;
`;

const AlignedRight = styled.div`
  margin-left: auto;
`;

const InputTags = styled.input`
  margin-top: 4rem;
`;

const TagsBox = styled.div`
  border: 1px solid black;
  backgound-color: grey;
`;

const Tag = styled.div`
  width 6rem;
  height: 3rem;
  background: yellow;
  border-radius: 50%;
  `;
const GoalSettingStep2InfoComponent = (prop) => {
  const dispatch = useDispatch();

  const goalState = useSelector((state) => state.goal);
  const [goalName, setGoalName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [tags, setTags] = useState([
    '자동차',
    '여행',
    '베트남 여행',
    '아이패드',
    '무접점 키보드',
    '어글리 슈즈',
    'LG그램',
    '맞춤 정장',
    '부동산',
    '커브드 모니터',
  ]);

  useEffect(() => {
    console.log(goalName);
  });
  return (
    <div>
      <div>목표 기간 등을 입력하세요</div>
      <div>목표명</div>
      <InputGoalName
        value={goalName}
        onChange={({ target }) => {
          setGoalName(target.value);
        }}
      ></InputGoalName>
      <div>기간</div>
      <Row>
        <Flatpickr
          options={{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-D' }}
          data-enable-time
          value={startDate}
          onChange={(startDate) => {
            setStartDate(startDate[0]);
          }}
        />
        <Flatpickr
          options={{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-D' }}
          data-enable-time
          value={endDate}
          onChange={(endDate) => {
            setEndDate(endDate[0]);
          }}
        />
      </Row>
      <Flex>
        <AlignedRight>총{Math.round((endDate - startDate) / (1000 * 60 * 60 * 24))}일</AlignedRight>
      </Flex>
      <div>태그</div>
      <InputTags></InputTags>
      <TagsBox>
        <div>많이 찾는 키워드</div>
        <Flex>
          <Tag>{tags[0]}</Tag>
          <Tag>{tags[1]}</Tag>
          <Tag>{tags[2]}</Tag>
          <Tag>{tags[3]}</Tag>
          <Tag>{tags[4]}</Tag>
        </Flex>
        <Flex>
          <Tag>{tags[5]}</Tag>
          <Tag>{tags[6]}</Tag>
          <Tag>{tags[7]}</Tag>
          <Tag>{tags[8]}</Tag>
          <Tag>{tags[9]}</Tag>
        </Flex>
      </TagsBox>
      <Row
        onClick={() => {
          dispatch({
            type: GOAL_SETTING_INFO,
            data: { targetName: goalName, startDate: startDate, endDate: endDate, tag: '' },
          });
          prop.onChangeNextStep();
        }}
      >
        다음
      </Row>
    </div>
  );
};

export default GoalSettingStep2InfoComponent;
