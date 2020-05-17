import React, { useState, useEffect } from 'react';
import 'flatpickr/dist/themes/material_blue.css';
import styled from 'styled-components';
import Flatpickr from 'react-flatpickr';

const BackButton = styled.div`
  font-weight: bold;
  font-size: 4rem;
`;

const TitleString = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 3rem;
`;
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
const NextButton = styled.button`
  margin-top: 10rem;
  color: grey;
  display: block;
`;
const GoalSettingStep2InfoComponent = (prop) => {
  const tagParserFunc = (str) => {
    var trimmedStr = str.substr(1).replace(/ /gi, '');
    var tagArray = trimmedStr.split('#');

    return tagArray;
  };

  const [goalName, setGoalName] = useState(prop.goalName);
  const [startDate, setStartDate] = useState(prop.startDate);
  const [endDate, setEndDate] = useState(prop.endDate);
  const [tagString, setTagString] = useState(prop.tagString);
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
      <BackButton
        onClick={() => {
          prop.onChangePrevStep();
        }}
      >
        ←
      </BackButton>
      <TitleString>환영합니다!</TitleString>

      <TitleString>목표를 설정해볼까요?</TitleString>
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
          options={{
            altInput: true,
            altFormat: 'F j, Y',
            dateFormat: 'Y-m-d',
          }}
          value={startDate}
          onChange={(startDate) => {
            setStartDate(startDate[0]);
          }}
        />
        <Flatpickr
          options={{ minDate: '2020-05-08', altFormat: 'F j, Y' }}
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
      <NextButton
        onClick={() => {
          prop.getChildGoalName(goalName);
          prop.getChildStartDate(startDate);
          prop.getChildEndDate(endDate);
          prop.getChildTagString(tagString);
          prop.onChangeNextStep();
        }}
      >
        다음
      </NextButton>
    </React.Fragment>
  );
};

export default GoalSettingStep2InfoComponent;
