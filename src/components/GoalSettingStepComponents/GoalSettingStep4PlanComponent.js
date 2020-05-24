import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoalSettingStep4PlanComponent1Weekly from './GoalSettingStep4PlanComponent1Weekly';
import GoalSettingStep4PlanComponent2Monthly from './GoalSettingStep4PlanComponent2Monthly';
import { addComma2Number } from '../../js/CommonFunc';

const BackButton = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;
const TitleBox = styled.div`
  margin-top: 6rem;
  margin-left: 2.1rem;
`;
const TitleString = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 32px;
  letter-spacing: 0.5px;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const InputSavingAmount = styled.input`
  width: 20rem !important;
  margin-top: 3rem !important;
  text-align: right;
`;
const SubTitleString = styled.div`
  font-size: 1rem;
  color: grey;
  margin-top: 1rem;
`;

const Row = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SavingCodeSelect = styled.select`
  width: 5rem;
  display: block;
`;
const SavingCodeOption = styled.option`
  width: 1rem;
`;
const NextButton = styled.button`
  margin-top: 10rem;
  color: grey;
  display: block;
`;
const MinusPlusButton = styled.button`
  font-size: 2rem;
`;

const GoalSettingStep4PlanComponent = (props) => {
  const [savingCode, setSavingCode] = useState(props.savingCode);
  const [savingDetailCode, setSavingDetailCode] = useState(props.savingDetailCode);
  const [savingAmount, setSavingAmount] = useState(props.savingAmount);
  const [minusButtonDisabled, setMinusButtonDisabled] = useState(false);

  return (
    <React.Fragment>
      <BackButton
        onClick={() => {
          props.onChangePrevStep();
        }}
      >
        ←
      </BackButton>
      <TitleBox>
        <TitleString>목표 달성을 위해</TitleString>
        <TitleString>어떤 계획이 있으신가요?</TitleString>
      </TitleBox>

      <Row>
        <MinusPlusButton
          disabled={Number(savingAmount) < 100000 ? true : false}
          onClick={() => {
            setSavingAmount(String(Number(savingAmount) - 100000));
          }}
        >
          -
        </MinusPlusButton>
        <InputSavingAmount
          value={addComma2Number(savingAmount)}
          onChange={({ target }) => {
            setSavingAmount(target.value.replace(/,/gi, ''));
          }}
        ></InputSavingAmount>
        <MinusPlusButton
          onClick={() => {
            setSavingAmount(String(Number(savingAmount) + 100000));
          }}
        >
          +
        </MinusPlusButton>
      </Row>

      <Row>
        <SubTitleString>입금을 설정해주세요</SubTitleString>
        <SavingCodeSelect
          value={savingCode}
          onChange={(e) => {
            setSavingCode(e.target.value);
            setSavingDetailCode('');
          }}
        >
          <SavingCodeOption value="0">매주</SavingCodeOption>
          <SavingCodeOption value="1">매달</SavingCodeOption>
        </SavingCodeSelect>
      </Row>
      {savingCode === '0' && (
        <GoalSettingStep4PlanComponent1Weekly
          day={savingDetailCode}
          onClickDay={(dayCode) => {
            setSavingDetailCode(dayCode);
          }}
        ></GoalSettingStep4PlanComponent1Weekly>
      )}
      {savingCode === '1' && (
        <GoalSettingStep4PlanComponent2Monthly
          date={savingDetailCode}
          onClickDate={(dateCode) => {
            setSavingDetailCode(dateCode);
          }}
        ></GoalSettingStep4PlanComponent2Monthly>
      )}

      <NextButton
        disabled={savingDetailCode === '' || savingAmount === '' ? true : false}
        onClick={() => {
          if (Number(props.goalAmount) < Number(savingAmount)) {
            alert('목표금액보다 더 높은 금액을 입력하셨습니다.');
            return;
          }
          props.getChildSavingCode(savingCode);
          props.getChildSavingDetailCode(savingDetailCode);
          props.getChildSavingAmount(savingAmount);
          props.onChangeNextStep();
        }}
      >
        다음
      </NextButton>
    </React.Fragment>
  );
};

export default GoalSettingStep4PlanComponent;
