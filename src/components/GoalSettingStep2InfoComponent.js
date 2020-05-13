import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GOAL_SETTING_INFO } from '../reducer/goal';
import 'flatpickr/dist/themes/material_green.css';
import styled from 'styled-components';
import Flatpickr from 'react-flatpickr';
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

const PopularTagsBox = styled.div`
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
  const tagParserFunc = (str) => {
    var trimmedStr = str.substr(1).replace(/ /gi, '');
    var tagArray = trimmedStr.split('#');

    return tagArray;
  };
  const dispatch = useDispatch();

  const goalState = useSelector((state) => state.goal);
  const [goalName, setGoalName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [tagString, setTagString] = useState('');
  const [popularTags, setpopularTags] = useState([
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
    <React.Fragment>
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
      <InputTags
        value={tagString}
        type="text"
        onChange={({ target }) => {
          setTagString(target.value);
        }}
      ></InputTags>
      <PopularTagsBox>
        <div>많이 찾는 키워드</div>
        <Flex>
          <Tag
            onClick={() => {
              setTagString(tagString + '#' + popularTags[0]);
            }}
          >
            {popularTags[0]}
          </Tag>
          <Tag
            onClick={() => {
              setTagString(tagString + '#' + popularTags[1]);
            }}
          >
            {popularTags[1]}
          </Tag>
          <Tag
            onClick={() => {
              setTagString(tagString + '#' + popularTags[2]);
            }}
          >
            {popularTags[2]}
          </Tag>
          <Tag
            onClick={() => {
              setTagString(tagString + '#' + popularTags[3]);
            }}
          >
            {popularTags[3]}
          </Tag>
          <Tag
            onClick={() => {
              setTagString(tagString + '#' + popularTags[4]);
            }}
          >
            {popularTags[4]}
          </Tag>
        </Flex>
        <Flex>
          <Tag
            onClick={() => {
              setTagString(tagString + '#' + popularTags[5]);
            }}
          >
            {popularTags[5]}
          </Tag>
          <Tag
            onClick={() => {
              setTagString(tagString + '#' + popularTags[6]);
            }}
          >
            {popularTags[6]}
          </Tag>
          <Tag
            onClick={() => {
              setTagString(tagString + '#' + popularTags[7]);
            }}
          >
            {popularTags[7]}
          </Tag>
          <Tag
            onClick={() => {
              setTagString(tagString + '#' + popularTags[8]);
            }}
          >
            {popularTags[8]}
          </Tag>
          <Tag
            onClick={() => {
              setTagString(tagString + '#' + popularTags[9]);
            }}
          >
            {popularTags[9]}
          </Tag>
        </Flex>
      </PopularTagsBox>
      <Row
        onClick={() => {
          dispatch({
            type: GOAL_SETTING_INFO,
            data: {
              targetName: goalName,
              startDate: startDate,
              endDate: endDate,
              tags: tagParserFunc(tagString),
            },
          });
          prop.onChangeNextStep();
        }}
      >
        다음
      </Row>
    </React.Fragment>
  );
};

export default GoalSettingStep2InfoComponent;
