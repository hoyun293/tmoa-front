import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { GOAL_SETTING_AMOUNT } from '../../reducer/goal';

const BackButton = styled.div`
  font-weight: bold;
  font-size: 4rem;
`;

const FlexColumn = styled.div`
  flex-direction: column;
`;
const TitleString = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 3rem;
`;
const SubTitleString = styled.div`
  font-size: 1rem;
  color: grey;
  margin-top: 1rem;
`;
const InputGoalAmount = styled.input`
  margin-left: 2rem !important;
  width: 20rem !important;
  margin-top: 3rem !important;
`;

const NextButton = styled.button`
  margin-top: 25rem;
  color: grey;
  display: block;
`;
const GoalSettingStep3AmountComponent = (prop) => {
  const dispatch = useDispatch();
  const [goalAmount, setGoalAmount] = useState('');
  return (
    <React.Fragment>
      <BackButton
        onClick={() => {
          prop.onChangePrevStep();
        }}
      >
        ←
      </BackButton>
      <FlexColumn>
        <TitleString>목표하는 금액을 입력하세요.</TitleString>
        <SubTitleString>이룰 수 있는 목표로 설정하는게 좋습니다.</SubTitleString>
        <InputGoalAmount
          value={goalAmount}
          onChange={({ target }) => {
            setGoalAmount(target.value);
          }}
        ></InputGoalAmount>
        원
        <NextButton
          onClick={() => {
            dispatch({ type: GOAL_SETTING_AMOUNT, amount: goalAmount });
            prop.onChangeNextStep();
          }}
        >
          다음
        </NextButton>
      </FlexColumn>
    </React.Fragment>
  );
};

export default GoalSettingStep3AmountComponent;
