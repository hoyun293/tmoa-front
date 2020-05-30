import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Flatpickr from 'react-flatpickr';
import './material_blue.css';
import NavigationComponent from '../CommonUIComponents/NavigationComponent';
import ButtonComponent from '../../components/CommonUIComponents/ButtonComponent';

const Header = styled.div`
  margin-top: 1rem;
  margin-left: 2rem;
  font-style: normal;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const SubHeader = styled.div`
  margin-left: 2rem;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.7rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const PropertyName = styled.div`
  margin-left: 2rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.3rem;
  margin-top: ${(props) => props.marginTop || '1rem'};
`;
const InputGoalName = styled.input`
  width: 88%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
  font-size: 1.4rem;
  height: 2rem;
  line-height: 2rem;
  outline: 0;
`;
const Row = styled.div`
  display: flex;
  margin-top: 4rem;
  width: 88.8%;
  margin: 0 auto;
  margin-bottom: 0.6rem;
`;
const FromTo = styled.div`
  width: 4rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: center;
  display: block;
`;
const Flex = styled.div`
  width: 88.8%;
  margin: 0 auto;
  display: flex;
`;

const AlignedRight = styled.div`
  margin-left: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.7rem;
  text-align: center;
  color: #ff8a45;
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
const GoalSettingStep2InfoComponent = (props) => {
  const [goalName, setGoalName] = useState(props.goalName);
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);
  const [tagString, setTagString] = useState(props.tagString);
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

  return (
    <React.Fragment>
      <NavigationComponent
        haveBackButton={true}
        haveCancelButton={true}
        onClickCancelButton={() => {
          props.onClickCancelButton();
        }}
        onClickBackButton={() => {
          props.onClickBackButton();
        }}
      />
      <Header>환영합니다!</Header>
      <SubHeader>목표를 설정해볼까요?</SubHeader>
      <PropertyName marginTop={'3rem'}>목표명</PropertyName>
      <InputGoalName
        value={goalName}
        onChange={({ target }) => {
          setGoalName(target.value);
        }}
      ></InputGoalName>
      <PropertyName marginTop={'3rem'}>기간</PropertyName>
      <Row>
        <Flatpickr
          options={{
            defaultDate: new Date(),
          }}
          value={startDate}
          onChange={(startDate) => {
            setStartDate(startDate[0]);
          }}
        />
        <FromTo>부터</FromTo>
        <Flatpickr
          options={{ minDate: startDate }}
          value={endDate}
          onChange={(endDate) => {
            setEndDate(endDate[0]);
          }}
        />
        <FromTo>까지</FromTo>
      </Row>
      <Flex>
        <AlignedRight>
          총 {Math.round((endDate - startDate) / (1000 * 60 * 60 * 24))}일
        </AlignedRight>
      </Flex>
      <PropertyName marginTop={'0.7rem'}>태그</PropertyName>
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
      <ButtonComponent
        disabled={goalName === '' || tagString === '' ? true : false}
        onClick={() => {
          props.getChildGoalName(goalName);
          props.getChildStartDate(startDate);
          props.getChildEndDate(endDate);
          props.getChildTagString(tagString);
          props.onChangeNextStep();
        }}
        width={'32rem'}
        height={'5rem'}
        text={`다음`}
        radius={'0.5rem'}
        marginTop={'6rem'}
      ></ButtonComponent>
    </React.Fragment>
  );
};

export default GoalSettingStep2InfoComponent;
