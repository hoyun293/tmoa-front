import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { addComma2Number } from '../../js/CommonFunc';
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
  text-align: right;
`;

const NextButton = styled.button`
  margin-top: 25rem;
  color: grey;
  display: block;
`;
const Row = styled.div`
  display: flex;
  margin-top: 4rem;
`;
const GoalSettingStep3AmountComponent = (props) => {
  const [goalAmount, setGoalAmount] = useState(props.goalAmount);
  return (
    <React.Fragment>
      <BackButton
        onClick={() => {
          props.onChangePrevStep();
        }}
      >
        ←
      </BackButton>
      <FlexColumn>
        <TitleString>목표하는 금액을 입력하세요.</TitleString>
        <SubTitleString>이룰 수 있는 목표로 설정하는게 좋습니다.</SubTitleString>
        <InputGoalAmount
          value={addComma2Number(goalAmount)}
          onChange={(e) => {
            setGoalAmount(e.target.value.replace(/,/gi, ''));
          }}
        ></InputGoalAmount>
        원
        <NextButton
          disabled={goalAmount === '' ? true : false}
          onClick={() => {
            props.getChildGoalAmount(goalAmount);
            props.onChangeNextStep();
          }}
        >
          다음
        </NextButton>
      </FlexColumn>
    </React.Fragment>
  );
};

export default GoalSettingStep3AmountComponent;
