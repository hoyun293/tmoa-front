import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Flatpickr from 'react-flatpickr';
import './material_blue.css';
import NavigationComponent from '../CommonUIComponents/NavigationComponent';
import ButtonComponent from '../../components/CommonUIComponents/ButtonComponent';
import GoalSettingBadgeComponent from '../../components/GoalSettingStepComponents/GoalSettingBadgeComponent';
const Header = styled.div`
  margin-top: 2rem;
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
  margin-bottom: 1rem;
`;
const PropertyName2 = styled.div`
  margin-left: 2rem;
  margin-top: ${(props) => props.marginTop || '1.5rem'};
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2rem;
  margin-bottom: 1rem;
`;
const InputAbsolute = styled.input`
  width: 88.8%;
  position: absolute;
  top: 17rem;
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
  &:focus {
    border-color: #16b877;
  }
`;

const Input = styled.input`
  width: 88.8%;
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
  &:focus {
    border-color: #16b877;
  }
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

const PopularTagsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const Tag = styled.div`
  width 6rem;
  height: 3rem;
  background: yellow;
  border-radius: 50%;
  `;

const GoalSettingStep2InfoComponent = (props) => {
  const [goalName, setGoalName] = useState(props.goalName);
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);
  const [tagString, setTagString] = useState(props.tagString);
  /*
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
  */
  const popularBadgeList = [
    {
      index: 0,
      name: '자동차',
    },
    {
      index: 1,
      name: '여행',
    },
    {
      index: 2,
      name: '베트남여행',
    },
    {
      index: 3,
      name: '아이패드',
    },
    {
      index: 4,
      name: '무접점키보드',
    },
    {
      index: 5,
      name: '어글리슈즈',
    },
    {
      index: 6,
      name: 'LG그램',
    },
    {
      index: 7,
      name: '맞춤정장',
    },
    {
      index: 8,
      name: '부동산',
    },
    {
      index: 9,
      name: '커브드모니터',
    },
    {
      index: 10,
      name: '반지',
    },
  ];
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
      <InputAbsolute
        value={goalName}
        onChange={({ target }) => {
          setGoalName(target.value);
        }}
      ></InputAbsolute>
      <PropertyName marginTop={'6rem'}>기간</PropertyName>
      <Row>
        <Flatpickr
          options={{
            defaultDate: new Date(),
            disableMobile: 'true',
          }}
          value={startDate}
          onChange={(startDate) => {
            setStartDate(startDate[0]);
          }}
        />
        <FromTo>부터</FromTo>
        <Flatpickr
          options={{ minDate: startDate, disableMobile: 'true' }}
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
      <Input
        placeholder={'#차#해외여행'}
        value={tagString}
        type="text"
        onChange={({ target }) => {
          setTagString(target.value);
        }}
      ></Input>
      <PropertyName2>많이 찾는 키워드</PropertyName2>
      <GoalSettingBadgeComponent
        badgeList={popularBadgeList}
        onclick={(badgeName) => {
          setTagString(tagString + '#' + badgeName);
        }}
      />
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
        top={'55.6rem'}
      ></ButtonComponent>
    </React.Fragment>
  );
};

export default GoalSettingStep2InfoComponent;
