import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoalSettingStep4PlanComponent1Weekly from './GoalSettingStep4PlanComponent1Weekly';
import GoalSettingStep4PlanComponent2Monthly from './GoalSettingStep4PlanComponent2Monthly';
import { addComma2Number } from '../../js/CommonFunc';

const BackButton = styled.div`
  font-weight: bold;
  font-size: 4rem;
`;
const TitleString = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 3rem;
`;
const InputSavingAmount = styled.input`
  margin-left: 2rem !important;
  width: 20rem !important;
  margin-top: 3rem !important;
`;
const SubTitleString = styled.div`
  font-size: 1rem;
  color: grey;
  margin-top: 1rem;
`;

const Row = styled.div`
  display: flex;
  margin-top: 4rem;
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

const GoalSettingStep4PlanComponent = (prop) => {
  const [savingCode, setSavingCode] = useState(prop.savingCode);
  const [savingDetailCode, setSavingDetailCode] = useState(prop.savingDetailCode);
  const [savingAmount, setSavingAmount] = useState(prop.savingAmount);
  return (
    <React.Fragment>
      <BackButton
        onClick={() => {
          prop.onChangePrevStep();
        }}
      >
        ←
      </BackButton>
      <TitleString>목표 달성을 위해</TitleString>
      <TitleString>계획이 있으신가요?</TitleString>
      <InputSavingAmount
        value={addComma2Number(savingAmount)}
        onChange={({ target }) => {
          setSavingAmount(target.value.replace(/,/gi, ''));
        }}
      ></InputSavingAmount>

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
          prop.getChildSavingCode(savingCode);
          prop.getChildSavingDetailCode(savingDetailCode);
          prop.getChildSavingAmount(savingAmount);
          prop.onChangeNextStep();
        }}
      >
        다음
      </NextButton>
    </React.Fragment>
  );
};

export default GoalSettingStep4PlanComponent;
