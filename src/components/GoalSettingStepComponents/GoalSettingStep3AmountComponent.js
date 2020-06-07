import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { addComma2Number } from '../../js/CommonFunc';
import NavigationComponent from '../CommonUIComponents/NavigationComponent';
import ButtonComponent from '../../components/CommonUIComponents/ButtonComponent';

const CommonHeader = styled.div`
  margin-left: 2rem;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const Header = styled(CommonHeader)`
  margin-top: 2rem;
  font-size: 1.8rem;
  line-height: 3.2rem;
`;
const SubHeader = styled(CommonHeader)`
  font-size: 1.3rem;
  line-height: 2rem;
  color: grey;
`;

const InputAbsolute = styled.input`
  width: 77.7%;
  position: absolute;
  top: 16rem;
  left: 2rem;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
  font-size: 2.2rem;
  height: 3.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  outline: 0;
  text-align: right;
  &:focus {
    border-color: #16b877;
  }
`;
const Flex = styled.div`
  display: flex;
`;
const Unit = styled.div`
  position: absolute;
  top: 17rem;
  left: 85%;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2rem;
`;

const GoalSettingStep3AmountComponent = (props) => {
  const [goalAmount, setGoalAmount] = useState(props.goalAmount);
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
      <Header>목표하는 금액을 입력하세요.</Header>
      <SubHeader>이룰 수 있는 목표로 설정하는게 좋습니다.</SubHeader>
      <Flex>
        <InputAbsolute
          value={addComma2Number(goalAmount)}
          onChange={(e) => {
            setGoalAmount(e.target.value.replace(/,/gi, ''));
          }}
          placeholder={'0'}
        />
        <Unit>원</Unit>
      </Flex>

      <ButtonComponent
        disabled={goalAmount === '' ? true : false}
        onClick={() => {
          props.getChildGoalAmount(goalAmount);
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

export default GoalSettingStep3AmountComponent;
