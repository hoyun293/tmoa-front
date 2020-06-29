import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Flatpickr from 'react-flatpickr';
import './material_blue.css';
import NavigationComponent from '../CommonUIComponents/NavigationComponent';
import ButtonComponent from '../../components/CommonUIComponents/ButtonComponent';
import GoalSettingBadgeComponent from '../../components/GoalSettingStepComponents/GoalSettingBadgeComponent';
import { createNewDateTime } from '../../js/CommonFunc';
import { famousKeyword } from '../../api/goal-setting-api';
const CommonHeader = styled.div`
  margin-left: 2rem;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;

const Header = styled(CommonHeader)`
  margin-top: 2rem;
  font-size: 2.4rem;
  line-height: 3.2rem;
`;
const SubHeader = styled(CommonHeader)`
  font-size: 2rem;
  line-height: 2.7rem;
`;
const CommonProperty = styled.div`
  margin-left: 2rem;
  font-style: normal;
  margin-bottom: 1rem;
`;
const PropertyName = styled(CommonProperty)`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.3rem;
  margin-top: ${(props) => props.marginTop || '1rem'};
`;
const PropertyName2 = styled(CommonProperty)`
  margin-top: ${(props) => props.marginTop || '1.5rem'};
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2rem;
`;

const CommonInput = styled.input`
  width: 88.8%;
  left: 50%;
  transform: translateX(-50%);
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
  font-size: 1.4rem;
  line-height: 2rem;
  height: 2rem;
  outline: 0;
  &:focus {
    border-color: #16b877;
  }
`;
const InputAbsolute = styled(CommonInput)`
  position: absolute;
  top: 17rem;
`;

const Input = styled(CommonInput)`
  position: relative;
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

const GoalSettingStep2InfoComponent = (props) => {
  var goalName = props.goalName;
  var startDate = props.startDate;
  var endDate = props.endDate;
  var tagString = props.tagString;

  var [popularBadgeList, setPopularBadgeList] = useState([]);

  useEffect(() => {
    const requestFamousKeyword = async () => {
      const response = await famousKeyword({ category: 'DA' });
      const { data, code } = response.data;
      setPopularBadgeList(data);
    };

    requestFamousKeyword();
    //  console.log(data);
    //setPopularBadgeList();
  }, []);
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
          props.getChildGoalName(target.value);
        }}
      ></InputAbsolute>
      <PropertyName marginTop={'6rem'}>기간</PropertyName>
      <Row>
        {props.isUpdate === true && (
          <input
            className={'flatpickr-input'}
            readOnly={'readonly'}
            value={
              startDate.getFullYear() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getDate()
            }
          />
        )}
        {props.isUpdate === false && (
          <Flatpickr
            options={{
              defaultDate: new Date(),
              disableMobile: 'true',
            }}
            value={startDate}
            onChange={(startDate) => {
              var today = new Date();
              if (
                startDate[0].getFullYear() === today.getFullYear() &&
                startDate[0].getMonth() === today.getMonth() &&
                startDate[0].getDate() === today.getDate()
              ) {
                startDate[0].setHours(today.getHours());
                startDate[0].setMinutes(today.getMinutes());
              }
              props.getChildStartDate(startDate[0]);
            }}
          />
        )}

        <FromTo>부터</FromTo>
        <Flatpickr
          options={{ minDate: startDate, disableMobile: 'true' }}
          value={endDate}
          onChange={(endDate) => {
            props.getChildEndDate(endDate[0]);
          }}
        />
        <FromTo>까지</FromTo>
      </Row>
      <Flex>
        <AlignedRight>
          총{' '}
          {Math.round(
            (createNewDateTime(endDate) - createNewDateTime(startDate)) / (1000 * 60 * 60 * 24)
          )}
          일
        </AlignedRight>
      </Flex>
      <PropertyName marginTop={'0.7rem'}>태그</PropertyName>
      <Input
        placeholder={'#차#해외여행'}
        value={tagString}
        type="text"
        onChange={({ target }) => {
          props.getChildTagString(target.value);
        }}
      ></Input>
      <PropertyName2>많이 찾는 키워드</PropertyName2>
      <GoalSettingBadgeComponent
        badgeList={popularBadgeList}
        onclick={(badgeName) => {
          props.getChildTagString(tagString + '#' + badgeName);
        }}
      />
      <ButtonComponent
        disabled={goalName === '' || tagString === '' ? true : false}
        onClick={() => {
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
